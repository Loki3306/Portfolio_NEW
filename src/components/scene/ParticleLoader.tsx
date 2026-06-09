"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

interface ParticleLoaderProps {
  onComplete: () => void;
}

const ParticleScene = ({ onComplete }: { onComplete: () => void }) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate target positions for 'L' and 'G'
  const particleCount = 1000;
  
  const { positions, targets } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const tar = new Float32Array(particleCount * 3);
    
    // Simple L and G shape generators
    for (let i = 0; i < particleCount; i++) {
      // Start positions: random in a sphere
      const r = 10 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Target positions: 'L G'
      const isL = Math.random() > 0.5;
      if (isL) {
        // L
        const isVertical = Math.random() > 0.3;
        if (isVertical) {
          tar[i * 3] = -2 + (Math.random() * 0.5 - 0.25); // x
          tar[i * 3 + 1] = (Math.random() * 4 - 2); // y
          tar[i * 3 + 2] = (Math.random() * 0.5 - 0.25); // z
        } else {
          tar[i * 3] = -2 + (Math.random() * 2); // x
          tar[i * 3 + 1] = -2 + (Math.random() * 0.5 - 0.25); // y
          tar[i * 3 + 2] = (Math.random() * 0.5 - 0.25); // z
        }
      } else {
        // G (approximated with a circle and a line)
        const angle = Math.random() * Math.PI * 1.5 + Math.PI * 0.25;
        const radius = 1.5 + Math.random() * 0.5;
        
        tar[i * 3] = 2 + radius * Math.cos(angle);
        tar[i * 3 + 1] = radius * Math.sin(angle);
        tar[i * 3 + 2] = (Math.random() * 0.5 - 0.25);
      }
    }
    return { positions: pos, targets: tar };
  }, [particleCount]);

  useEffect(() => {
    if (!pointsRef.current) return;

    const geometry = pointsRef.current.geometry;
    const posAttribute = geometry.attributes.position;
    
    // Animate to target
    const timeline = gsap.timeline();
    
    // Create an object to tween
    const progress = { value: 0 };
    
    timeline.to(progress, {
      value: 1,
      duration: 1.5,
      ease: "power3.inOut",
      onUpdate: () => {
        const currentPos = posAttribute.array as Float32Array;
        for (let i = 0; i < particleCount * 3; i++) {
          currentPos[i] = positions[i] + (targets[i] - positions[i]) * progress.value;
        }
        posAttribute.needsUpdate = true;
      }
    })
    .to(progress, {
      value: 2, // explosion
      duration: 1,
      ease: "expo.in",
      delay: 0.5,
      onUpdate: () => {
        const currentPos = posAttribute.array as Float32Array;
        const explodeFactor = progress.value - 1; // 0 to 1
        for (let i = 0; i < particleCount; i++) {
          // Push outward based on direction from center
          currentPos[i * 3] += currentPos[i * 3] * explodeFactor * 0.1;
          currentPos[i * 3 + 1] += currentPos[i * 3 + 1] * explodeFactor * 0.1;
          currentPos[i * 3 + 2] += (Math.random() - 0.5) * explodeFactor * 2;
        }
        posAttribute.needsUpdate = true;
      },
      onComplete: () => {
        onComplete();
      }
    });

    return () => {
      timeline.kill();
    };
  }, [positions, targets, onComplete]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#F5A524" // Warm Yellow Accent
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function ParticleLoader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleComplete = () => {
    gsap.to(".loader-overlay", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setIsVisible(false);
        onComplete();
      }
    });
  };

  if (!isVisible) return null;

  return (
    <div className="loader-overlay fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ParticleScene onComplete={handleComplete} />
      </Canvas>
      <button 
        onClick={handleComplete}
        className="absolute bottom-8 right-8 text-xs font-mono text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
      >
        [ Skip ]
      </button>
    </div>
  );
}
