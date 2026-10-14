import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import Hero3DPC from '../components/Hero3DPC';

const Home = () => {
    return (
        <div className="min-h-screen bg-mesh">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-12 pb-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/80 via-[#070913]/60 to-transparent">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[580px]">
                    
                    {/* Left Column: Text & CTAs (approx 55% width) */}
                    <div className="lg:col-span-7 text-center lg:text-left z-10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-md animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">Next-Gen Custom PC Builder</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] animate-fade-in">
                            Build Your
                            <span className="gradient-text block sm:inline"> Dream PC</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed animate-slide-up">
                            Custom PC builder with automatic compatibility checking,
                            smart recommendations, and the best prices in India
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 animate-slide-up">
                            <Link to="/build" className="btn-primary text-center px-8 py-4 text-base font-bold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all">
                                Start Building Now
                            </Link>
                            <Link to="/auth" className="btn-secondary text-center px-8 py-4 text-base font-bold hover:scale-105 active:scale-95 transition-all">
                                Create Account
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Interactive 3D Realistic PC (approx 45% width) */}
                    <div className="lg:col-span-5 flex items-center justify-center relative z-10 w-full animate-fade-in">
                        <Hero3DPC />
                    </div>
                </div>

                {/* Subtle Hero Background Atmospheric Glows */}
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-0" />
                <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none -z-0" />
                <div className="absolute top-1/3 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none -z-0" />
            </section>

            {/* Features Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Subtle Ambient Section Glows */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-0" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-0" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-gray-300 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span>Engineered For Precision</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                            Why Choose <span className="gradient-text">Build My PC</span>?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* ── Card 1: Easy PC Building ───────────────────────── */}
                        <div className="group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between">
                            {/* Blueprint / Engineering Grid Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-[0.08] group-hover:opacity-[0.18] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="feat-blueprint" width="32" height="32" patternUnits="userSpaceOnUse">
                                        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#38bdf8" strokeWidth="0.75" />
                                        <circle cx="0" cy="0" r="1.5" fill="#38bdf8" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#feat-blueprint)" />
                            </svg>
                            {/* Top subtle radial glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-colors" />

                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:border-blue-400/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors">
                                    Easy PC Building
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Select components with our intuitive interface
                                </p>
                            </div>
                        </div>

                        {/* ── Card 2: Auto Compatibility ────────────────────── */}
                        <div className="group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col justify-between">
                            {/* Circuit Connection Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-[0.08] group-hover:opacity-[0.18] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="feat-circuit" width="36" height="36" patternUnits="userSpaceOnUse">
                                        <path d="M12 12h12v12h-12z M24 18h12 M0 18h12 M18 0v12 M18 24v12" fill="none" stroke="#c084fc" strokeWidth="0.75" />
                                        <circle cx="12" cy="12" r="1.5" fill="#c084fc" />
                                        <circle cx="24" cy="24" r="1.5" fill="#e879f9" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#feat-circuit)" />
                            </svg>
                            {/* Top subtle radial glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/20 transition-colors" />

                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:border-purple-400/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-200 transition-colors">
                                    Auto Compatibility
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Automatic compatibility checking for all parts
                                </p>
                            </div>
                        </div>

                        {/* ── Card 3: Best Prices ────────────────────────────── */}
                        <div className="group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between">
                            {/* Financial / Market Telemetry Graph Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-[0.08] group-hover:opacity-[0.18] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="feat-chart" width="44" height="44" patternUnits="userSpaceOnUse">
                                        <path d="M0 36 L11 26 L22 31 L33 13 L44 18" fill="none" stroke="#34d399" strokeWidth="0.85" strokeDasharray="2,2" />
                                        <line x1="0" y1="40" x2="44" y2="40" stroke="#10b981" strokeWidth="0.5" />
                                        <circle cx="33" cy="13" r="1.5" fill="#34d399" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#feat-chart)" />
                            </svg>
                            {/* Top subtle radial glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />

                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                                        <path d="M12 6v2m0 8v2" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-200 transition-colors">
                                    Best Prices
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Competitive pricing on all components
                                </p>
                            </div>
                        </div>

                        {/* ── Card 4: Smart Evaluation ───────────────────────── */}
                        <div className="group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-pink-500/40 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-pink-500/10 flex flex-col justify-between">
                            {/* Neural Network / AI Lattice Pattern */}
                            <svg className="absolute inset-0 w-full h-full opacity-[0.08] group-hover:opacity-[0.18] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="feat-neural" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M10 20 L20 10 L30 20 L20 30 Z M20 10 L20 30 M10 20 L30 20" fill="none" stroke="#f472b6" strokeWidth="0.75" />
                                        <circle cx="20" cy="20" r="2" fill="#ec4899" />
                                        <circle cx="10" cy="20" r="1.2" fill="#a855f7" />
                                        <circle cx="30" cy="20" r="1.2" fill="#38bdf8" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#feat-neural)" />
                            </svg>
                            {/* Top subtle radial glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-pink-500/20 transition-colors" />

                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 group-hover:border-pink-400/50 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                        <path d="M12 4v14" />
                                        <path d="M9 9h6" />
                                        <path d="M9 13h6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-pink-200 transition-colors">
                                    Smart Evaluation
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    AI-powered "Is It Worth It?" analysis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Popular Components Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-transparent via-[#060813]/40 to-transparent">
                {/* Background Ambient Glows */}
                <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-0" />
                <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-0" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-gray-300 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            <span>Flagship Hardware</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                            Popular <span className="gradient-text">Components</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* ── CPU Card ────────────────────────────────────────── */}
                        <div
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = (e.clientX - rect.left) / rect.width - 0.5;
                                const y = (e.clientY - rect.top) / rect.height - 0.5;
                                const icon = e.currentTarget.querySelector('.hardware-icon');
                                if (icon) icon.style.transform = `scale(1.05) translate(${x * 14}px, ${y * 10}px)`;
                            }}
                            onMouseLeave={(e) => {
                                const icon = e.currentTarget.querySelector('.hardware-icon');
                                if (icon) icon.style.transform = 'scale(1) translate(0px, 0px)';
                            }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-blue-500/40 backdrop-blur-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/15 p-8 min-h-[460px]"
                        >
                            {/* Top Ambient Studio Lighting Glow */}
                            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-tr from-blue-600/25 to-purple-600/25 rounded-full blur-3xl pointer-events-none group-hover:scale-125 group-hover:opacity-100 opacity-60 transition-all duration-500" />

                            {/* Floating Technical CPU Icon Stage */}
                            <div className="relative z-10 flex items-center justify-center h-52 w-full mb-6">
                                <div className="hardware-icon transition-transform duration-200 ease-out flex items-center justify-center">
                                    <svg className="w-32 h-32 md:w-36 md:h-36 drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="cpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#38bdf8" />
                                                <stop offset="100%" stopColor="#a855f7" />
                                            </linearGradient>
                                            <linearGradient id="cpuDieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
                                                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.25" />
                                            </linearGradient>
                                        </defs>
                                        {/* Outer Substrate with Corner Chamfers */}
                                        <rect x="22" y="22" width="76" height="76" rx="10" stroke="url(#cpuGrad)" strokeWidth="2.5" fill="#0f121a" />
                                        {/* Corner Alignment Marker */}
                                        <polygon points="26,26 36,26 26,36" fill="#38bdf8" />
                                        {/* Inner Heat Spreader (IHS) */}
                                        <rect x="34" y="34" width="52" height="52" rx="6" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="2" fill="url(#cpuDieGrad)" />
                                        {/* Core Circuit Die Lines */}
                                        <rect x="46" y="46" width="28" height="28" rx="3" stroke="url(#cpuGrad)" strokeWidth="1.5" fill="#141722" />
                                        <circle cx="60" cy="60" r="4" fill="#38bdf8" />
                                        <path d="M50 60h6 M64 60h6 M60 50v6 M60 64v6" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                                        {/* External Pins */}
                                        <path d="M38 22V12 M48 22V12 M60 22V10 M72 22V12 M82 22V12" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M38 98v10 M48 98v10 M60 98v12 M72 98v10 M82 98v10" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M22 38H12 M22 48H12 M22 60H10 M22 72H12 M22 82H12" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M98 38h10 M98 48h10 M98 60h12 M98 72h10 M98 82h10" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card Content with Clean Divider */}
                            <div className="relative z-10 space-y-3 pt-5 border-t border-white/10">
                                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                                    CPU Components
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Processors for gaming, work & AI
                                </p>
                                <div className="pt-3">
                                    <Link
                                        to="/build"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-all"
                                    >
                                        <span>Explore CPUs</span>
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ── GPU Card ────────────────────────────────────────── */}
                        <div
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = (e.clientX - rect.left) / rect.width - 0.5;
                                const y = (e.clientY - rect.top) / rect.height - 0.5;
                                const icon = e.currentTarget.querySelector('.hardware-icon');
                                if (icon) icon.style.transform = `scale(1.05) translate(${x * 14}px, ${y * 10}px)`;
                            }}
                            onMouseLeave={(e) => {
                                const icon = e.currentTarget.querySelector('.hardware-icon');
                                if (icon) icon.style.transform = 'scale(1) translate(0px, 0px)';
                            }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-purple-500/40 backdrop-blur-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/15 p-8 min-h-[460px]"
                        >
                            {/* Top Ambient Studio Lighting Glow */}
                            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-tr from-purple-600/25 to-pink-600/25 rounded-full blur-3xl pointer-events-none group-hover:scale-125 group-hover:opacity-100 opacity-60 transition-all duration-500" />

                            {/* Floating Technical GPU Icon Stage */}
                            <div className="relative z-10 flex items-center justify-center h-52 w-full mb-6">
                                <div className="hardware-icon transition-transform duration-200 ease-out flex items-center justify-center">
                                    <svg className="w-36 h-28 md:w-40 md:h-32 drop-shadow-[0_0_20px_rgba(192,132,252,0.35)]" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="gpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#c084fc" />
                                                <stop offset="100%" stopColor="#f43f5e" />
                                            </linearGradient>
                                            <linearGradient id="gpuFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.12" />
                                                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.2" />
                                            </linearGradient>
                                        </defs>
                                        {/* PCIe Bracket (Left Edge) */}
                                        <rect x="8" y="18" width="6" height="66" rx="2" fill="#2d313d" stroke="#c084fc" strokeWidth="1.5" />
                                        {/* Main GPU Shroud Body */}
                                        <rect x="14" y="22" width="116" height="52" rx="8" stroke="url(#gpuGrad)" strokeWidth="2.5" fill="url(#gpuFillGrad)" />
                                        {/* Heatsink Fin lines */}
                                        <path d="M26 28v40 M32 28v40 M112 28v40 M118 28v40" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1.5" />
                                        {/* Fan 1 (Left) */}
                                        <circle cx="50" cy="48" r="18" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="2" fill="#0f1118" />
                                        <circle cx="50" cy="48" r="6" fill="url(#gpuGrad)" />
                                        <path d="M50 34v6 M50 56v6 M36 48h6 M58 48h6 M40 38l4 4 M56 54l4 4 M40 58l4-4 M56 42l4-4" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" />
                                        {/* Fan 2 (Right) */}
                                        <circle cx="94" cy="48" r="18" stroke="#ffffff" strokeOpacity="0.8" strokeWidth="2" fill="#0f1118" />
                                        <circle cx="94" cy="48" r="6" fill="url(#gpuGrad)" />
                                        <path d="M94 34v6 M94 56v6 M80 48h6 M102 48h6 M84 38l4 4 M100 54l4 4 M84 58l4-4 M100 42l4-4" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
                                        {/* Top Side RGB Logo Bar */}
                                        <rect x="42" y="16" width="60" height="6" rx="2" fill="#f43f5e" />
                                        {/* PCIe Gold Fingers */}
                                        <rect x="36" y="74" width="48" height="8" rx="1.5" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
                                        <line x1="48" y1="74" x2="48" y2="82" stroke="#0f1118" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card Content with Clean Divider */}
                            <div className="relative z-10 space-y-3 pt-5 border-t border-white/10">
                                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                                    GPU Components
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Graphics cards for gaming & creation
                                </p>
                                <div className="pt-3">
                                    <Link
                                        to="/build"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 group-hover:text-purple-300 transition-all"
                                    >
                                        <span>Explore GPUs</span>
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ── RAM Card ────────────────────────────────────────── */}
                        <div
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = (e.clientX - rect.left) / rect.width - 0.5;
                                const y = (e.clientY - rect.top) / rect.height - 0.5;
                                const icon = e.currentTarget.querySelector('.hardware-icon');
                                if (icon) icon.style.transform = `scale(1.05) translate(${x * 14}px, ${y * 10}px)`;
                            }}
                            onMouseLeave={(e) => {
                                const icon = e.currentTarget.querySelector('.hardware-icon');
                                if (icon) icon.style.transform = 'scale(1) translate(0px, 0px)';
                            }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-cyan-500/40 backdrop-blur-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/15 p-8 min-h-[460px]"
                        >
                            {/* Top Ambient Studio Lighting Glow */}
                            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-tr from-cyan-600/25 to-blue-600/25 rounded-full blur-3xl pointer-events-none group-hover:scale-125 group-hover:opacity-100 opacity-60 transition-all duration-500" />

                            {/* Floating Technical RAM Icon Stage */}
                            <div className="relative z-10 flex items-center justify-center h-52 w-full mb-6">
                                <div className="hardware-icon transition-transform duration-200 ease-out flex items-center justify-center">
                                    <svg className="w-32 h-32 md:w-36 md:h-36 drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="ramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#38bdf8" />
                                                <stop offset="100%" stopColor="#818cf8" />
                                            </linearGradient>
                                            <linearGradient id="ramStickGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.12" />
                                                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.22" />
                                            </linearGradient>
                                        </defs>
                                        {/* Background RAM Stick */}
                                        <g opacity="0.55" transform="translate(14, -10)">
                                            <rect x="22" y="30" width="76" height="54" rx="6" stroke="#818cf8" strokeWidth="2" fill="#0f121a" />
                                            <rect x="22" y="24" width="76" height="6" rx="3" fill="#818cf8" />
                                            <rect x="30" y="84" width="60" height="8" fill="#f59e0b" />
                                            <line x1="58" y1="84" x2="58" y2="92" stroke="#0f121a" strokeWidth="3" />
                                        </g>
                                        {/* Foreground Primary RAM Stick */}
                                        <rect x="16" y="36" width="88" height="52" rx="6" stroke="url(#ramGrad)" strokeWidth="2.5" fill="url(#ramStickGrad)" />
                                        {/* Top RGB Lightbar */}
                                        <rect x="16" y="30" width="88" height="7" rx="3.5" fill="#38bdf8" />
                                        {/* Heatspreader Cuts */}
                                        <path d="M30 46h60 M30 52h24 M66 52h24" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
                                        {/* Memory IC Chips */}
                                        <rect x="26" y="58" width="14" height="18" rx="2" stroke="url(#ramGrad)" strokeWidth="1.5" fill="#141724" />
                                        <rect x="44" y="58" width="14" height="18" rx="2" stroke="url(#ramGrad)" strokeWidth="1.5" fill="#141724" />
                                        <rect x="62" y="58" width="14" height="18" rx="2" stroke="url(#ramGrad)" strokeWidth="1.5" fill="#141724" />
                                        <rect x="80" y="58" width="14" height="18" rx="2" stroke="url(#ramGrad)" strokeWidth="1.5" fill="#141724" />
                                        {/* Gold Pins */}
                                        <rect x="24" y="88" width="72" height="9" rx="1.5" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
                                        <rect x="58" y="88" width="4" height="9" fill="#0c0e14" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card Content with Clean Divider */}
                            <div className="relative z-10 space-y-3 pt-5 border-t border-white/10">
                                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                                    RAM Components
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    High-speed memory for every build
                                </p>
                                <div className="pt-3">
                                    <Link
                                        to="/build"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-all"
                                    >
                                        <span>Explore RAM</span>
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <GlassCard className="neon-border">
                        <h2 className="text-4xl font-bold mb-4">
                            Ready to Build Your PC?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Start selecting components and get real-time compatibility checks
                        </p>
                        <Link to="/build" className="btn-primary inline-block">
                            Get Started
                        </Link>
                    </GlassCard>
                </div>
            </section>
        </div>
    );
};

export default Home;
