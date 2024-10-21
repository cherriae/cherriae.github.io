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
            style={{
                backgroundImage,
            }}
            className="contacts relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        >
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="main max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-4xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                    Contacts
                </h1>
                <p className="secondary my-6 max-w-xl text-center text-base leading-relaxed md:text-xl md:leading-relaxed">
                    If you want to reach out to me then reach out to me by
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
                    <div className="flex items-center flex-col">
                        <h3 className="text-3xl text-center main">Email</h3>
                        <hr className="align-middle border-gray-200 my-2 w-[80%] overflow-x-hidden m-auto"/>
                        <Toaster />
                        <motion.button
                            onClick={CopyEmailAndToast}
                            style={{
                                border,
                                boxShadow,
                            }}
                            whileHover={{
                                scale: 1.015,
                            }}
                            whileTap={{
                                scale: 0.985,
                            }}
                            className="flex main justify-center w-fit items-center text-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 my-10"
                        >
                            <EmailIcon /> theofficialjerrypy@gmail.com
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