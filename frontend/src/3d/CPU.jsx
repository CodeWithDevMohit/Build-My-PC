import React from 'react';
import BaseComponent from './BaseComponent';

export default function CPU({ product, exploded, compatibility, rgbEnabled }) {
    return (
        <BaseComponent
            product={product}
            category="CPU"
            position={[-0.2, 1.0, -0.92]} // Adjusted to perfectly fit inside the procedural motherboard CPU socket
            size={[0.8, 0.8, 0.15]}
            defaultColor="#c0c0c0"
            exploded={exploded}
            explodedPosition={[5.0, 0, 1.5]} // Right edge of the circle
            compatibility={compatibility}
            rgbEnabled={rgbEnabled}
        >
            {({ color, texture }) => (
                <group>
                    {/* CPU Substrate (PCB) */}
                    <mesh castShadow receiveShadow position={[0, 0, 0]}>
                        <boxGeometry args={[0.78, 0.78, 0.04]} />
                        <meshStandardMaterial color="#0b3815" roughness={0.9} />
                    </mesh>

                    {/* Integrated Heat Spreader (IHS) */}
                    <mesh castShadow receiveShadow position={[0, 0, 0.04]}>
                        <boxGeometry args={[0.65, 0.65, 0.05]} />
                        <meshStandardMaterial color={texture ? "#ffffff" : "#c0c0c0"} map={texture} roughness={0.4} metalness={0.7} />
                    </mesh>
                    
                    {/* Gold Contacts (Bottom) */}
                    <mesh castShadow receiveShadow position={[0, 0, -0.021]}>
                        <boxGeometry args={[0.7, 0.7, 0.005]} />
                        <meshStandardMaterial color="#b8860b" roughness={0.5} metalness={0.9} />
                    </mesh>
                </group>
            )}
        </BaseComponent>
    );
}
