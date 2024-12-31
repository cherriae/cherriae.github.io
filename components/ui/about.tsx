import React from 'react';
import {Image} from "@nextui-org/react";
import {Link} from "@nextui-org/link";

const AboutSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#a0b1ff] to-[#ddd6fe] py-20">
            <div className="container mx-auto px-4">
                <h1 className='text-center text-5xl font-bold main mb-16'>About me</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="flex justify-center">
                        <Image
                            src="/logo.jpg"
                            alt="Me"
                            className="rounded-2xl shadow-lg max-w-[300px] w-full"
                        />
                    </div>
                    
                    <div className="space-y-6 secondary text-lg">
                        <p className="leading-relaxed">
                            Hey! I'm Jerry! I'm just someone who codes and programs for fun. 
                            I like to read, play chess, and basketball. I am a programmer at{" "}
                            <Link 
                                href="https://bthsrobotics.com" 
                                target="_blank"
                                className="text-primary hover:underline"
                            >
                                Team 334 (FRC)
                            </Link>.
                        </p>
                        
                        <div className="space-y-2">
                            <p>🌱 Currently Learning how to code Java</p>
                            <p>😄 Pronouns: He/Him</p>
                        </div>
                        
                        <div className="pt-4">
                            <Image
                                width={500}
                                height={300}
                                src="https://discord-readme-badge.vercel.app/api?id=827660621662257162"
                                alt="discord"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;