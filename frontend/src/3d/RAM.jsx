import React from 'react';
import BaseComponent from './BaseComponent';
import { RGBBar } from './RGBHelper';

export default function RAM({ product, exploded, compatibility, rgbEnabled }) {
    if (!product) return null;

    return (
        <BaseComponent
            product={product}
            category="RAM"
            position={[0.6, 0.5, -0.6]}
            size={[0.1, 1.2, 0.4]}
            defaultColor="#222222"
            exploded={exploded}
            explodedPosition={[1.25, 2.2, 1.5]}
            compatibility={compatibility}
            rgbEnabled={rgbEnabled}
        >
            {({ color, texture, emissive, emissiveIntensity, rgbEnabled, params }) => {
                const count = params?.modules || 2;
                const isWhite = params?.isWhite;
                const baseColor = isWhite ? "#dddddd" : "#222222";
                
                return (
                    <group>
                        {Array.from({ length: count }).map((_, i) => (
                            <group key={`ram-stick-${i}`} position={[i * 0.2, 0, 0]}>
                                {/* RAM PCB */}
                                <mesh castShadow receiveShadow position={[0, -0.1, 0]}>
                                    <boxGeometry args={[0.04, 1.0, 0.38]} />
                                    <meshStandardMaterial color="#0a2a0a" roughness={0.9} />
                                </mesh>
                                
                                {/* Gold Contacts */}
                                <mesh castShadow receiveShadow position={[0, -0.55, 0]}>
                                    <boxGeometry args={[0.045, 0.1, 0.36]} />
                                    <meshStandardMaterial color="#b8860b" roughness={0.4} metalness={0.8} />
                                </mesh>

                                {/* Heatspreader (Left Side) */}
                                <mesh castShadow receiveShadow position={[-0.03, 0, 0]}>
                                    <boxGeometry args={[0.03, 1.1, 0.39]} />
                                    <meshStandardMaterial color={baseColor} roughness={0.5} metalness={0.6} />
                                </mesh>

                                {/* Heatspreader (Right Side) */}
                                <mesh castShadow receiveShadow position={[0.03, 0, 0]}>
                                    <boxGeometry args={[0.03, 1.1, 0.39]} />
                                    <meshStandardMaterial color={baseColor} roughness={0.5} metalness={0.6} />
                                </mesh>

                                {/* Top Lightbar - RGB animated when enabled */}
                                {rgbEnabled ? (
                                    <RGBBar 
                                        position={[0, 0.58, 0]} 
                                        size={[0.08, 0.06, 0.39]} 
                                        speed={0.4 + i * 0.3}
                                        intensity={4.0}
                                        phaseOffset={i * 1.5}
                                    />
                                ) : (
                                    <mesh castShadow receiveShadow position={[0, 0.56, 0]}>
                                        <boxGeometry args={[0.08, 0.04, 0.39]} />
                                        <meshStandardMaterial color={baseColor} roughness={0.8} />
                                    </mesh>
                                )}
                            </group>
                        ))}
                    </group>
                );
            }}
        </BaseComponent>
    );
}
