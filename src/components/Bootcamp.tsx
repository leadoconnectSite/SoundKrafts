import { useEffect, useRef, useState } from 'react';
import { Trophy, Music, Sparkles } from 'lucide-react';

const Bootcamp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const bootcampFeatures = [
    {
      icon: Music,
      title: 'Live Performance Training',
      description: 'Master crowd reading and energy control'
    },
    {
      icon: Sparkles,
      title: 'Professional Mentorship', 
      description: 'Learn from industry veterans'
    },
    {
      icon: Trophy,
      title: 'Showcase Events',
      description: 'Perform at real venues and events'
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
        .bootcamp-section { transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1); }
        .animate-container { opacity: 0; transform: translateY(-40px); transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); transition-delay: 0.2s; }
        .animate-icon { opacity: 0; transform: translateY(-30px) scale(0.8); transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1); transition-delay: 0.4s; }
        .animate-title { opacity: 0; transform: translateY(-20px); transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); transition-delay: 0.6s; }
        .animate-subtitle { opacity: 0; transform: translateY(-15px); transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); transition-delay: 0.8s; }
        .animate-grid { opacity: 0; transform: translateY(20px); transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); transition-delay: 1.0s; }
        .animate-button { opacity: 0; transform: translateY(30px); transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); transition-delay: 1.6s; }
        
        .is-visible .animate-container,
        .is-visible .animate-icon,
        .is-visible .animate-title,
        .is-visible .animate-subtitle,
        .is-visible .animate-grid,
        .is-visible .animate-button { opacity: 1; transform: translateY(0) scale(1); }
        
        /* Staggered feature cards */
        .feature-card { opacity: 0; transform: translateY(30px) scale(0.95); transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
        .is-visible .feature-card { opacity: 1; transform: translateY(0) scale(1); }
        .is-visible .feature-card:nth-child(1) { transition-delay: 1.2s; }
        .is-visible .feature-card:nth-child(2) { transition-delay: 1.3s; }
        .is-visible .feature-card:nth-child(3) { transition-delay: 1.4s; }
        
        /* 3D Button Effect */
        .bootcamp-btn-primary-compact {
          position: relative;
          overflow: hidden;
          background: linear-gradient(45deg, #f97316, #fb923c);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          padding: 14px 32px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: perspective(1000px) rotateX(0deg) translateZ(0);
          box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.3), 0 10px 10px -5px rgba(249, 115, 22, 0.04);
        }
        .bootcamp-btn-primary-compact::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease-in-out;
        }
        .bootcamp-btn-primary-compact:hover {
          transform: perspective(1000px) rotateX(-10deg) translateY(-2px) translateZ(0);
          box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4), 0 15px 25px -5px rgba(249, 115, 22, 0.1);
          background: linear-gradient(45deg, #ea580c, #f97316);
        }
        .bootcamp-btn-primary-compact:hover::before { left: 100%; }
        .bootcamp-btn-primary-compact:active { transform: perspective(1000px) rotateX(0deg) translateY(0px) translateZ(0); transition: transform 0.1s ease; }
        
        /* Enhanced feature card hover effects */
        .feature-hover { transition: all 0.3s ease; }
        .feature-hover:hover { transform: translateY(-5px); background: rgba(249, 115, 22, 0.15); border-color: rgba(249, 115, 22, 0.5); }
        .feature-icon { transition: all 0.3s ease; }
        .feature-hover:hover .feature-icon { transform: scale(1.1) rotate(5deg); }
        
        @media (max-width: 640px) {
          .bootcamp-btn-primary-compact { font-size: 1rem; padding: 12px 28px; }
        }
        @media (max-width: 480px) {
          .bootcamp-btn-primary-compact { font-size: 0.95rem; padding: 10px 24px; }
        }
      `}</style>

      <section ref={sectionRef} id="bootcamp" className={`bootcamp-section min-h-screen py-20 px-4 flex items-center ${isVisible ? 'is-visible' : ''}`}>
        <div className="max-w-5xl mx-auto">
          <div className="animate-container bg-black/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.2)]">
            <div className="text-center mb-8">
              <Trophy className="animate-icon w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h2 className="animate-title text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                6-Week DJ Performance Bootcamp
              </h2>
              <p className="animate-subtitle text-xl text-gray-300">
                Transform from beginner to stage-ready performer
              </p>
            </div>

            <div className="animate-grid grid sm:grid-cols-3 gap-8 mb-10">
              {bootcampFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card feature-hover text-center p-6 bg-orange-500/10 rounded-xl border border-orange-500/30"
                >
                  <feature.icon className="feature-icon w-10 h-10 text-orange-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2 text-orange-400">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="animate-button text-center">
              <button className="bootcamp-btn-primary-compact">
                Apply Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bootcamp;
