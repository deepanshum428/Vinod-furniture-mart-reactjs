import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What types of furniture do you sell?",
    answer:
      "We offer a wide range of furniture including sofas, beds, dining sets, wardrobes, and office furniture made from premium quality materials.",
  },
  {
    question: "Do you provide home delivery?",
    answer:
      "Yes, we provide safe and reliable home delivery services across multiple locations. Delivery charges may vary based on distance.",
  },
  {
    question: "Can I customize furniture?",
    answer:
      "Absolutely! We provide furniture customization options such as size, material, and color to match your home interior perfectly.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "We accept all major credit/debit cards, UPI, net banking, and cash on delivery for your convenience.",
  },
  {
    question: "Do you offer warranty on your products?",
    answer:
      "Yes, most of our furniture items come with a warranty against manufacturing defects. Warranty details are provided at the time of purchase.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
