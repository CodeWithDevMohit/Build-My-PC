import React from 'react';
import BaseComponent from './BaseComponent';

export default function PSU({ product, exploded, compatibility, rgbEnabled }) {
    return (
        <BaseComponent
            product={product}
            category="PSU"
            position={[0, -2.4, -0.2]} // Pulled slightly back in the case
            size={[1.8, 1.2, 1.8]}
            defaultColor="#111111"
            exploded={exploded}
            explodedPosition={[3.75, -2.2, 1.5]} // Bottom-right of the circle
            compatibility={compatibility}
            rgbEnabled={rgbEnabled}
        >
            {({ color, texture }) => (
                <group>
                    {/* PSU Main Body */}
                    <mesh castShadow receiveShadow position={[0, 0, 0]}>
                        <boxGeometry args={[1.8, 1.2, 1.8]} />
                        <meshStandardMaterial color="#111111" roughness={0.8} metalness={0.2} />
                    </mesh>

                    {/* Side Label */}
                    <mesh castShadow receiveShadow position={[-0.91, 0, 0]}>
                        <boxGeometry args={[0.02, 1.0, 1.6]} />
                        <meshStandardMaterial color={texture ? "#ffffff" : "#444444"} map={texture} roughness={0.7} />
                    </mesh>
                    <mesh castShadow receiveShadow position={[0.91, 0, 0]}>
                        <boxGeometry args={[0.02, 1.0, 1.6]} />
                        <meshStandardMaterial color={texture ? "#ffffff" : "#444444"} map={texture} roughness={0.7} />
                    </mesh>

                    {/* Top Fan Grill */}
                    <mesh castShadow receiveShadow position={[0, 0.61, 0]}>
                        <ringGeometry args={[0.5, 0.7, 32]} />
                        <meshStandardMaterial color="#222222" metalness={0.8} />
                    </mesh>
                    <mesh castShadow receiveShadow position={[0, 0.605, 0]}>
                        <cylinderGeometry args={[0.68, 0.68, 0.02, 32]} />
                        <meshStandardMaterial color="#050505" roughness={0.9} />
                    </mesh>
                    {/* Fan blades (static/simple for PSU) */}
                    <mesh castShadow receiveShadow position={[0, 0.6, 0]}>
                        <boxGeometry args={[1.3, 0.01, 0.2]} />
                        <meshStandardMaterial color="#1a1a1a" />
                    </mesh>
                    <mesh castShadow receiveShadow position={[0, 0.6, 0]} rotation={[0, Math.PI / 2, 0]}>
                        <boxGeometry args={[1.3, 0.01, 0.2]} />
                        <meshStandardMaterial color="#1a1a1a" />
                    </mesh>

                    {/* Cables coming out the front (towards +z) */}
                    <mesh castShadow receiveShadow position={[-0.5, 0, 0.95]}>
                        <cylinderGeometry args={[0.1, 0.1, 0.3, 16]} rotation={[Math.PI / 2, 0, 0]} />
                        <meshStandardMaterial color="#000000" roughness={0.9} />
                    </mesh>
                    <mesh castShadow receiveShadow position={[0, 0, 0.95]}>
                        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} rotation={[Math.PI / 2, 0, 0]} />
                        <meshStandardMaterial color="#000000" roughness={0.9} />
                    </mesh>
                </group>
            )}
        </BaseComponent>
    );
}
