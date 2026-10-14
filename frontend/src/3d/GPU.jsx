import React from 'react';
import BaseComponent from './BaseComponent';
import { RGBRing, RGBBar } from './RGBHelper';

export default function GPU({ product, exploded, compatibility, rgbEnabled }) {
    if (!product) return null;

    return (
        <BaseComponent
            product={product}
            category="GPU"
            position={[0, -0.8, 0.2]}
            size={[2.8, 1.2, 0.4]}
            defaultColor="#222222"
            exploded={exploded}
            explodedPosition={[0, 0, 1.5]}
            compatibility={compatibility}
            rgbEnabled={rgbEnabled}
        >
            {({ color, texture, emissive, emissiveIntensity, rgbEnabled, params }) => {
                const fanCount = params?.fans || 2;
                const length = params?.length || 2.4;
                const height = 1.2;
                const isWhite = params?.isWhite;
                const baseColor = isWhite ? "#dddddd" : "#222222";
                const pcbColor = isWhite ? "#dddddd" : "#111111";

                const fanPositions = [];
                if (fanCount === 1) fanPositions.push(0);
                else if (fanCount === 2) fanPositions.push(-0.55, 0.55);
                else if (fanCount === 3) fanPositions.push(-0.9, 0, 0.9);

                return (
                    <group>
                        {/* GPU Backplate */}
                        <mesh castShadow receiveShadow position={[0, 0, -0.18]}>
                            <boxGeometry args={[length, height, 0.04]} />
                            <meshStandardMaterial color={baseColor} roughness={0.5} metalness={0.8} />
                        </mesh>

                        {/* GPU PCB */}
                        <mesh castShadow receiveShadow position={[0, 0, -0.13]}>
                            <boxGeometry args={[length - 0.1, height - 0.1, 0.02]} />
                            <meshStandardMaterial color={pcbColor} roughness={0.9} />
                        </mesh>

                        {/* Heatsink Fins */}
                        <mesh castShadow receiveShadow position={[0, 0, 0]}>
                            <boxGeometry args={[length - 0.1, height - 0.1, 0.2]} />
                            <meshStandardMaterial color="#888888" roughness={0.4} metalness={0.9} />
                        </mesh>

                        {/* GPU Shroud (Front) */}
                        <mesh castShadow receiveShadow position={[0, 0, 0.15]}>
                            <boxGeometry args={[length, height, 0.1]} />
                            <meshStandardMaterial color={baseColor} roughness={0.6} metalness={0.2} />
                        </mesh>

                        {/* Dynamic Fans */}
                        {fanPositions.map((x, i) => (
                            <group key={`fan-${i}`} position={[x, 0, 0.22]}>
                                {/* Fan Cutout Ring */}
                                <mesh castShadow receiveShadow>
                                    <ringGeometry args={[0.4, 0.45, 32]} />
                                    <meshStandardMaterial color={baseColor} />
                                </mesh>
                                {/* Fan Blades */}
                                <mesh castShadow receiveShadow position={[0, 0, -0.02]}>
                                    <cylinderGeometry args={[0.38, 0.38, 0.04, 16]} />
                                    <meshStandardMaterial color={isWhite ? "#ffffff" : "#1a1a1a"} roughness={0.7} />
                                </mesh>
                                {/* Fan Center Hub */}
                                <mesh castShadow receiveShadow position={[0, 0, 0.01]}>
                                    <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
                                    <meshStandardMaterial color={isWhite ? "#cccccc" : "#333333"} metalness={0.5} />
                                </mesh>
                            </group>
                        ))}

                        {/* PCIe Connector */}
                        <mesh castShadow receiveShadow position={[-0.4, -height/2 - 0.05, -0.13]}>
                            <boxGeometry args={[0.8, 0.1, 0.02]} />
                            <meshStandardMaterial color="#b8860b" roughness={0.4} metalness={0.8} />
                        </mesh>

                        {/* RGB Elements - Animated cycling rings and logo bar */}
                        {rgbEnabled && (
                            <>
                                {/* Animated RGB Logo Bar on Top Edge */}
                                <RGBBar 
                                    position={[0, height/2 + 0.02, 0]} 
                                    size={[length - 0.3, 0.04, 0.25]} 
                                    speed={0.5} 
                                    intensity={4.0} 
                                />

                                {/* Animated RGB Rings around Fans */}
                                {fanPositions.map((x, i) => (
                                    <RGBRing 
                                        key={`fan-rgb-${i}`} 
                                        position={[x, 0, 0.23]} 
                                        innerRadius={0.42} 
                                        outerRadius={0.48} 
                                        speed={0.6 + i * 0.15}
                                        intensity={3.5}
                                    />
                                ))}

                                {/* Side accent strip */}
                                <RGBBar 
                                    position={[length/2 - 0.02, 0, 0]} 
                                    size={[0.03, height - 0.2, 0.03]} 
                                    speed={0.8} 
                                    intensity={2.5} 
                                />
                            </>
                        )}
                    </group>
                );
            }}
        </BaseComponent>
    );
}
