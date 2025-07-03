'use client';
import HeroSection from '@/components/common/HeroSection';
import React from 'react';
import Features from './features-farm/page';
import Search from './search/page';
import Banner from './banner-ads/page';
import WhatCustomers from './what_ourCustomers/page';
import Features2 from './fratureFarm2/page';

const HomePage = () => {
    return (
        <div className="">
            <section className=''>
<HeroSection heading='Find Fresh Fruits and Vegetable Locally' paragraph='Discover fresh, local produce from farms around the world' image="/assets/findFresh1.png"/>
            </section>
            
            <section className="-mt-10">
            <Search/>
            </section>
            <Features/>
            <Banner/>
            <Features2/>
            <WhatCustomers/>
            
        </div>
    );
};

export default HomePage;