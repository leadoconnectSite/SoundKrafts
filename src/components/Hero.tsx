import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Music, Trophy, Sparkles, ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [rotatingTextWidth, setRotatingTextWidth] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

  // Function to calculate text width with more precision
  const calculateTextWidth = (text: string) => {
    if (!canvasRef.current) {
      canvasRef.current = document.createElement('canvas');
    }
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (context) {
      // Use the exact font properties from CSS clamp
      const fontSize = Math.min(Math.max(window.innerWidth * 0.06, 32), 67.2); // Convert clamp(2rem, 6vw, 4.2rem)
      context.font = `800 ${fontSize}px system-ui, -apple-system, sans-serif`;
      const metrics = context.measureText(text);
      return Math.ceil(metrics.width) + 10; // Add small buffer for safety
    }
    
    return 0;
  };

  // Pre-calculate all widths for smoother transitions
  useEffect(() => {
    const widths = rotatingWords.map(word => calculateTextWidth(word));
    const currentWidth = widths[currentWordIndex];
    setRotatingTextWidth(currentWidth);
  }, [currentWordIndex, rotatingWords]);

  useEffect(() => {
    const FADE_DURATION = 800; // Slightly faster for smoother feel
    const WORD_CHANGE_INTERVAL = 3000; // Increased for better readability
    const FADE_OFFSET = 400; // Time before word change when fade starts

    const wordChangeTimeout = setInterval(() => {
      // Start fade out
      setFadeClass('fade-out');
      
      // Change word after fade out completes
      setTimeout(() => {
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % rotatingWords.length);
        // Start fade in immediately after word change
        setTimeout(() => {
          setFadeClass('fade-in');
        }, 50); // Small delay to ensure DOM update
      }, FADE_DURATION / 2);
      
    }, WORD_CHANGE_INTERVAL);

    return () => {
      clearInterval(wordChangeTimeout);
    };
  }, [rotatingWords.length]);

  return (
    <>
      <style jsx>{`
        /* Ultra-smooth animations with optimized cubic-bezier curves */
        .fade-in {
          opacity: 1;
          transform: translateY(0px) scale(1);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .fade-out {
          opacity: 0;
          transform: translateY(-12px) scale(0.98);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        /* Ultra-smooth rotating text container */
        .rotating-text {
          display: inline-block;
          min-height: 1.2em;
          text-align: left;
          vertical-align: top;
          white-space: nowrap;
          overflow: visible;
          /* Ultra-smooth width transition with custom easing */
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: width, transform;
          transform: translateZ(0); /* Hardware acceleration */
        }

        /* Flexible headline container with smooth layout */
        .headline-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          white-space: nowrap;
          /* Smooth container adjustments */
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
          transform: translateZ(0);
        }

        /* Enhanced gradient with smoother animation */
        .gradient-text {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 25%, #ffd23f 50%, #ff8c42 75%, #ff6b35 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlowSmooth 6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          will-change: background-position;
        }

        @keyframes gradientFlowSmooth {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 200% 50%; }
          75% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Hero section with optimized performance */
        .hero-section {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 0.2rem 2rem;
          overflow-x: hidden;
          /* Smooth scrolling performance */
          will-change: transform;
          transform: translateZ(0);
        }

        /* Content Layout */
        .main-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 0.1rem;
        }

        /* Ultra-smooth stats cards */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 3rem auto 0;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          /* Ultra-smooth hover transitions */
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          will-change: transform, background-color, border-color, box-shadow;
          transform: translateZ(0);
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .stat-card:hover {
          transform: translateY(-6px) translateZ(0);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 107, 53, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(255, 107, 53, 0.2);
        }

        .stat-card:hover::before {
          left: 100%;
        }

        /* Ultra-smooth icon animations */
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .icon-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 107, 53, 0.2);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, border-color, box-shadow;
          transform: translateZ(0);
        }

        .icon-wrapper:hover {
          transform: translateY(-4px) rotate(8deg) translateZ(0);
          border-color: rgba(255, 107, 53, 0.6);
          box-shadow: 0 12px 24px rgba(255, 107, 53, 0.25);
        }

        /* Enhanced Typography with smooth scaling */
        .main-headline {
          font-size: clamp(2rem, 6vw, 4.2rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          color: #ffffff;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          /* Smooth text scaling */
          transition: font-size 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .sub-headline {
          font-size: clamp(1.4rem, 3.5vw, 2.6rem);
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, #ff6b35 50%, #ffd23f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          transition: font-size 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tagline {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ff8c42;
          margin-bottom: 0.8rem;
          text-shadow: 0 2px 10px rgba(255, 107, 53, 0.3);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .description {
          font-size: 1.1rem;
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 2rem;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Content Center */
        .content-center {
          text-align: center;
          margin-bottom: 2rem;
        }

        /* Ultra-smooth buttons */
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
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: perspective(1000px) rotateX(0deg) translateZ(0);
          box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.3),
                      0 10px 10px -5px rgba(249, 115, 22, 0.04);
          will-change: transform, box-shadow, background;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .btn-primary:hover {
          transform: perspective(1000px) rotateX(-10deg) translateY(-3px) translateZ(0);
          box-shadow: 0 25px 50px -10px rgba(249, 115, 22, 0.4),
                      0 20px 30px -5px rgba(249, 115, 22, 0.1);
          background: linear-gradient(45deg, #ea580c, #f97316);
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:active {
          transform: perspective(1000px) rotateX(0deg) translateY(0px) translateZ(0);
          transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background-clip: padding-box;
          will-change: transform, color, box-shadow;
          transform: translateZ(0);
        }

        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #f97316, #fb923c, #fdba74, #f97316);
          background-size: 400% 400%;
          border-radius: 12px;
          z-index: -2;
          animation: gradientShiftSmooth 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
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
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .btn-secondary:hover {
          color: white;
          transform: translateY(-3px) translateZ(0);
          box-shadow: 0 18px 35px -5px rgba(249, 115, 22, 0.3);
        }

        .btn-secondary:hover::after {
          background: transparent;
        }

        @keyframes gradientShiftSmooth {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 200% 50%; }
          75% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Responsive Design with smooth scaling */
        @media (max-width: 768px) {
          .icon-container {
            gap: 1.5rem;
          }
          .icon-wrapper {
            width: 50px;
            height: 50px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 2rem;
          }
          .hero-section {
            min-height: 70vh;
            padding: 5rem 0.1rem 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .btn-primary,
          .btn-secondary {
            font-size: 1rem;
            padding: 14px 28px;
            width: 100%;
            max-width: 280px;
          }
          .hero-section {
            min-height: 65vh;
            padding: 4rem 0.05rem 1rem;
          }
        }

        /* Prefers-reduced-motion support for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .gradient-text {
            animation: none;
          }
          
          .btn-secondary::before {
            animation: none;
          }
        }
      `}</style>

      <section id="home" className="hero-section">
        <div className="main-content">
          {/* Top Section - Icons */}
          <div className="icon-container">
            <div className="icon-wrapper">
              <GraduationCap className="w-6 h-6 text-orange-400" />
            </div>
            <div className="icon-wrapper">
              <Music className="w-6 h-6 text-orange-400" />
            </div>
            <div className="icon-wrapper">
              <Trophy className="w-6 h-6 text-orange-400" />
            </div>
            <div className="icon-wrapper">
              <Sparkles className="w-6 h-6 text-orange-400" />
            </div>
          </div>

          {/* Center Section - Main Content */}
          <div className="content-center">
            {/* Ultra-smooth dynamic headline */}
            <div className="headline-container">
              <h1 className="main-headline">
                Learn to become a{' '}
                <span 
                  className={`rotating-text gradient-text ${fadeClass}`}
                  style={{ 
                    width: rotatingTextWidth ? `${rotatingTextWidth}px` : 'auto',
                    minWidth: rotatingTextWidth ? `${rotatingTextWidth}px` : 'auto'
                  }}
                >
                  {rotatingWords[currentWordIndex]}
                </span>
              </h1>
            </div>

            <div className="sub-headline">
              with 600+ Professional Lessons
            </div>

            <p className="tagline">
              Unlock Your Musical Potential
            </p>

            <p className="description">
              Master the art of music creation, mixing, and performance with our comprehensive curriculum trusted by 20,000+ students worldwide
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('pricing')}
                className="btn-primary flex items-center gap-2"
              >
                Start Learning Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="btn-secondary flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Explore Courses
              </button>
            </div>
          </div>

          {/* Bottom Section - Modern Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">600+</div>
              <div className="text-gray-300 font-medium">Professional Lessons</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">20K+</div>
              <div className="text-gray-300 font-medium">Active Students</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-gray-300 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
