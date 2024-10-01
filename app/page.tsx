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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="main"
      aria-label={label}
    >
      <Icon size={43} />
    </a>
  );


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
                    <div className="flex flex-row justify-center gap-3 my-3">
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
                    </div>
                </motion.h1>
            </HeroHighlight>
            <AboutSection/>
            <ProjectSection/>
            <Contacts/>
        </div>
    );
}
