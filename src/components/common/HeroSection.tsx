import React from 'react';

interface HeroSectionProps {
    heading : string;
    paragraph : string;
    image : string
}

const HeroSection = ({heading, paragraph, image}:HeroSectionProps) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className={`bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center`}>
            <div>
                <h1 className="text-center text-4xl font-bold text-white leading-normal">{heading}</h1>
            <p className="text-center text-lg font-normal text-white leading-normal pt-2">{paragraph}</p>
            </div>
        </div>
    );
};
export default HeroSection;