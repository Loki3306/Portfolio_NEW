"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const particleCount = 80;
const maxDistance = 1.5;

function NetworkGraph() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { mouse, viewport } = useThree();

  // Initialize random node positions and velocities
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Random position in a sphere-like volume
      const r = 2.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Random slow velocity
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return { positions: pos, velocities: vel };
  }, []);

  // Pre-allocate buffer for lines (worst case = all connected, but we cap it)
  const maxLines = particleCount * particleCount;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;

    // Convert mouse to 3D space
    const mouse3D = new THREE.Vector3(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    );

    let lineIndex = 0;
    const currentPositions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    // Update positions & check connections
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      
      // Basic movement
      currentPositions[idx] += velocities[idx];
      currentPositions[idx + 1] += velocities[idx + 1];
      currentPositions[idx + 2] += velocities[idx + 2];

      const p1 = new THREE.Vector3(
        currentPositions[idx],
        currentPositions[idx + 1],
        currentPositions[idx + 2]
      );

      // Bounce off boundaries
      if (p1.length() > 3.5) {
        velocities[idx] *= -1;
        velocities[idx + 1] *= -1;
        velocities[idx + 2] *= -1;
      }

      // Mouse attraction (subtle)
      const distToMouse = p1.distanceTo(mouse3D);
      if (distToMouse < 2.0) {
        const force = (2.0 - distToMouse) * 0.002;
        velocities[idx] += (mouse3D.x - p1.x) * force;
        velocities[idx + 1] += (mouse3D.y - p1.y) * force;
        
        // Dampen velocity if it gets too high
        velocities[idx] *= 0.95;
        velocities[idx + 1] *= 0.95;
      }

      // Connect to nearby nodes
      for (let j = i + 1; j < particleCount; j++) {
        const jdx = j * 3;
        const p2 = new THREE.Vector3(
          currentPositions[jdx],
          currentPositions[jdx + 1],
          currentPositions[jdx + 2]
        );

        const dist = p1.distanceTo(p2);
        
        if (dist < maxDistance) {
          // Add line
          linePositions[lineIndex] = p1.x;
          linePositions[lineIndex + 1] = p1.y;
          linePositions[lineIndex + 2] = p1.z;
          
          linePositions[lineIndex + 3] = p2.x;
          linePositions[lineIndex + 4] = p2.y;
          linePositions[lineIndex + 5] = p2.z;

          // Color calculation (alpha based on distance)
          const alpha = 1.0 - (dist / maxDistance);
          // Warm Amber (245, 165, 36)
          const colorBase = [0.96, 0.65, 0.14]; 
          
          // If close to mouse, make it glow brighter
          const glowMultiplier = distToMouse < 1.5 ? 1.5 : 0.5;
          
          for (let c = 0; c < 2; c++) {
            lineColors[lineIndex + (c * 3)] = colorBase[0] * alpha * glowMultiplier;
            lineColors[lineIndex + (c * 3) + 1] = colorBase[1] * alpha * glowMultiplier;
            lineColors[lineIndex + (c * 3) + 2] = colorBase[2] * alpha * glowMultiplier;
          }

          lineIndex += 6;
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Update lines
    const lineGeom = linesRef.current.geometry;
    lineGeom.attributes.position.needsUpdate = true;
    lineGeom.attributes.color.needsUpdate = true;
    lineGeom.setDrawRange(0, lineIndex / 3);

    // Slowly rotate entire scene
    state.scene.rotation.y += 0.001;
    state.scene.rotation.x += 0.0005;
  });

  return (
    <group>
      {/* Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#f5a524" transparent opacity={0.8} blending={THREE.AdditiveBlending} />
      </points>
      
      {/* Edges */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={maxLines * 2} array={linePositions} itemSize={3} args={[linePositions, 3]} />
          <bufferAttribute attach="attributes-color" count={maxLines * 2} array={lineColors} itemSize={3} args={[lineColors, 3]} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.6} blending={THREE.AdditiveBlending} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[400px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <NetworkGraph />
      </Canvas>
    </div>
  );
}
