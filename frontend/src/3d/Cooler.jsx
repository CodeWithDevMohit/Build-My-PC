import React from 'react';
import BaseComponent from './BaseComponent';
import * as THREE from 'three';
import { RGBRing, RGBBar } from './RGBHelper';

export default function Cooler({ product, exploded, compatibility, rgbEnabled }) {
    if (!product) return null;

    return (
        <BaseComponent
            product={product}
            category="Cooler"
            position={[-0.2, 1.0, -0.6]}
            size={[1.0, 1.2, 0.8]}
            defaultColor="#aaaaaa"
            exploded={exploded}
            explodedPosition={[3.75, 2.2, 1.5]}
            compatibility={compatibility}
            rgbEnabled={rgbEnabled}
        >
            {({ color, texture, emissive, emissiveIntensity, rgbEnabled, params }) => {
                const isAIO = params?.isAIO;
                const fanCount = params?.fans || 1;

                if (isAIO) {
                    return (
                        <group>
                            {/* Pump block (on CPU) */}
                            <mesh castShadow receiveShadow position={[0, 0, -0.2]}>
                                <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} rotation={[Math.PI / 2, 0, 0]} />
                                <meshStandardMaterial color="#111" roughness={0.3} metalness={0.8} />
                            </mesh>
                            
                            {/* RGB Ring on Pump - animated */}
                            {rgbEnabled && (
                                <RGBRing 
                                    position={[0, 0, -0.04]} 
                                    rotation={[Math.PI / 2, 0, 0]}
                                    innerRadius={0.32} 
                                    outerRadius={0.41} 
                                    speed={0.4} 
                                    intensity={4.0} 
                                />
                            )}

                            {/* Tubes going up */}
                            <mesh castShadow receiveShadow position={[0.2, 1.5, -0.1]}>
                                <cylinderGeometry args={[0.08, 0.08, 3.0, 16]} />
                                <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
                            </mesh>
                            <mesh castShadow receiveShadow position={[-0.2, 1.5, -0.1]}>
                                <cylinderGeometry args={[0.08, 0.08, 3.0, 16]} />
                                <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
                            </mesh>

                            {/* Radiator (mounted high in case) */}
                            <mesh castShadow receiveShadow position={[0, 3.2, 0]}>
                                <boxGeometry args={[fanCount * 1.2 + 0.2, 0.3, 1.4]} />
                                <meshStandardMaterial color="#111111" roughness={0.5} />
                            </mesh>

                            {/* RGB strip on radiator */}
                            {rgbEnabled && (
                                <RGBBar 
                                    position={[0, 3.2, 0.75]} 
                                    size={[fanCount * 1.2, 0.04, 0.04]} 
                                    speed={0.6} 
                                    intensity={3.0} 
                                />
                            )}
                        </group>
                    );
                }

                // Standard Air Cooler
                return (
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        {/* Heatsink Block */}
                        <mesh castShadow receiveShadow position={[0, 0, 0]}>
                            <boxGeometry args={[1.0, 0.6, 1.2]} />
                            <meshStandardMaterial color="#888888" roughness={0.3} metalness={0.9} />
                        </mesh>
                        {/* Heatpipes */}
                        <mesh castShadow receiveShadow position={[0, -0.35, 0]}>
                            <boxGeometry args={[0.5, 0.1, 0.5]} />
                            <meshStandardMaterial color="#b87333" roughness={0.4} metalness={0.8} />
                        </mesh>
                        {/* Fan */}
                        <group position={[0, 0.35, 0]}>
                            <mesh castShadow receiveShadow>
                                <boxGeometry args={[1.0, 0.1, 1.0]} />
                                <meshStandardMaterial color="#111" roughness={0.8} />
                            </mesh>
                            <mesh castShadow receiveShadow position={[0, 0, 0]}>
                                <cylinderGeometry args={[0.45, 0.45, 0.12, 16]} />
                                <meshStandardMaterial color="#222222" />
                            </mesh>
                            {/* Animated RGB Ring around fan */}
                            {rgbEnabled && (
                                <RGBRing 
                                    position={[0, 0.07, 0]}
                                    innerRadius={0.42} 
                                    outerRadius={0.49} 
                                    speed={0.5} 
                                    intensity={4.0}
                                />
                            )}
                        </group>
                    </group>
                );
            }}
        </BaseComponent>
    );
}
