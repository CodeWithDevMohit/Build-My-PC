import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Optimized Realistic Internal PC Components Assembly
function ShowcasePCModel({ mouseTargetRef }) {
    const groupRef = useRef();
    const floatingRef = useRef();
    const fansGroupRef = useRef([]);

    const registerFan = (mesh) => {
        if (mesh && !fansGroupRef.current.includes(mesh)) {
            fansGroupRef.current.push(mesh);
        }
    };

    useFrame((state, delta) => {
        const t = state.clock.elapsedTime;

        // Smooth fan rotation
        const fanSpeed = delta * 7;
        for (let i = 0; i < fansGroupRef.current.length; i++) {
            const fan = fansGroupRef.current[i];
            if (fan) fan.rotation.z += fanSpeed;
        }

        if (groupRef.current) {
            // Smooth cursor parallax interpolation (up to ±14 deg horiz, ±8 deg vert)
            const targetRotY = (mouseTargetRef.current.x * (14 * Math.PI / 180));
            const targetRotX = (-mouseTargetRef.current.y * (8 * Math.PI / 180));
            const targetPosX = mouseTargetRef.current.x * 0.35;
            const targetPosY = -mouseTargetRef.current.y * 0.2;

            // Initial presentation angle (facing camera slightly turned 24 deg so internal parts shine)
            const baseAngleY = -0.42;
            const baseAngleX = 0.04;

            const lerpFactor = Math.min(1, 6 * delta);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, baseAngleY + targetRotY, lerpFactor);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, baseAngleX + targetRotX, lerpFactor);
            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetPosX, lerpFactor);
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPosY, lerpFactor);
        }

        // Gentle idle floating / breathing animation
        if (floatingRef.current) {
            floatingRef.current.position.y = Math.sin(t * 1.5) * 0.08;
        }
    });

    // Theme RGB color palette
    const rgbBlue = "#3b82f6";
    const rgbPurple = "#a855f7";
    const rgbPink = "#ec4899";
    const rgbCyan = "#06b6d4";

    return (
        <group ref={floatingRef}>
            <group ref={groupRef} position={[0, 0, 0]} scale={[1.15, 1.15, 1.15]}>

                {/* ========================================================
                    1. PC CHASSIS (Dual-Chamber Panoramic Tempered Glass)
                   ======================================================== */}
                
                {/* Back Outer Frame */}
                <mesh position={[-1.3, 0.2, 0]}>
                    <boxGeometry args={[0.08, 3.4, 2.2]} />
                    <meshStandardMaterial color="#121316" metalness={0.8} roughness={0.3} />
                </mesh>

                {/* Top Radiator Roof Plate */}
                <mesh position={[0, 1.9, 0]}>
                    <boxGeometry args={[2.6, 0.08, 2.2]} />
                    <meshStandardMaterial color="#16181d" metalness={0.7} roughness={0.35} />
                </mesh>

                {/* Bottom Base Frame */}
                <mesh position={[0, -1.5, 0]}>
                    <boxGeometry args={[2.6, 0.12, 2.2]} />
                    <meshStandardMaterial color="#121316" metalness={0.8} roughness={0.3} />
                </mesh>

                {/* Case Feet */}
                {[
                    [-1.1, -1.6, 0.9],
                    [1.1, -1.6, 0.9],
                    [-1.1, -1.6, -0.9],
                    [1.1, -1.6, -0.9]
                ].map((pos, i) => (
                    <mesh key={`foot-${i}`} position={pos}>
                        <cylinderGeometry args={[0.1, 0.12, 0.12, 12]} />
                        <meshStandardMaterial color="#0a0a0c" metalness={0.9} roughness={0.2} />
                    </mesh>
                ))}

                {/* PSU Shroud */}
                <mesh position={[0, -1.0, 0]}>
                    <boxGeometry args={[2.55, 0.88, 2.15]} />
                    <meshStandardMaterial color="#181a20" metalness={0.6} roughness={0.4} />
                </mesh>

                {/* PSU Shroud Subtle RGB Underglow Strip */}
                <mesh position={[0, -0.56, 1.07]}>
                    <boxGeometry args={[2.4, 0.03, 0.02]} />
                    <meshStandardMaterial color={rgbPurple} emissive={rgbPurple} emissiveIntensity={2.5} toneMapped={false} />
                </mesh>

                {/* Motherboard Backplate Tray */}
                <mesh position={[0, 0.45, -0.85]}>
                    <boxGeometry args={[2.3, 2.0, 0.06]} />
                    <meshStandardMaterial color="#14161b" metalness={0.5} roughness={0.5} />
                </mesh>


                {/* ========================================================
                    2. MOTHERBOARD (ATX Dark PCB with VRM Armor & Heat Shields)
                   ======================================================== */}
                <mesh position={[-0.1, 0.5, -0.8]}>
                    <boxGeometry args={[1.9, 1.9, 0.04]} />
                    <meshStandardMaterial color="#0f1115" roughness={0.8} />
                </mesh>

                {/* VRM Top Heatsink */}
                <mesh position={[-0.3, 1.25, -0.72]}>
                    <boxGeometry args={[1.1, 0.28, 0.12]} />
                    <meshStandardMaterial color="#22252c" metalness={0.85} roughness={0.25} />
                </mesh>

                {/* VRM Left I/O Armor */}
                <mesh position={[-0.8, 0.8, -0.7]}>
                    <boxGeometry args={[0.3, 0.9, 0.15]} />
                    <meshStandardMaterial color="#1c1e24" metalness={0.8} roughness={0.3} />
                </mesh>
                <mesh position={[-0.8, 0.8, -0.62]}>
                    <boxGeometry args={[0.04, 0.7, 0.02]} />
                    <meshStandardMaterial color={rgbPink} emissive={rgbPink} emissiveIntensity={2.0} toneMapped={false} />
                </mesh>

                {/* M.2 SSD Armor Heatsink */}
                <mesh position={[0.2, 0.1, -0.73]}>
                    <boxGeometry args={[0.9, 0.15, 0.06]} />
                    <meshStandardMaterial color="#282c35" metalness={0.9} roughness={0.2} />
                </mesh>
                <mesh position={[0.2, 0.1, -0.69]}>
                    <boxGeometry args={[0.8, 0.02, 0.01]} />
                    <meshStandardMaterial color={rgbCyan} emissive={rgbCyan} emissiveIntensity={2.0} toneMapped={false} />
                </mesh>

                {/* Chipset Heatsink */}
                <mesh position={[0.6, -0.2, -0.72]}>
                    <boxGeometry args={[0.55, 0.55, 0.1]} />
                    <meshStandardMaterial color="#1e2128" metalness={0.85} roughness={0.25} />
                </mesh>


                {/* ========================================================
                    3. MEMORY (Dual DDR5 RAM with Bright RGB Lightbars)
                   ======================================================== */}
                {[0.35, 0.48].map((posX, i) => (
                    <group key={`ram-${i}`} position={[posX, 0.8, -0.7]}>
                        <mesh>
                            <boxGeometry args={[0.06, 0.75, 0.28]} />
                            <meshStandardMaterial color="#1c1e23" metalness={0.7} roughness={0.3} />
                        </mesh>
                        <mesh position={[0, 0.4, 0]}>
                            <boxGeometry args={[0.08, 0.08, 0.28]} />
                            <meshStandardMaterial 
                                color="#ffffff" 
                                emissive={i === 0 ? rgbPink : rgbPurple} 
                                emissiveIntensity={3.5} 
                                toneMapped={false} 
                            />
                        </mesh>
                    </group>
                ))}


                {/* ========================================================
                    4. 360mm AIO LIQUID COOLER (CPU Block, Radiator & Fans)
                   ======================================================== */}
                <group position={[-0.2, 0.8, -0.68]}>
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.28, 0.28, 0.18, 20]} />
                        <meshStandardMaterial color="#0c0d10" metalness={0.9} roughness={0.1} />
                    </mesh>
                    <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
                        <ringGeometry args={[0.2, 0.26, 20]} />
                        <meshStandardMaterial color={rgbBlue} emissive={rgbBlue} emissiveIntensity={4.0} toneMapped={false} side={THREE.DoubleSide} />
                    </mesh>
                    <mesh position={[0, 0, 0.11]}>
                        <circleGeometry args={[0.08, 16]} />
                        <meshStandardMaterial color={rgbCyan} emissive={rgbCyan} emissiveIntensity={3.0} toneMapped={false} />
                    </mesh>
                </group>

                {/* Sleeved Liquid Cooling Tubes */}
                <mesh position={[-0.05, 1.25, -0.45]} rotation={[0, 0, 0.2]}>
                    <cylinderGeometry args={[0.045, 0.045, 0.85, 12]} />
                    <meshStandardMaterial color="#1a1c22" roughness={0.7} />
                </mesh>
                <mesh position={[0.08, 1.28, -0.42]} rotation={[0, 0, 0.12]}>
                    <cylinderGeometry args={[0.045, 0.045, 0.88, 12]} />
                    <meshStandardMaterial color="#1a1c22" roughness={0.7} />
                </mesh>

                {/* Top 360mm Radiator */}
                <mesh position={[0, 1.75, 0]}>
                    <boxGeometry args={[2.2, 0.18, 0.9]} />
                    <meshStandardMaterial color="#111317" metalness={0.7} roughness={0.4} />
                </mesh>

                {/* Top Exhaust RGB Radiator Fans */}
                {[-0.65, 0, 0.65].map((fanX, i) => (
                    <group key={`top-fan-${i}`} position={[fanX, 1.6, 0]}>
                        <mesh>
                            <boxGeometry args={[0.6, 0.1, 0.6]} />
                            <meshStandardMaterial color="#181a20" roughness={0.5} />
                        </mesh>
                        <mesh position={[0, -0.051, 0]} rotation={[Math.PI / 2, 0, 0]}>
                            <ringGeometry args={[0.22, 0.27, 20]} />
                            <meshStandardMaterial 
                                color={i === 0 ? rgbPurple : (i === 1 ? rgbBlue : rgbPink)} 
                                emissive={i === 0 ? rgbPurple : (i === 1 ? rgbBlue : rgbPink)} 
                                emissiveIntensity={3.0} 
                                toneMapped={false}
                                side={THREE.DoubleSide} 
                            />
                        </mesh>
                        <group ref={registerFan} position={[0, -0.04, 0]}>
                            <mesh rotation={[Math.PI / 2, 0, 0]}>
                                <cylinderGeometry args={[0.22, 0.22, 0.03, 7]} />
                                <meshStandardMaterial color="#252932" transparent opacity={0.7} />
                            </mesh>
                        </group>
                    </group>
                ))}


                {/* ========================================================
                    5. GRAPHICS CARD (Triple-Fan GPU)
                   ======================================================== */}
                <group position={[0, -0.05, 0]}>
                    <mesh position={[0, 0.12, 0]}>
                        <boxGeometry args={[2.1, 0.05, 0.95]} />
                        <meshStandardMaterial color="#1e2129" metalness={0.85} roughness={0.25} />
                    </mesh>
                    <mesh position={[0, -0.05, 0]}>
                        <boxGeometry args={[2.05, 0.28, 0.9]} />
                        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
                    </mesh>
                    <mesh position={[0, -0.22, 0]}>
                        <boxGeometry args={[2.12, 0.08, 0.96]} />
                        <meshStandardMaterial color="#14161c" metalness={0.7} roughness={0.35} />
                    </mesh>
                    <mesh position={[0, -0.04, 0.49]}>
                        <boxGeometry args={[1.1, 0.12, 0.02]} />
                        <meshStandardMaterial color={rgbBlue} emissive={rgbBlue} emissiveIntensity={3.2} toneMapped={false} />
                    </mesh>

                    {[-0.65, 0, 0.65].map((fanX, i) => (
                        <group key={`gpu-fan-${i}`} position={[fanX, -0.24, 0]}>
                            <mesh position={[0, -0.03, 0]} rotation={[Math.PI / 2, 0, 0]}>
                                <ringGeometry args={[0.22, 0.26, 20]} />
                                <meshStandardMaterial 
                                    color={i === 1 ? rgbPurple : rgbPink} 
                                    emissive={i === 1 ? rgbPurple : rgbPink} 
                                    emissiveIntensity={2.8} 
                                    toneMapped={false}
                                    side={THREE.DoubleSide} 
                                />
                            </mesh>
                            <group ref={registerFan} position={[0, -0.02, 0]}>
                                <mesh rotation={[Math.PI / 2, 0, 0]}>
                                    <cylinderGeometry args={[0.21, 0.21, 0.02, 9]} />
                                    <meshStandardMaterial color="#0f1115" transparent opacity={0.8} />
                                </mesh>
                            </group>
                        </group>
                    ))}

                    <mesh position={[0.5, 0.25, 0.45]} rotation={[0.4, 0, 0]}>
                        <cylinderGeometry args={[0.06, 0.06, 0.35, 8]} />
                        <meshStandardMaterial color="#181a20" roughness={0.9} />
                    </mesh>
                </group>


                {/* ========================================================
                    6. FRONT / SIDE INTAKE RGB FANS
                   ======================================================== */}
                {[-0.5, 0.25, 1.0].map((fanY, i) => (
                    <group key={`side-fan-${i}`} position={[1.15, fanY, -0.2]} rotation={[0, -Math.PI / 2, 0]}>
                        <mesh>
                            <boxGeometry args={[0.65, 0.65, 0.08]} />
                            <meshStandardMaterial color="#121317" roughness={0.4} />
                        </mesh>
                        <mesh position={[0, 0, 0.042]}>
                            <ringGeometry args={[0.24, 0.29, 20]} />
                            <meshStandardMaterial 
                                color={i === 0 ? rgbCyan : (i === 1 ? rgbBlue : rgbPurple)} 
                                emissive={i === 0 ? rgbCyan : (i === 1 ? rgbBlue : rgbPurple)} 
                                emissiveIntensity={3.8} 
                                toneMapped={false}
                                side={THREE.DoubleSide} 
                            />
                        </mesh>
                        <group ref={registerFan} position={[0, 0, 0.03]}>
                            <mesh>
                                <cylinderGeometry args={[0.23, 0.23, 0.02, 9]} rotation={[Math.PI / 2, 0, 0]} />
                                <meshStandardMaterial color="#1a1c22" transparent opacity={0.75} />
                            </mesh>
                        </group>
                    </group>
                ))}


                {/* ========================================================
                    7. REAR EXHAUST RGB FAN
                   ======================================================== */}
                <group position={[-1.2, 0.8, -0.3]} rotation={[0, Math.PI / 2, 0]}>
                    <mesh>
                        <boxGeometry args={[0.6, 0.6, 0.08]} />
                        <meshStandardMaterial color="#121317" roughness={0.4} />
                    </mesh>
                    <mesh position={[0, 0, 0.042]}>
                        <ringGeometry args={[0.22, 0.27, 20]} />
                        <meshStandardMaterial color={rgbPink} emissive={rgbPink} emissiveIntensity={3.5} toneMapped={false} side={THREE.DoubleSide} />
                    </mesh>
                    <group ref={registerFan} position={[0, 0, 0.03]}>
                        <mesh>
                            <cylinderGeometry args={[0.21, 0.21, 0.02, 9]} rotation={[Math.PI / 2, 0, 0]} />
                            <meshStandardMaterial color="#1a1c22" transparent opacity={0.75} />
                        </mesh>
                    </group>
                </group>


                {/* ========================================================
                    8. TEMPERED GLASS PANELS
                   ======================================================== */}
                
                {/* Front Panoramic Glass */}
                <mesh position={[1.25, 0.2, 0]}>
                    <boxGeometry args={[0.03, 3.3, 2.15]} />
                    <meshStandardMaterial 
                        color="#ffffff" 
                        transparent 
                        opacity={0.16} 
                        roughness={0.08} 
                        metalness={0.9} 
                    />
                </mesh>

                {/* Side Main Viewing Glass */}
                <mesh position={[0, 0.2, 1.08]}>
                    <boxGeometry args={[2.5, 3.3, 0.03]} />
                    <meshStandardMaterial 
                        color="#ffffff" 
                        transparent 
                        opacity={0.14} 
                        roughness={0.08} 
                        metalness={0.9} 
                    />
                </mesh>

                {/* Edge Corner Pillars */}
                <mesh position={[1.25, 0.2, 1.08]}>
                    <boxGeometry args={[0.05, 3.35, 0.05]} />
                    <meshStandardMaterial color="#0c0d10" metalness={0.9} roughness={0.2} />
                </mesh>
                <mesh position={[-1.25, 0.2, 1.08]}>
                    <boxGeometry args={[0.05, 3.35, 0.05]} />
                    <meshStandardMaterial color="#0c0d10" metalness={0.9} roughness={0.2} />
                </mesh>

            </group>
        </group>
    );
}

