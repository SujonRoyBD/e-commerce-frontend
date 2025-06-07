import HeroSection from '@/components/common/HeroSection';
import React from 'react';
import Features from './features-farm/page';

const HomePage = () => {
    return (
        <div>
            <HeroSection heading='Find Fresh Fruits and Vegetable Locally' paragraph='Discover fresh, local produce from farms around the world' image="/aseats/findFresh1.png"/>
            <Features/>
        </div>
    );
};

export default HomePage;