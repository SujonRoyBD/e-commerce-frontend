import React from "react";
import AccordionDemo from "../according/page";
import WhatCustomers from "../what_ourCustomers/page";
import Link from "next/link";
import { HelpCircle, Mail } from "lucide-react";

const Faq = () => {
  return (
    <div className="space-y-12 md:space-y-16 pb-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12 md:py-16 border-b border-gray-150">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Help & Support
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Everything you need to know about ordering fresh harvest, farmer verification, and local delivery.
          </p>
        </div>
      </section>

      {/* Accordion container */}
      <section className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <AccordionDemo />

        {/* Still have questions CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-emerald-50 border border-emerald-100 text-center space-y-3">
          <h3 className="text-xl font-bold text-gray-900">Still have questions?</h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Our friendly community support team is here to help you connect with local producers.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link
              href="/contactUs"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Customer testimonials */}
      <WhatCustomers />
    </div>
  );
};

export default Faq;