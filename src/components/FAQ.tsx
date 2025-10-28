import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2, rootMargin: '-50px 0px' });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <>
      <style jsx>{`
        .faq-section { transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1); }
        .animate-header { opacity: 0; transform: translateY(-40px); transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); transition-delay: 0.2s; }
        .animate-title { opacity: 0; transform: translateY(-30px); transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); transition-delay: 0.4s; }
        .animate-faqs { opacity: 0; transform: translateY(-20px); transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); transition-delay: 0.6s; }
        .animate-cta { opacity: 0; transform: translateY(30px); transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); transition-delay: 1.4s; }
        
        .is-visible .animate-header,
        .is-visible .animate-title,
        .is-visible .animate-faqs,
        .is-visible .animate-cta { opacity: 1; transform: translateY(0); }
        
        /* Staggered FAQ items */
        .faq-item { opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
        .is-visible .faq-item { opacity: 1; transform: translateY(0); }
        .is-visible .faq-item:nth-child(1) { transition-delay: 0.8s; }
        .is-visible .faq-item:nth-child(2) { transition-delay: 0.9s; }
        .is-visible .faq-item:nth-child(3) { transition-delay: 1.0s; }
        .is-visible .faq-item:nth-child(4) { transition-delay: 1.1s; }
        .is-visible .faq-item:nth-child(5) { transition-delay: 1.2s; }
        
        /* 3D Button Effect */
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
          transform: perspective(1000px) rotateX(0deg) translateZ(0);
          box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.3), 0 10px 10px -5px rgba(249, 115, 22, 0.04);
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
          transform: perspective(1000px) rotateX(-10deg) translateY(-2px) translateZ(0);
          box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4), 0 15px 25px -5px rgba(249, 115, 22, 0.1);
          background: linear-gradient(45deg, #ea580c, #f97316);
        }
        .faq-btn-primary-compact:hover::before { left: 100%; }
        .faq-btn-primary-compact:active { transform: perspective(1000px) rotateX(0deg) translateY(0px) translateZ(0); transition: transform 0.1s ease; }
        
        /* Enhanced FAQ interactions */
        .faq-button { transition: all 0.3s ease; }
        .faq-button:hover { background: rgba(249, 115, 22, 0.05); border-radius: 0.5rem; margin: 0 -1rem; padding-left: 1rem; padding-right: 1rem; }
        .faq-question { transition: all 0.3s ease; }
        .faq-chevron { transition: all 0.3s ease; }
        .faq-button:hover .faq-chevron { transform: scale(1.1); }
        
        @media (max-width: 640px) {
          .faq-btn-primary-compact { font-size: 1rem; padding: 14px 28px; }
        }
        @media (max-width: 480px) {
          .faq-btn-primary-compact { font-size: 0.95rem; padding: 12px 24px; }
        }
      `}</style>

      <section ref={sectionRef} id="faq" className={`faq-section py-20 px-4 ${isVisible ? 'is-visible' : ''}`}>
        <div className="max-w-4xl mx-auto w-full">
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="animate-header text-orange-500 uppercase tracking-wider text-sm font-semibold mb-4">
              FAQ
            </p>
            <h2 className="animate-title text-4xl sm:text-5xl font-bold text-white">
              Frequently asked questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="animate-faqs space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item border-b border-gray-700 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="faq-button w-full py-8 flex items-center justify-between text-left group"
                >
                  <span className="faq-question text-xl font-semibold text-white pr-8 group-hover:text-orange-400 transition-colors">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="faq-chevron w-6 h-6 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="faq-chevron w-6 h-6 text-gray-400 flex-shrink-0 group-hover:text-orange-500" />
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

          {/* Bottom CTA Section */}
          <div className="animate-cta text-center mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-lg mb-6">
              Still have questions? We're here to help.
            </p>
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