export default function Hero3DPC() {
    const mouseTargetRef = useRef({ x: 0, y: 0 });
    const containerRef = useRef();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // IntersectionObserver pauses WebGL rendering when scrolled out of view!
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.05 }
        );
        observer.observe(container);

        let rafId = null;
        const handleMouseMove = (e) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth) * 2 - 1;
                const y = (e.clientY / window.innerHeight) * 2 - 1;
                mouseTargetRef.current.x = Math.max(-1, Math.min(1, x));
                mouseTargetRef.current.y = Math.max(-1, Math.min(1, y));
                rafId = null;
            });
        };

        const handleMouseLeave = () => {
            mouseTargetRef.current.x = 0;
            mouseTargetRef.current.y = 0;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            observer.disconnect();
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] flex items-center justify-center pointer-events-auto">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-gradient-to-tr from-blue-600/20 via-purple-600/25 to-pink-500/15 rounded-full blur-[80px]" />
                <div className="w-[200px] h-[200px] bg-cyan-400/15 rounded-full blur-[50px] translate-x-12 -translate-y-8" />
            </div>

            {/* 3D WebGL Canvas */}
            {isVisible && (
                <Canvas
                    dpr={[1, 1.5]}
                    camera={{ position: [0, 0.4, 7.5], fov: 38 }}
                    gl={{ 
                        alpha: true, 
                        antialias: true, 
                        powerPreference: "high-performance",
                        toneMapping: THREE.ACESFilmicToneMapping,
                        toneMappingExposure: 1.15
                    }}
                    className="w-full h-full cursor-grab active:cursor-grabbing z-10"
                >
                    {/* Highly Optimized Showcase Studio Lighting */}
                    <ambientLight intensity={0.75} />
                    <directionalLight position={[6, 8, 8]} intensity={1.8} />
                    <directionalLight position={[-6, 4, 4]} intensity={0.8} color="#e0e7ff" />
                    <pointLight position={[0, 5, -5]} intensity={2.0} color="#c084fc" />
                    
                    {/* Vivid Internal RGB Lights */}
                    <pointLight position={[0.2, 0.5, 0.4]} intensity={2.0} color="#3b82f6" distance={5} />
                    <pointLight position={[-0.4, 0.8, -0.2]} intensity={2.0} color="#ec4899" distance={5} />
                    <pointLight position={[0.8, -0.4, 0.2]} intensity={1.5} color="#a855f7" distance={4} />

                    {/* The 3D Interactive Rig */}
                    <ShowcasePCModel mouseTargetRef={mouseTargetRef} />

                    {/* Soft Contact Ground Shadow (Computed once!) */}
                    <ContactShadows
                        position={[0, -2.1, 0]}
                        opacity={0.65}
                        scale={8.5}
                        blur={2.2}
                        far={3.5}
                        frames={1}
                        color="#000000"
                        resolution={256}
                    />
                </Canvas>
            )}
        </div>
    );
}
