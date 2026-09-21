import React from "react";

interface HeroSectionProps {
  heading: string;
  paragraph: string;
  image: string;
}

const HeroSection = ({ heading, paragraph, image }: HeroSectionProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative bg-cover bg-center bg-no-repeat min-h-[420px] sm:min-h-[500px] md:h-[580px] lg:h-[640px] w-full flex items-center justify-center px-4 sm:px-6"
    >
      {/* Dark gradient overlay for maximum readability on all photos */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-black/30" />

      <div className="relative z-10 max-w-3xl text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-semibold border border-white/20 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          100% Locally Sourced & Chemical-Free
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight">
          {heading}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed font-normal">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;