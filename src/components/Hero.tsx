import { useState, useEffect } from 'react';
import { GraduationCap, Music, Trophy, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  // Array of words to rotate through
  const rotatingWords = [
    'DJ',
    'Music Producer',
    'Beat Mixer',
    'Sound Artist',
    'Party Starter',
    'Crowd Controller',
    'Audio Engineer',
    'Festival Performer',
    'Music Creator',
    'Turntable Master'
  ];

  useEffect(() => {
    const FADE_INTERVAL = 1000; // 1 second for fade
    const WORD_CHANGE_INTERVAL = 2000; // 2 seconds for word change

    // Handle fade animation
    const fadeTimeout = setInterval(() => {
      setFadeClass(prevFade => prevFade === 'fade-in' ? 'fade-out' : 'fade-in');
    }, FADE_INTERVAL);

    // Handle word change
    const wordTimeout = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % rotatingWords.length);
    }, WORD_CHANGE_INTERVAL);

    return () => {
      clearInterval(fadeTimeout);
      clearInterval(wordTimeout);
    };
  }, [rotatingWords.length]);

  return (
    <>
      {/* Add CSS styles for animations */}
      <style jsx>{`
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.5s ease-in-out;
        }
        .fade-out {
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.5s ease-in-out;
        }
        .rotating-text {
          display: inline-block;
          min-width: 350px;
          min-height: 1.5em;
          text-align: left;
          vertical-align: top;
        }
        .gradient-text {
          background: linear-gradient(135deg, #f97316, #fb923c, #fdba74);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 120px;
        }
        .main-content {
          position: relative;
          z-index: 10;
          width: 100%;
        }
        .button-container {
          position: relative;
          z-index: 15;
          margin-bottom: 2rem;
        }
        .stats-container {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1024px;
          z-index: 1;
        }
        .title-container {
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
        }

        /* Modern Button Effects */
        .btn-primary {
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

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease-in-out;
        }

        .btn-primary:hover {
          transform: perspective(1000px) rotateX(-10deg) translateY(-2px);
          box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4),
                      0 15px 25px -5px rgba(249, 115, 22, 0.1);
          background: linear-gradient(45deg, #ea580c, #f97316);
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:active {
          transform: perspective(1000px) rotateX(0deg) translateY(0px);
          transition: transform 0.1s ease;
        }

        .btn-secondary {
          position: relative;
          background: transparent;
          border: 2px solid transparent;
          border-radius: 12px;
          color: #f97316;
          font-weight: 600;
          font-size: 1.125rem;
          padding: 14px 30px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          background-clip: padding-box;
        }

        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #f97316, #fb923c, #fdba74, #f97316);
          background-size: 300% 300%;
          border-radius: 12px;
          z-index: -2;
          animation: gradientShift 3s ease infinite;
        }

        .btn-secondary::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background: #000;
          border-radius: 10px;
          z-index: -1;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .btn-secondary:hover {
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -5px rgba(249, 115, 22, 0.3);
        }

        .btn-secondary:hover::after {
          background: transparent;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .rotating-text {
            min-width: 280px;
          }
          .stats-container {
            bottom: 20px;
            padding: 0 1rem;
          }
          .title-container {
            height: 180px;
          }
          .hero-section {
            padding-bottom: 100px;
          }
          .btn-primary,
          .btn-secondary {
            font-size: 1rem;
            padding: 14px 28px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-section {
            padding-bottom: 140px;
          }
          .button-container {
            margin-bottom: 3rem;
          }
          .btn-primary,
          .btn-secondary {
            font-size: 0.95rem;
            padding: 12px 24px;
          }
        }
      `}</style>

      <section id="home" className="hero-section px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center main-content">
          <div className="mb-8 flex items-center justify-center space-x-8 text-orange-500">
            <GraduationCap className="w-12 h-12 animate-pulse" />
            <Music className="w-12 h-12 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Trophy className="w-12 h-12 animate-pulse" style={{ animationDelay: '0.4s' }} />
            <Sparkles className="w-12 h-12 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>

          {/* Fixed height container for the dynamic headline */}
          <div className="title-container">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              How to learn{' '}
              <span className={`rotating-text gradient-text ${fadeClass}`}>
                {rotatingWords[currentWordIndex]}
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent mt-4 block">
                with 600+ Professional Lessons
              </span>
            </h1>
          </div>

          <p className="text-xl sm:text-2xl text-orange-400 mb-4 font-semibold">
            Unlock Your Inner Musical Genius
          </p>

          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Master the art of music creation, mixing, and performance with our comprehensive curriculum trusted by 20,000+ students worldwide
          </p>

          {/* Updated Button container with modern effects */}
          <div className="button-container">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('pricing')}
                className="btn-primary"
              >
                Start Learning Today
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="btn-secondary"
              >
                Explore Courses
              </button>
            </div>
          </div>
        </div>

        {/* Absolutely positioned stats */}
        <div className="stats-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">600+</div>
              <div className="text-gray-400">Professional Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">20K+</div>
              <div className="text-gray-400">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
