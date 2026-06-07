"use client";
import React from 'react';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Description
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { redirect, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion'; // Motion components wrapper

const SignInPage = () => {


    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirect') || '/';



    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password
        });

        if (data) {
            toast.success("Signed in successfully!");
            redirect(redirectTo);
        }

        if (error) {
            toast.error("Error signing in, please check your credentials.");
        }
    };

    const handleGoogleSignIn = () => {
        console.log("Google Sign In Clicked");
    };

    // Animation presets for modular application
    const fadeInUp = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const cardScaleUp = {
        hidden: { opacity: 0, scale: 0.92, y: 15 },
        visible: (customDelay) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: customDelay, duration: 0.5, type: "spring", stiffness: 100 }
        })
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-black text-white">

            {/* Glowing Accent Shapes with Ambient Pulse Animation */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" 
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-0 right-0 h-87.5 w-87.5 rounded-full bg-violet-500/10 blur-[140px]" 
            />

            <div className="relative z-10 mx-auto flex min-h-screen w-[90%] items-center py-12">
                <div className="grid w-full items-center gap-16 lg:grid-cols-2">

                    {/* Left Section */}
                    <div className="hidden lg:block">
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.15 } }
                            }}
                            className="max-w-xl"
                        >
                            <motion.h1 variants={fadeInUp} className="bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-500 bg-clip-text text-5xl font-bold text-transparent">
                                CareerBridge
                            </motion.h1>

                            <motion.h2 variants={fadeInUp} className="mt-8 text-6xl font-bold leading-tight">
                                Welcome Back To
                                <br />
                                Your Career Journey
                            </motion.h2>

                            <motion.p variants={fadeInUp} className="mt-8 text-lg leading-8 text-gray-400">
                                Access thousands of opportunities, connect with leading employers,
                                and continue building the future you&apos;ve always envisioned.
                            </motion.p>

                            {/* Stat Blocks Metric List */}
                            <div className="mt-14 grid grid-cols-3 gap-6">
                                <motion.div 
                                    custom={0.4} initial="hidden" animate="visible" variants={cardScaleUp}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                                >
                                    <h3 className="text-3xl font-bold">50K+</h3>
                                    <p className="mt-2 text-sm text-gray-400">Active Jobs</p>
                                </motion.div>

                                <motion.div 
                                    custom={0.5} initial="hidden" animate="visible" variants={cardScaleUp}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                                >
                                    <h3 className="text-3xl font-bold">12K+</h3>
                                    <p className="mt-2 text-sm text-gray-400">Companies</p>
                                </motion.div>

                                <motion.div 
                                    custom={0.6} initial="hidden" animate="visible" variants={cardScaleUp}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                                >
                                    <h3 className="text-3xl font-bold">97%</h3>
                                    <p className="mt-2 text-sm text-gray-400">Satisfaction</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Section */}
                    <div className="mx-auto w-full max-w-lg">
                        <motion.div 
                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-violet-950/20 backdrop-blur-xl md:p-10"
                        >
                            <div className="mb-8 text-center lg:hidden">
                                <h1 className="bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent">
                                    CareerBridge
                                </h1>
                            </div>

                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-white">
                                    Welcome Back
                                </h2>
                                <p className="mt-3 text-gray-400">
                                    Sign in to continue your CareerBridge journey.
                                </p>
                            </div>

                            <Form className="mx-auto mt-8 flex w-full flex-col gap-5" onSubmit={onSubmit}>
                                <TextField isRequired name="email" type="email">
                                    <Label className="mb-2 font-medium text-gray-300">
                                        Email
                                    </Label>
                                    <Input
                                        placeholder="john@example.com"
                                        className="text-white"
                                    />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired minLength={8} name="password" type="password">
                                    <Label className="mb-2 font-medium text-gray-300">
                                        Password
                                    </Label>
                                    <Input
                                        placeholder="Enter your password"
                                        className="text-white"
                                    />
                                    <Description className="text-gray-500">
                                        Must be at least 8 characters with 1 uppercase and 1 number
                                    </Description>
                                    <FieldError />
                                </TextField>

                                <div className="my-4 flex w-full gap-2">
                                    <Button
                                        type="submit"
                                        className="w-full rounded-xl bg-violet-600 py-6 font-semibold text-white transition-all duration-300 hover:bg-violet-700"
                                    >
                                        Log In
                                    </Button>
                                </div>

                                <hr className="w-full border-white/10" />

                                <div className="w-full">
                                    <p className="text-center text-sm text-gray-400">
                                        Or continue with
                                    </p>

                                    <div className="mt-4 flex justify-center">
                                        <Button
                                            onClick={handleGoogleSignIn}
                                            variant="bordered"
                                            className="w-full border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10"
                                        >
                                            Google <FcGoogle className="ml-2" />
                                        </Button>
                                    </div>

                                    <p className="mt-6 text-center text-gray-400">
                                        Do not have an account?{" "}
                                        <Link
                                            href={`/signup?redirect=${redirectTo}`}
                                            className="font-medium text-violet-400 transition-colors duration-300 hover:text-violet-300"
                                        >
                                            Register
                                        </Link>
                                    </p>
                                </div>
                            </Form>

                            <p className="mt-8 text-center text-xs leading-6 text-gray-500">
                                By signing in, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SignInPage;