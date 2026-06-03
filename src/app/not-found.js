"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight } from 'lucide-react';

const NotFound = () => {
    // Animation presets matching sign-in / sign-up pages
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <main className="relative min-h-[85vh] w-full overflow-hidden bg-black text-white flex items-center justify-center">
            
            {/* Ambient Neon Background Glows */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 h-112 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[160px]" 
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
                className="absolute right-1/4 top-1/4 h-62.5 w-62.5 rounded-full bg-cyan-500/10 blur-[130px]" 
            />

            {/* Central Content Card */}
            <div className="relative z-10 mx-auto w-[90%] max-w-2xl text-center py-16">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.12 } }
                    }}
                    className="flex flex-col items-center"
                >
                    {/* Animated Decorative Icon */}
                    <motion.div 
                        variants={fadeInUp}
                        className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl shadow-xl"
                    >
                        <Compass className="h-10 w-10 text-violet-400 animate-[spin_20s_linear_infinite]" />
                    </motion.div>

                    {/* Massive Crystalline Error Code */}
                    <motion.h1 
                        variants={fadeInUp}
                        className="bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-500 bg-clip-text text-8xl font-black tracking-tighter text-transparent sm:text-9xl"
                    >
                        404
                    </motion.h1>

                    {/* Text Details */}
                    <motion.h2 
                        variants={fadeInUp} 
                        className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl"
                    >
                        Lost in Transit
                    </motion.h2>

                    <motion.p 
                        variants={fadeInUp} 
                        className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-400"
                    >
                        The page you are trying to reach has either been moved, deleted, or never existed in your career roadmap.
                    </motion.p>

                    {/* Glassmorphic Navigation Call to Actions */}
                    <motion.div 
                        variants={fadeInUp} 
                        className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                    >
                        <Button
                            as={Link}
                            href="/"
                            className="w-full sm:w-auto rounded-xl bg-violet-600 px-8 py-6 font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:bg-violet-500 hover:shadow-violet-500/30"
                        >
                            Return Home
                        </Button>

                        <Button
                            as={Link}
                            href="/jobs"
                            variant="bordered"
                            className="w-full sm:w-auto rounded-xl border-white/10 bg-white/5 px-8 py-6 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                        >
                            Browse Jobs <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>

                </motion.div>
            </div>
        </main>
    );
};

export default NotFound;