import HeroSection from '@/components/common/HeroSection';
import Image from 'next/image';
import React from 'react';

const OurBlog = () => {
    const data = [
        {
            id:1,
            img:"/assets/greenfarm1/greenfarm1.png",
            data:"May 27, 2025",
            location:"Sarah Johnson",
            title:"The Benefits of Organic Farming",
            desc:"Family-owned organic farm specializing in seasonal vegetables and herbs. Family-owned organic farm specializing in seasonal vegetables and herbs."
        }
    ]
    return (
        <div>
              <HeroSection
                    heading="Our Blog"
                    paragraph="Stay updated with the latest news and insights about organic farming"
                    image="/assets/findFresh1.png"
                  />
            
                  <div className="container flex justify-center items-center text-center py-7">
                    <div>
                      <p className="text-green-500">Mission Table Fresh</p>
                      <p className="text-black font-bold text-2xl">
                        Connecting People Through Food, Building Community Through Tradition
                      </p>
                      <p>
                        Taking control from corporations and putting it back in the hands of
                        the people, where it belongs.
                      </p>
                    </div>
                  </div>
                  {
                    data.map((index) =>{
                      return <div key={index.id}>
                        <Image src={index.img} alt='farm' width={500} height={300}/>
                        <div className='flex ga-9'>
                            {index.data}
                            {index.location}

                        </div>
                        <p>{index.title}</p>
                        <p>{index.desc}</p>
                      </div>
                    })
                  }
        </div>
    );
};

export default OurBlog;