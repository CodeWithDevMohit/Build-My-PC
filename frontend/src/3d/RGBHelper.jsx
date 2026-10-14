import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animated RGB color that cycles through the rainbow
export function useRGBColor(speed = 1.0) {
    const colorRef = useRef(new THREE.Color('#ff0000'));
    
    useFrame((state) => {
        const t = state.clock.elapsedTime * speed;
        const r = Math.sin(t) * 0.5 + 0.5;
        const g = Math.sin(t + 2.094) * 0.5 + 0.5;
        const b = Math.sin(t + 4.189) * 0.5 + 0.5;
        colorRef.current.setRGB(r, g, b);
    });
    
    return colorRef;
}

// A single LED strip mesh that cycles through RGB colors with bloom-friendly emissive
export function LEDStrip({ position = [0,0,0], size = [1, 0.03, 0.03], rotation = [0,0,0], speed = 0.8, intensity = 3.0 }) {
    const meshRef = useRef();
    
    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.elapsedTime * speed;
            const r = Math.sin(t) * 0.5 + 0.5;
            const g = Math.sin(t + 2.094) * 0.5 + 0.5;
            const b = Math.sin(t + 4.189) * 0.5 + 0.5;
            meshRef.current.material.emissive.setRGB(r, g, b);
            meshRef.current.material.emissiveIntensity = intensity;
        }
    });
    
    return (
        <mesh ref={meshRef} position={position} rotation={rotation}>
            <boxGeometry args={size} />
            <meshStandardMaterial 
                color="#000000" 
                emissive="#ff0000" 
                emissiveIntensity={intensity}
                toneMapped={false}
            />
        </mesh>
    );
}

// Animated ring that glows with cycling RGB (for fan rings)
export function RGBRing({ position = [0,0,0], innerRadius = 0.4, outerRadius = 0.48, rotation = [0,0,0], speed = 0.6, intensity = 3.0 }) {
    const meshRef = useRef();
    
    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.elapsedTime * speed;
            const r = Math.sin(t) * 0.5 + 0.5;
            const g = Math.sin(t + 2.094) * 0.5 + 0.5;
            const b = Math.sin(t + 4.189) * 0.5 + 0.5;
            meshRef.current.material.emissive.setRGB(r, g, b);
            meshRef.current.material.emissiveIntensity = intensity;
        }
    });
    
    return (
        <mesh ref={meshRef} position={position} rotation={rotation}>
            <ringGeometry args={[innerRadius, outerRadius, 48]} />
            <meshStandardMaterial 
                color="#000000" 
                emissive="#ff0000" 
                emissiveIntensity={intensity}
                side={THREE.DoubleSide}
                toneMapped={false}
            />
        </mesh>
    );
}

// Animated emissive bar (for RAM lightbars, GPU logo strips)
export function RGBBar({ position = [0,0,0], size = [1.0, 0.04, 0.2], speed = 0.5, intensity = 3.0, phaseOffset = 0 }) {
    const meshRef = useRef();
    
    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.elapsedTime * speed + phaseOffset;
            const r = Math.sin(t) * 0.5 + 0.5;
            const g = Math.sin(t + 2.094) * 0.5 + 0.5;
            const b = Math.sin(t + 4.189) * 0.5 + 0.5;
            meshRef.current.material.emissive.setRGB(r, g, b);
            meshRef.current.material.emissiveIntensity = intensity;
        }
    });
    
    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={size} />
            <meshStandardMaterial 
                color="#111111" 
                emissive="#ff0000" 
                emissiveIntensity={intensity}
                toneMapped={false}
            />
        </mesh>
    );
}
