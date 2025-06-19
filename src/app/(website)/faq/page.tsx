
import React from 'react';
import AccordionDemo from '../according/page';
import WhatCustomers from '../what_ourCustomers/page';

const Faq = () => {
    return (
        <div >
           <div className="px-[300px] py-9">
              <p className="font-bold text-xl">
            Frequently Asked Questions
          </p>
            <AccordionDemo/>
           </div>
            <WhatCustomers/>
        </div>
    );
};

export default Faq;