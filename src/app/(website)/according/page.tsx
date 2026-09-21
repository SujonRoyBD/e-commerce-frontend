"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "How does Table Fresh connect me with local farmers?",
    answer:
      "Table Fresh maps local gardens, organic homesteads, and small family farms within your county. When you place an order, the grower receives immediate notice to pick your produce fresh from the earth, ensuring maximum nutrition and taste.",
  },
  {
    id: "item-2",
    question: "Is all produce strictly organic and non-GMO?",
    answer:
      "Yes! Every producer on Table Fresh agrees to our Clean Earth Charter: zero synthetic pesticides, no chemical ripening agents, and 100% non-GMO heritage seeds. You can view each farm's specific organic practices on their profile.",
  },
  {
    id: "item-3",
    question: "How fast is delivery after the produce is harvested?",
    answer:
      "We pride ourselves on 24-hour harvest-to-table delivery. Most items ordered before 2 PM are harvested early the following morning and delivered to your doorstep that afternoon.",
  },
  {
    id: "item-4",
    question: "Can I sell produce from my own home garden?",
    answer:
      "Absolutely! Over 60 million American homes have gardens. If you have surplus vegetables, fruit trees, or herbs, click 'Become a Seller' in our top menu. Approval takes less than 24 hours.",
  },
  {
    id: "item-5",
    question: "What happens if produce arrives bruised or unsatisfactory?",
    answer:
      "We offer a 100% Freshness Guarantee. If any fruit or vegetable fails your freshness expectation, snap a quick photo in your account to receive an instant refund or replacement credit without hassle.",
  },
  {
    id: "item-6",
    question: "What payment methods are supported?",
    answer:
      "We accept all major debit/credit cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, and community farm vouchers.",
  },
];

const AccordionDemo = () => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3" defaultValue="item-1">
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className="bg-white rounded-2xl border border-gray-150 px-5 shadow-sm hover:border-emerald-200 transition-colors"
        >
          <AccordionTrigger className="text-left font-semibold text-gray-900 text-base sm:text-lg hover:text-emerald-700 py-4 hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base text-gray-600 leading-relaxed pb-4 pt-1">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionDemo;