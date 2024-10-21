import React, { useState } from 'react';
import { Timeline } from './utils/timeline';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion';

const ProjectSection: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const data = [
        {
            title: "Team 334 2024 Robot",
            content: (
                <div>
                    <p className="font-bold my-3 main">
                        Ascent, Our robot for the 2024 season competing in the 2024 season, excelled at scoring and climbling. We were rank #25 in 2024 NYC Regionals.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                    <Image
                        src="/robot.png"
                        alt="2024 Robot"
                        width={500}
                        height={800}
                        className="rounded-lg object-cover  w-full"
                    />
                    </div>
                </div>  
            )
        },
        {
            title: "Team 334 Website",
            content: (
                <div>
                    <p className="font-bold my-3 main">
                        This website is everything about our robotics team. You can learn about our team’s mission, events, and how we design and build robots for global competitions.
                    </p>
                    <div className='my-5'>
                        <Button 
                            color="primary" 
                            className='font-bold main text-center w-64'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Visit Website
                            <motion.div
                                animate={{ rotate: isHovered ? -45 : 0 }}
                                transition={{ duration: 0.2 }} 
                            >
                                <FiArrowRight size={18} />
                            </motion.div>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/334/home.png"
                        alt="something"
                        width={500}
                        height={800}
                        className="rounded-lg object-cover  w-full"
                    />
                    <Image
                        src="/334/aboutus.png"
                        alt="something"
                        width={500}
                        height={800}
                        className="rounded-lg object-cover  w-full"
                    />
                    <Image
                        src="/334/recaps.png"
                        alt="something"
                        width={500}
                        height={800}
                        className="rounded-lg object-cover  w-full"
                    />
                    <Image
                        src="/334/sponsors.png"
                        alt="something"
                        width={500}
                        height={800}
                        className="rounded-lg object-cover  w-full"
                    />
                    </div>
                </div>
            )
        },
    ]
    
    return (
        <section className="bg-gradient-to-tr from-[#020617] via-[#9fb0ff] to-[#ffffff] w-full">
            <Timeline data={data} />
        </section>
    )
}

export default ProjectSection;