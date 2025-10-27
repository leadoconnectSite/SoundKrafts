import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'I have not received my verification e-mail.',
      answer: 'When signing up, you need to verify your e-mail. Please note it can take a while until you receive this e-mail. Also, please check your spam or junk folder. You can request a new confirmation e-mail via the Log in page.'
    },
    {
      question: 'I want to change my contact details or password.',
      answer: 'While logged in, you can update your contact details via \'My account\'.'
    },
    {
      question: 'Do I need any DJ gear or software?',
      answer: 'No! You can start learning with just a laptop. We provide software tutorials and recommend beginner-friendly equipment as you progress. All the software we use in our courses is either free or comes with free trials.'
    },
    {
      question: 'Can I get feedback on my mixes and productions?',
      answer: 'Absolutely! Our Pro and Superstar subscribers get access to monthly feedback sessions where our instructors review your work. You can also participate in our community forums for peer feedback.'
    },
    {
      question: 'How long does it take to become a professional DJ?',
      answer: 'Most students see significant progress in 3-6 months with consistent practice. Becoming a professional DJ varies greatly depending on your goals, practice time, and networking efforts. Our structured curriculum helps accelerate your learning journey.'
    }
  ];

  return (
    <>
      {/* SCOPED CSS - Only affects buttons in this FAQ component */}
      <style jsx>{`
        /* SCOPED 3D EFFECT FOR FAQ "CONTACT SUPPORT" BUTTON */
        .faq-btn-primary-compact {
          position: relative;
          overflow: hidden;
          background: linear-gradient(45deg, #f97316, #fb923c);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          padding: 16px 32px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: perspective(1000px) rotateX(0deg);
          box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.3),
                      0 10px 10px -5px rgba(249, 115, 22, 0.04);
        }

        .faq-btn-primary-compact::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease-in-out;
        }

        .faq-btn-primary-compact:hover {
          transform: perspective(1000px) rotateX(-10deg) translateY(-2px);
          box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4),
                      0 15px 25px -5px rgba(249, 115, 22, 0.1);
          background: linear-gradient(45deg, #ea580c, #f97316);
        }

        .faq-btn-primary-compact:hover::before {
          left: 100%;
        }

        .faq-btn-primary-compact:active {
          transform: perspective(1000px) rotateX(0deg) translateY(0px);
          transition: transform 0.1s ease;
        }

        /* Responsive adjustments for FAQ button */
        @media (max-width: 640px) {
          .faq-btn-primary-compact {
            font-size: 1rem;
            padding: 14px 28px;
          }
        }

        @media (max-width: 480px) {
          .faq-btn-primary-compact {
            font-size: 0.95rem;
            padding: 12px 24px;
          }
        }
      `}</style>

      <section id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-orange-500 uppercase tracking-wider text-sm font-semibold mb-4">
              FAQ
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Frequently asked questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left hover:text-orange-400 transition-colors group"
                >
                  <span className="text-xl font-semibold text-white pr-8 group-hover:text-orange-400 transition-colors">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-orange-500 flex-shrink-0 transition-all" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0 transition-all group-hover:text-orange-500" />
                  )}
                </button>

                {/* Animated Answer Container */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`pb-8 transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'translate-y-0' : '-translate-y-4'
                  }`}>
                    <p className="text-gray-300 leading-relaxed text-lg max-w-4xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section with Updated Button */}
          <div className="text-center mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-lg mb-6">
              Still have questions? We're here to help.
            </p>
            {/* Updated button with 3D effect */}
            <button className="faq-btn-primary-compact">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
