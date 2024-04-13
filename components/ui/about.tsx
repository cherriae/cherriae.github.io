import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="aboutme h-[70rem] relative overflow-hidden">
            {/* Add your content here */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#0099ff"
                        fillOpacity="1"
                        d="M0,128L34.3,117.3C68.6,107,137,85,206,90.7C274.3,96,343,128,411,144C480,160,549,160,617,160C685.7,160,754,160,823,133.3C891.4,107,960,53,1029,58.7C1097.1,64,1166,128,1234,154.7C1302.9,181,1371,171,1406,165.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default AboutSection;