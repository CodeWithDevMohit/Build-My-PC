import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { resolveProductAssets } from './AssetResolver';

const BaseComponent = ({
    product,
    category,
    position = [0, 0, 0],
    size = [1, 1, 1],
    defaultColor = "#888888",
    exploded = false,
    offset = [0, 0, 0],
    explodedPosition = null, // Absolute position for exploded view
    compatibility,
    geometry = "box", // "box" or "cylinder"
    opacity = 1,
    transparent = false,
    wireframe = false,
    rgbEnabled = false,
    children
}) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    const texture = null; // Removed image mapping as requested

    // Resolve product-specific parameters
    const assetData = React.useMemo(() => resolveProductAssets(product), [product]);
    const params = assetData?.params || {};

    // Pop-in animation when component is replaced
    useEffect(() => {
        if (meshRef.current && product) {
            meshRef.current.scale.set(0, 0, 0);
        }
    }, [product?.id]);

    // Smooth transition for exploded view and scale
    useFrame((state, delta) => {
        let targetPos;
        if (exploded) {
            targetPos = explodedPosition 
                ? new THREE.Vector3(...explodedPosition) 
                : new THREE.Vector3(position[0] + offset[0], position[1] + offset[1], position[2] + offset[2]);
        } else {
            targetPos = new THREE.Vector3(...position);
        }

        if (meshRef.current) {
            meshRef.current.position.lerp(targetPos, 5 * delta);
            meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 8 * delta);
        }
        
        // Add a gentle rotation if we have a texture to give a 360 feel
        if (meshRef.current && texture && !hovered) {
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    // If no product is selected, we could return a faint placeholder, or nothing.
    // Making it completely transparent if no product, but keep the hover area (if we want placeholders).
    // The requirement says: "Remove component -> remove shape", so we return null.
    if (!product && category !== "Cabinet") return null;

    // For cabinet, even without product we show a faint outline
    if (!product && category === "Cabinet") {
        return (
            <group ref={meshRef} position={position}>
                <mesh>
                    <boxGeometry args={size} />
                    <meshBasicMaterial color="#ffffff" wireframe opacity={0.05} transparent />
                </mesh>
            </group>
        );
    }

    const isSpecificallyIncompatible = compatibility?.issues?.some(i => i.toLowerCase().includes(category.toLowerCase()));
    const isOverallIncompatible = compatibility?.isCompatible === false;

    // Visual feedback
    let glowColor = defaultColor;
    let emissiveIntensity = 0.1;

    if (isSpecificallyIncompatible) {
        glowColor = "#ff0000"; // Red glow for incompatible
        emissiveIntensity = 0.8;
    } else if (isOverallIncompatible) {
        emissiveIntensity = 0.1;
    } else if (rgbEnabled) {
        glowColor = "#a855f7"; // Purple glow for RGB mode
        emissiveIntensity = 0.6;
    } else {
        glowColor = "#00ff00"; // Generic compatible / hover glow
        emissiveIntensity = hovered ? 0.3 : 0.1;
    }

    // If we have a texture, we make the base color white so the image colors are preserved
    const currentColor = texture ? (isSpecificallyIncompatible ? "#ffaaaa" : "#ffffff") : (isSpecificallyIncompatible ? "#aa0000" : defaultColor);

    return (
        <group ref={meshRef} position={position}>
            <group
                onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
                onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
            >
                {/* Allow components to pass a custom render function for complex procedural models */}
                {typeof children === 'function' ? (
                    children({ color: currentColor, texture, emissive: glowColor, emissiveIntensity, isSpecificallyIncompatible, rgbEnabled, params })
                ) : (
                    <mesh castShadow receiveShadow>
                        {geometry === 'box' ? <boxGeometry args={size} /> : <cylinderGeometry args={size} />}
                        <meshStandardMaterial
                            color={currentColor}
                            map={texture}
                            emissive={glowColor}
                            emissiveIntensity={emissiveIntensity}
                            transparent={transparent}
                            opacity={opacity}
                            wireframe={wireframe}
                        />
                    </mesh>
                )}
            </group>

            {/* Hover Tooltip */}
            {hovered && (
                <Html distanceFactor={10} position={[0, size[1] / 2 + 0.5, 0]} zIndexRange={[100, 0]}>
                    <div className={`p-3 rounded-xl border backdrop-blur-md shadow-2xl transition-all pointer-events-none custom-tooltip ${isSpecificallyIncompatible ? 'bg-red-950/90 border-red-500' : 'bg-black/80 border-purple-500/50'}`}>
                        <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{category}</p>
                        <p className="text-white font-bold text-xs truncate max-w-[200px] mt-0.5">{product.name}</p>
                        <div className="flex justify-between items-center mt-2 gap-4">
                            <p className="text-emerald-400 text-xs font-bold">₹{product.price.toLocaleString()}</p>
                        </div>
                        {isSpecificallyIncompatible && (
                            <div className="mt-2 bg-red-500/20 border border-red-500/50 rounded px-2 py-1">
                                <p className="text-red-400 text-[9px] font-bold uppercase animate-pulse">⚠️ Incompatible</p>
                            </div>
                        )}
                        {!isSpecificallyIncompatible && (
                            <div className="mt-2 bg-emerald-500/10 border border-emerald-500/30 rounded px-2 py-1">
                                <p className="text-emerald-400 text-[9px] font-bold uppercase">✓ Compatible</p>
                            </div>
                        )}
                    </div>
                </Html>
            )}
        </group>
    );
};

export default BaseComponent;
