import React, { useState } from 'react';
import { Timeline } from './utils/timeline';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { FiArrowRight } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const ImageModal = ({ src, alt, isOpen, onClose }: { src: string; alt: string; isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) {
      return null;
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            >
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.5 }}
                    className="relative max-w-4xl w-full aspect-video"
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <motion.div
                className="relative overflow-hidden rounded-xl cursor-pointer"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={() => setIsModalOpen(true)}
            >
                <motion.div
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={1000}
                        height={600}
                        className="rounded-xl object-cover w-full"
                    />
                </motion.div>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center"
                    >
                        <p className="text-white text-lg font-medium">Click to enlarge</p>
                    </motion.div>
                )}
            </motion.div>
            <ImageModal
                src={src}
                alt={alt}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

const ProjectSection: React.FC = () => {
    const [hoveredButtons, setHoveredButtons] = useState<{[key: string]: boolean}>({});

    const handleButtonHover = (id: string, isHovered: boolean) => {
        setHoveredButtons(prev => ({...prev, [id]: isHovered}));
    };

    const data = [
        {
            title: "Team 334 2024 Robot",
            content: (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                    <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Team 334 2024 Robot
                    </h3>
                    <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
                        Ascent, Our robot for the 2024 season competing in the 2024 season, excelled at scoring and climbing. We were rank #25 in 2024 NYC Regionals.
                    </p>
                    <div className="mt-8">
                        <ProjectImage src="/robot.png" alt="2024 Robot" />
                    </div>
                </motion.div>
            )
        },
        {
            title: "Team 334 Website",
            content: (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                    <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Team 334 Website
                    </h3>
                    <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
                        This website is everything about our robotics team. You can learn about our team's mission, events, and how we design and build robots for global competitions.
                    </p>
                    <div className="my-6">
                        <Link href="https://bthsrobotics.com">
                            <Button 
                                color="primary" 
                                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                                onMouseEnter={() => handleButtonHover('website-btn', true)}
                                onMouseLeave={() => handleButtonHover('website-btn', false)}
                            >
                                Visit Website
                                <motion.div
                                    animate={{ x: hoveredButtons['website-btn'] ? 5 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FiArrowRight size={20} />
                                </motion.div>
                            </Button>
                        </Link>
                    </div>
                    <ProjectImage src="/334.png" alt="Team 334 Website" />
                </motion.div>
            )
        },
        {
            title: "Team 334 Scouting App",
            content: (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                    <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Team 334 Scouting App
                    </h3>
                    <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
                        This is a scouting app that allows us to scout other teams and see their performance in the game.
                    </p>
                    <div className="my-6">
                        <Link href="https://github.com/team334/scouting-app">
                            <Button 
                                color="primary" 
                                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                                onMouseEnter={() => handleButtonHover('scouting-app-btn', true)}
                                onMouseLeave={() => handleButtonHover('scouting-app-btn', false)}
                            >
                                Link to Github
                                <motion.div
                                    animate={{ x: hoveredButtons['scouting-app-btn'] ? 5 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FiArrowRight size={20} />
                                </motion.div>
                            </Button>
                        </Link>
                    </div>
                    <ProjectImage src="/scouting-app.png" alt="Scouting App Screenshot" />
                </motion.div>
            )
        },
        {
            title: "Chief Delphi Bot",
            content: (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                    <h3 className="text-3xl font-bold main mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Chief Delphi Bot
                    </h3>
                    <p className="font-medium my-4 main text-neutral-800 text-lg leading-relaxed">
                        A Discord bot that allows us to get the latest news and updates from Chief Delphi.
                    </p>
                    <div className="my-6">
                        <Link href="https://github.com/team334/cd-discord-bot">
                            <Button 
                                color="primary" 
                                className="font-bold main text-center px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                                onMouseEnter={() => handleButtonHover('delphi-btn', true)}
                                onMouseLeave={() => handleButtonHover('delphi-btn', false)}
                            >
                                Link to Github
                                <motion.div
                                    animate={{ x: hoveredButtons['delphi-btn'] ? 5 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FiArrowRight size={20} />
                                </motion.div>
                            </Button>
                        </Link>
                    </div>
                    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative aspect-video w-full">
                            <ProjectImage src="/bot.png" alt="Chief Delphi Bot Screenshot 1" />
                        </div>
                        <div className="relative aspect-video w-full">
                            <ProjectImage src="/bot2.png" alt="Chief Delphi Bot Screenshot 2" />
                        </div>
                    </div>
                </motion.div>
            )
        },
    ];
    
    return (
        <section className="relative bg-gradient-to-tr from-[#020617] via-[#9fb0ff] to-[#ffffff] w-full py-20">
            <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#020617] to-[#2563eb] bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My Projects
                </motion.h2>
                
                <div className="max-w-5xl mx-auto">
                    <Timeline 
                        data={data}
                        lineClassName="bg-gradient-to-b from-blue-500 to-purple-500"
                        dotClassName="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;