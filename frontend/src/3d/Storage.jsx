import React from 'react';
import BaseComponent from './BaseComponent';

export default function Storage({ product, exploded, compatibility, rgbEnabled }) {
    if (!product) return null;

    return (
        <BaseComponent
            product={product}
            category="Storage"
            position={[-0.4, 0.2, -0.92]} 
            size={[0.2, 0.8, 0.05]}
            defaultColor="#1f2937"
            exploded={exploded}
            explodedPosition={[1.25, -2.2, 1.5]} // Bottom-left of the circle
            compatibility={compatibility}
            rgbEnabled={rgbEnabled}
        >
            {({ color, texture, params }) => (
                <group rotation={[0, 0, Math.PI / 2]}>
                    {/* M.2 PCB */}
                    <mesh castShadow receiveShadow position={[0, 0, 0]}>
                        <boxGeometry args={[0.2, 0.8, 0.02]} />
                        <meshStandardMaterial color="#0b1c2c" roughness={0.9} />
                    </mesh>

                    {params?.isHeatsink ? (
                        /* Thick Heatsink */
                        <mesh castShadow receiveShadow position={[0, 0.05, 0.04]}>
                            <boxGeometry args={[0.22, 0.8, 0.06]} />
                            <meshStandardMaterial color={texture ? "#ffffff" : "#222"} map={texture} roughness={0.4} metalness={0.7} />
                        </mesh>
                    ) : (
                        <>
                            {/* Controller/NAND Chips */}
                            <mesh castShadow receiveShadow position={[0, 0.2, 0.015]}>
                                <boxGeometry args={[0.15, 0.2, 0.02]} />
                                <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.4} />
                            </mesh>
                            <mesh castShadow receiveShadow position={[0, -0.1, 0.015]}>
                                <boxGeometry args={[0.15, 0.3, 0.02]} />
                                <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.4} />
                            </mesh>
                            
                            {/* Label Sticker */}
                            <mesh castShadow receiveShadow position={[0, 0.05, 0.026]}>
                                <boxGeometry args={[0.18, 0.7, 0.005]} />
                                <meshStandardMaterial color={texture ? "#ffffff" : "#eeeeee"} map={texture} roughness={0.8} />
                            </mesh>
                        </>
                    )}

                    {/* Gold Contact Pins */}
                    <mesh castShadow receiveShadow position={[0, -0.38, 0]}>
                        <boxGeometry args={[0.18, 0.04, 0.022]} />
                        <meshStandardMaterial color="#b8860b" roughness={0.4} metalness={0.9} />
                    </mesh>
                </group>
            )}
        </BaseComponent>
    );
}
