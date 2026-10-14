import React from 'react';
import BaseComponent from './BaseComponent';
import * as THREE from 'three';
import { LEDStrip } from './RGBHelper';

export default function Cabinet({ product, exploded, compatibility, rgbEnabled }) {
    if (!product) return null;

    return (
        <BaseComponent
            product={product}
            category="Cabinet"
            position={[0, -0.5, 0]}
            size={[4.5, 5.5, 3.5]}
            defaultColor="#151515"
            exploded={exploded}
            explodedPosition={[-3.5, -0.5, 0]}
            compatibility={compatibility}
            rgbEnabled={rgbEnabled}
        >
            {({ color, texture, emissive, emissiveIntensity, rgbEnabled, params }) => {
                const height = params?.height || 5.0;
                const depth = params?.depth || 4.5;
                const width = 4.5;
                const isWhite = params?.isWhite;
                const baseColor = isWhite ? "#dddddd" : "#111111";
                const psuColor = isWhite ? "#cccccc" : "#222222";

                return (
                    <group position={[0, (height - 5.5) / 2, (depth - 3.5) / 2]}>
                        {/* Back Wall (Motherboard Tray) */}
                        <mesh castShadow receiveShadow position={[0, 0, -depth/2 - 0.05]}>
                            <boxGeometry args={[width, height, 0.1]} />
                            <meshStandardMaterial color={baseColor} roughness={0.8} />
                        </mesh>

                        {/* Top Panel */}
                        <mesh castShadow receiveShadow position={[0, height/2, 0]}>
                            <boxGeometry args={[width, 0.1, depth]} />
                            <meshStandardMaterial color={baseColor} roughness={0.6} metalness={0.4} />
                        </mesh>

                        {/* Bottom Panel */}
                        <mesh castShadow receiveShadow position={[0, -height/2, 0]}>
                            <boxGeometry args={[width, 0.1, depth]} />
                            <meshStandardMaterial color={baseColor} roughness={0.6} metalness={0.4} />
                        </mesh>

                        {/* Front Frame (Open so we can see inside and hover components) */}
                        <mesh castShadow receiveShadow position={[width/2 - 0.05, height/2, 0]}>
                            <boxGeometry args={[0.1, 0.1, depth]} />
                            <meshStandardMaterial color={baseColor} roughness={0.5} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[width/2 - 0.05, -height/2, 0]}>
                            <boxGeometry args={[0.1, 0.1, depth]} />
                            <meshStandardMaterial color={baseColor} roughness={0.5} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[width/2 - 0.05, 0, -depth/2]}>
                            <boxGeometry args={[0.1, height, 0.1]} />
                            <meshStandardMaterial color={baseColor} roughness={0.5} />
                        </mesh>
                        <mesh castShadow receiveShadow position={[width/2 - 0.05, 0, depth/2]}>
                            <boxGeometry args={[0.1, height, 0.1]} />
                            <meshStandardMaterial color={baseColor} roughness={0.5} />
                        </mesh>

                        {/* Back Panel (I/O and Exhaust) */}
                        <mesh castShadow receiveShadow position={[-width/2 + 0.05, 0, 0]}>
                            <boxGeometry args={[0.1, height, depth]} />
                            <meshStandardMaterial color={baseColor} roughness={0.7} />
                        </mesh>

                        {/* PSU Shroud (Bottom Compartment) */}
                        <mesh castShadow receiveShadow position={[0, -height/2 + 1.0, 0]}>
                            <boxGeometry args={[width - 0.2, 0.05, depth - 0.2]} />
                            <meshStandardMaterial color={psuColor} roughness={0.8} />
                        </mesh>

                        {/* Side Glass Panel (Towards Camera) */}
                        <mesh position={[0, 0, depth/2]} castShadow={false} receiveShadow={false} raycast={() => null}>
                            <boxGeometry args={[width - 0.1, height - 0.1, 0.05]} />
                            <meshStandardMaterial 
                                color="#ffffff" 
                                transparent={true} 
                                opacity={0.15} 
                                roughness={0.1}
                                metalness={0.9}
                                envMapIntensity={2.0} 
                            />
                        </mesh>

                        {/* === RGB LED STRIPS === */}
                        {rgbEnabled && (
                            <>
                                {/* Front vertical LED strips on pillars */}
                                <LEDStrip position={[width/2 - 0.05, 0, depth/2 - 0.05]} size={[0.04, height - 0.2, 0.04]} speed={0.5} intensity={4.0} />
                                <LEDStrip position={[width/2 - 0.05, 0, -depth/2 + 0.05]} size={[0.04, height - 0.2, 0.04]} speed={0.5} intensity={4.0} />

                                {/* Bottom horizontal LED strip (under the PSU shroud edge, visible) */}
                                <LEDStrip position={[0, -height/2 + 1.05, depth/2 - 0.15]} size={[width - 0.5, 0.04, 0.04]} speed={0.7} intensity={3.5} />

                                {/* Top horizontal LED strip */}
                                <LEDStrip position={[0, height/2 - 0.08, depth/2 - 0.15]} size={[width - 0.5, 0.04, 0.04]} speed={0.7} intensity={3.5} />
                            </>
                        )}
                    </group>
                );
            }}
        </BaseComponent>
    );
}
