"use client"
import {HeroHighlight, Highlight} from "@/components/ui/hero";
import {motion} from "framer-motion";
import AboutSection from "@/components/ui/about";
import {Contacts} from "@/components/ui/contacts";
import ProjectSection from "@/components/ui/projects";

export default function Home() {
    return (
        <div className="">
            <HeroHighlight className={"hero"}>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="main text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >
                    Hi, my name is {" "}
                    <Highlight className="text-black dark:text-white">
                        Jerry
                    </Highlight>.
                    <br/>
                    <p className={"secondary text-4xl"}>I build and program things</p>
                    {/* Add the Links: Github, Insta,  */}

                </motion.h1>
            </HeroHighlight>
            <AboutSection/>
            <ProjectSection/>
            <Contacts/>
        </div>
    );
}
