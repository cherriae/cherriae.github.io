import React from 'react';
import {Image} from "@nextui-org/react";
import {Link} from "@nextui-org/link";

const AboutSection: React.FC = () => {
    return (
        <section className="aboutme h-[60rem] relative overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#a0b1ff] to-[#ddd6fe]">
            <h1 className='text-center text-6xl main mt-10'>About me</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 p-8">
                <div className={"grid place-items-center"}>
                    <Image
                        src={"/logo.jpg"}
                        alt={"Me"}
                        className={"mt-10"}
                    />
                </div>
                <div className={"mt-10 secondary text-lg"}>
                    <p>Hey! I&quot;m Jerry! I&quot;m just someone who just code and do programming for fun. I like to read, play
                        chess, and basketball. I am a part of <Link href={"https://bthsrobotics.com"} target={"_blank"}>Team
                            334 (FRC)</Link> for I am a programmer.</p>
                    <br/>
                    <p>🌱 Currently Learning how to code Java</p>
                    <p>😄 Pronouns: He/Him</p>
                    <div>
                        <Image width={"500"} height={300}
                               src={"https://discord-readme-badge.vercel.app/api?id=827660621662257162"} alt={"discord"}
                               className={"my-10"}/>
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-0 left-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#0099ff"
                        fillOpacity="1"
                        d="M0,128L34.3,117.3C68.6,107,137,85,206,90.7C274.3,96,343,128,411,144C480,160,549,160,617,160C685.7,160,754,160,823,133.3C891.4,107,960,53,1029,58.7C1097.1,64,1166,128,1234,154.7C1302.9,181,1371,171,1406,165.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                    ></path>
                </svg>
            </div> */}
        </section>
    );
};

export default AboutSection;