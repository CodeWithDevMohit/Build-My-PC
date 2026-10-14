import React from 'react';
import BaseComponent from './BaseComponent';
import { LEDStrip, RGBBar } from './RGBHelper';

export default function Motherboard({ product, exploded, compatibility, rgbEnabled }) {
    if (!product) return null;

    return (
        <BaseComponent
            product={product}
            category="Motherboard"
            position={[0, -0.5, -1.0]}
            size={[3.0, 3.0, 0.1]}
            defaultColor="#1a1a1a"
            exploded={exploded}
            explodedPosition={[2.5, 0, 0]}
            compatibility={compatibility}
            rgbEnabled={rgbEnabled}
        >
            {({ color, texture, emissive, emissiveIntensity, rgbEnabled, params }) => {
                const width = params?.width || 2.4;
                const height = params?.height || 3.0;

                return (
                    <group>
                        {/* Main PCB */}
                        <mesh castShadow receiveShadow position={[0, 0, 0]}>
                            <boxGeometry args={[width, height, 0.05]} />
                            <meshStandardMaterial 
                                color={color} 
                                roughness={0.8}
                                metalness={0.2}
                            />
                        </mesh>

                        {/* CPU Socket Area */}
                        <mesh castShadow receiveShadow position={[-0.2, height/2 - 0.7, 0.05]}>
                            <boxGeometry args={[0.8, 0.8, 0.05]} />
                            <meshStandardMaterial color="#444444" roughness={0.6} metalness={0.5} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[-0.2, height/2 - 0.7, 0.08]}>
                            <boxGeometry args={[0.9, 0.9, 0.02]} />
                            <meshStandardMaterial color="#cccccc" roughness={0.4} metalness={0.8} />
                        </mesh>

                        {/* RAM Slots */}
                        {[0, 1, 2, 3].map(i => (
                            <mesh key={`ram-slot-${i}`} castShadow receiveShadow position={[0.6 + i * 0.18, height/2 - 0.7, 0.08]}>
                                <boxGeometry args={[0.08, 1.2, 0.1]} />
                                <meshStandardMaterial color="#222222" roughness={0.9} />
                            </mesh>
                        ))}

                        {/* VRM Heatsinks */}
                        <mesh castShadow receiveShadow position={[-0.2, height/2 - 0.15, 0.15]}>
                            <boxGeometry args={[1.5, 0.3, 0.2]} />
                            <meshStandardMaterial color="#111111" roughness={0.5} metalness={0.7} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[-1.0, height/2 - 0.7, 0.15]}>
                            <boxGeometry args={[0.4, 1.2, 0.2]} />
                            <meshStandardMaterial color="#111111" roughness={0.5} metalness={0.7} />
                        </mesh>

                        {/* PCIe Slots */}
                        {[0, 1, 2].map(i => {
                            const yPos = (height/2 - 1.7) - i * 0.7;
                            if (yPos < -height/2 + 0.2) return null;
                            return (
                                <mesh key={`pcie-slot-${i}`} castShadow receiveShadow position={[-0.4, yPos, 0.08]}>
                                    <boxGeometry args={[1.6, 0.12, 0.15]} />
                                    <meshStandardMaterial color="#333333" roughness={0.8} metalness={0.2} />
                                </mesh>
                            );
                        })}

                        {/* Chipset Heatsink */}
                        <mesh castShadow receiveShadow position={[0.8, -height/2 + 0.5, 0.1]}>
                            <boxGeometry args={[1.0, 1.0, 0.15]} />
                            <meshStandardMaterial color="#151515" roughness={0.4} metalness={0.8} />
                        </mesh>

                        {/* === RGB EDGE LIGHTING === */}
                        {rgbEnabled && (
                            <>
                                {/* Right edge LED strip */}
                                <LEDStrip 
                                    position={[width/2 - 0.02, 0, 0.04]} 
                                    size={[0.04, height - 0.2, 0.04]} 
                                    speed={0.6} 
                                    intensity={3.5} 
                                />
                                {/* Top edge LED strip */}
                                <LEDStrip 
                                    position={[0, height/2 - 0.02, 0.04]} 
                                    size={[width - 0.2, 0.04, 0.04]} 
                                    speed={0.6} 
                                    intensity={3.5} 
                                />
                                {/* VRM heatsink RGB accent */}
                                <RGBBar 
                                    position={[-0.2, height/2 - 0.15, 0.27]} 
                                    size={[1.5, 0.04, 0.04]} 
                                    speed={0.4} 
                                    intensity={3.0} 
                                />
                                {/* Chipset logo glow */}
                                <RGBBar 
                                    position={[0.8, -height/2 + 0.5, 0.2]} 
                                    size={[0.6, 0.6, 0.02]} 
                                    speed={0.3} 
                                    intensity={2.0} 
                                />
                            </>
                        )}
                    </group>
                );
            }}
        </BaseComponent>
    );
}
