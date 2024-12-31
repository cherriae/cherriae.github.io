import {Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React, {useEffect} from "react";
import {animate, motion, useMotionTemplate, useMotionValue,} from "framer-motion";
import { Toaster, toast } from "sonner";

const COLORS_TOP = ["#29251d", "#2f3774", "#4c6394", "#7ea4b0", "#cdd27e"];

const EmailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </svg>
);
    


export const Contacts = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    function CopyEmailAndToast() {
        const emailText = 'theofficialjerrypy@gmail.com';
        navigator.clipboard.writeText(emailText);
        toast('📋 Email copied to clipboard!', {className: "main"})
    }


    return (
        <motion.section
            style={{ backgroundImage }}
            className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        >
            <div className="relative z-10 container mx-auto max-w-4xl flex flex-col items-center">
                <h1 className="main bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-5xl font-bold text-transparent md:text-6xl mb-8">
                    Get in Touch
                </h1>
                
                <p className="secondary text-center text-lg md:text-xl text-gray-300 max-w-2xl mb-12">
                    Feel free to reach out to me through email
                </p>

                <div className="w-full max-w-md">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl rounded-xl">
                        <h3 className="text-2xl font-semibold text-center main mb-6">Email</h3>
                        <Toaster position="bottom-center" />
                        <motion.button
                            onClick={CopyEmailAndToast}
                            style={{ border, boxShadow }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex justify-center items-center gap-3 rounded-xl bg-gray-800/50 px-6 py-4 text-gray-50 transition-colors hover:bg-gray-800/70"
                        >
                            <EmailIcon />
                            <span className="font-medium">theofficialjerrypy@gmail.com</span>
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2}/>
                </Canvas>
            </div>
        </motion.section>
    );
};