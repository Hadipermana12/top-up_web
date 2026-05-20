import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = ({ faqs }) => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-12 border-t border-white/8">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-surface border border-white/8 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-600">
            <button 
              onClick={() => toggleFaq(faq.id)}
              className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-white focus:outline-none"
            >
              <span>{faq.question}</span>
              {openId === faq.id ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </button>
            {openId === faq.id && (
              <div className="px-6 pb-4 text-gray-400 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
