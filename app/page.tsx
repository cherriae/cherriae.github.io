"use client"
import {HeroHighlight, Highlight} from "@/components/ui/hero";
import {motion} from "framer-motion";
import AboutSection from "@/components/ui/about";
import {Contacts} from "@/components/ui/contacts";
import ProjectSection from "@/components/ui/projects";
import { GithubIcon } from "@/components/icons";
import { InstagramIcon } from "@/components/ui/utils/icons";
import { IconSvgProps } from "@/types";

const SocialLink = ({ href, icon: Icon, label } : {href: string, icon: React.FC<IconSvgProps>, label: string}) => (
    <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="main transition-all duration-300 hover:text-primary"
        aria-label={label}
    >
        <Icon size={43} />
    </motion.a>
);

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <HeroHighlight className="hero min-h-[40vh] flex items-center justify-center py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
                    className="text-center max-w-3xl mx-auto px-4"
                >
                    <motion.h1 
                        className="main text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Hi, my name is{" "}
                        <Highlight className="text-black dark:text-white">
                            Jerry
                        </Highlight>
                    </motion.h1>
                    
                    <motion.p 
                        className="secondary text-xl md:text-2xl lg:text-3xl mt-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        I build and program things
                    </motion.p>

                    <motion.div 
                        className="flex flex-row justify-center gap-4 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <SocialLink
                            href="https://github.com/cherriae"
                            icon={GithubIcon}
                            label="GitHub Profile"
                        />
                        <SocialLink
                            href="https://instagram.com/_aoikkk"
                            icon={InstagramIcon}
                            label="Instagram Profile"
                        />
                    </motion.div>
                </motion.div>
            </HeroHighlight>
            
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <AboutSection/>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <ProjectSection/>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Contacts/>
            </motion.div>
        </motion.div>
    );
}
