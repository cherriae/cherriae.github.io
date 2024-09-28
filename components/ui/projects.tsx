import React from 'react';
import { Timeline } from './utils/timeline';
import Image from 'next/image';


const ProjectSection: React.FC = () => {
    const data = [
        {
            title: "Team 334 2024 Robot",
            content: (
                <div>
                    <p>

                    </p>
                    <div className="grid grid-cols-2 gap-4">
                    <Image
                        src=""
                        alt="something"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                    />
                    </div>
                </div>  
            )
        },
        {
            title: "Team 334 Website",
            content: (
                <div>

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