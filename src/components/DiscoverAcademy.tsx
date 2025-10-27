import { useState } from 'react';
import { Play, Music, Trophy, Download, Gift } from 'lucide-react';

interface AcademyFeature {
  id: number;
  title: string;
  description: string;
  icon: any;
}

const DiscoverAcademy = () => {
  const [activeFeature, setActiveFeature] = useState<number>(1);

  const features: AcademyFeature[] = [
    {
      id: 1,
      title: "More than 600+ lessons",
      description: "Access over 600+ lessons by Tomorrowland artists and industry experts. Step by step courses for beginner and advanced level DJs & producers.",
      icon: Play,
    },
    {
      id: 2,
      title: "Talent radar, DJ & producing contests",
      description: "Grab countless opportunities to get discovered. Join remix competitions, DJ contests and earn your spot on the talent radar.",
      icon: Trophy,
    },
    {
      id: 3,
      title: "Join Q&A and feedback livestreams",
      description: "Interact directly with professional DJs and producers in live Q&A sessions. Get personalized feedback on your tracks and mixes.",
      icon: Music,
    },
    {
      id: 4,
      title: "Download the best templates & project files",
      description: "Access exclusive project files, templates, and resources from top producers to accelerate your learning journey.",
      icon: Download,
    },
    {
      id: 5,
      title: "Free DJ music & samples included!",
      description: "Get access to a vast library of royalty-free music, samples, loops, and sound effects to enhance your productions.",
      icon: Gift,
    }
  ];

  const handleFeatureClick = (featureId: number) => {
    setActiveFeature(featureId);
  };

  return (
    <>
      {/* EXACT SAME CSS FROM HERO COMPONENT */}
      <style jsx>{`
        /* Smooth scroll behavior for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom easing curves for even smoother animations */
        .smooth-dropdown {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .smooth-dropdown-content {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* EXACT HERO BUTTON EFFECTS */
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
          .btn-primary,
          .btn-secondary {
            font-size: 1rem;
            padding: 14px 28px;
          }
        }
        
        @media (max-width: 480px) {
          .btn-primary,
          .btn-secondary {
            font-size: 0.95rem;
            padding: 12px 24px;
          }
        }
      `}</style>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Device mockup */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-8 rounded-3xl shadow-2xl">
                {/* Background artist images grid */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-30">
                  <div className="grid grid-cols-3 h-full">
                    <div className="bg-gradient-to-b from-orange-400 to-orange-600"></div>
                    <div className="bg-gradient-to-b from-red-500 to-orange-500"></div>
                    <div className="bg-gradient-to-b from-orange-600 to-red-600"></div>
                  </div>
                </div>
                
                {/* Device mockup */}
                <div className="relative z-10">
                  <div className="bg-black rounded-2xl p-6 shadow-2xl border-4 border-gray-800">
                    {/* Device header */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-gray-400 text-xs">DJ Academy Portal</div>
                    </div>
                    
                    {/* Course grid simulation */}
                    <div className="space-y-4">
                      <div className="text-orange-500 text-sm font-semibold">Featured Courses</div>
                      <div className="grid grid-cols-3 gap-3">
                        {[1,2,3,4,5,6].map((item) => (
                          <div key={item} className="bg-gray-800 rounded-lg p-2 border border-orange-500/20">
                            <div className="w-full h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded mb-2"></div>
                            <div className="h-2 bg-gray-700 rounded mb-1"></div>
                            <div className="h-1 bg-gray-600 rounded w-2/3"></div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Production courses section */}
                      <div className="mt-6">
                        <div className="text-orange-500 text-sm font-semibold mb-3">Production Courses</div>
                        <div className="grid grid-cols-2 gap-2">
                          {[1,2,3,4].map((item) => (
                            <div key={item} className="bg-gray-800 rounded p-2 border border-orange-500/20">
                              <div className="w-full h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded mb-1"></div>
                              <div className="h-1 bg-gray-700 rounded mb-1"></div>
                              <div className="h-1 bg-gray-600 rounded w-1/2"></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Q&A Section */}
                      <div className="mt-6">
                        <div className="text-orange-500 text-sm font-semibold mb-3">Questions Answered</div>
                        <div className="grid grid-cols-2 gap-2">
                          {[1,2,3,4,5].map((item) => (
                            <div key={item} className="bg-gray-800 rounded p-2 border border-orange-500/20">
                              <div className="w-full h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded mb-1"></div>
                              <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-red-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Right side - Interactive Content List */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
                Discover the online DJ academy
              </h2>

              <div className="space-y-8">
                {features.map((feature) => (
                  <div key={feature.id} className="flex">
                    {/* Animated left border */}
                    <div className={`w-1 mr-6 flex-shrink-0 transition-all duration-500 ease-in-out ${
                      activeFeature === feature.id ? 'bg-orange-500' : 'bg-gray-600'
                    }`}></div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <button
                        onClick={() => handleFeatureClick(feature.id)}
                        className={`text-xl font-bold mb-3 text-left w-full transition-all duration-500 ease-in-out hover:text-orange-400 ${
                          activeFeature === feature.id ? 'text-white' : 'text-gray-400'
                        }`}
                      >
                        {feature.title}
                      </button>
                      
                      {/* Animated description container */}
                      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        activeFeature === feature.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className={`transform transition-all duration-700 ease-in-out ${
                          activeFeature === feature.id ? 'translate-y-0' : '-translate-y-4'
                        }`}>
                          <p className="text-gray-300 leading-relaxed pt-3">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button - Now using EXACT Hero button effect */}
              <div className="mt-12">
                <button className="btn-primary">
                  Start Your DJ Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscoverAcademy;
