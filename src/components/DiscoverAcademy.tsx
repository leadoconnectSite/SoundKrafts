import { useState } from 'react';

interface AcademyFeature {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const DiscoverAcademy = () => {
  const [activeFeature, setActiveFeature] = useState<number>(1);

  const features: AcademyFeature[] = [
    {
      id: 1,
      title: "More than 600+ lessons",
      description: "Access over 600+ lessons by Tomorrowland artists and industry experts. Step by step courses for beginner and advanced level DJs & producers.",
      imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Talent radar, DJ & producing contests",
      description: "Grab countless opportunities to get discovered. Join remix competitions, DJ contests and earn your spot on the talent radar.",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Join Q&A and feedback livestreams",
      description: "Interact directly with professional DJs and producers in live Q&A sessions. Get personalized feedback on your tracks and mixes.",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "Download the best templates & project files",
      description: "Access exclusive project files, templates, and resources from top producers to accelerate your learning journey.",
      imageUrl: "https://images.unsplash.com/photo-1571266028243-d220c9ae3b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      title: "Free DJ music & samples included!",
      description: "Get access to a vast library of royalty-free music, samples, loops, and sound effects to enhance your productions.",
      imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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

        /* Image transition styles */
        .feature-image {
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 16px;
          box-shadow: 0 15px 30px -10px rgba(249, 115, 22, 0.3);
        }

        .feature-image:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4);
        }

        .thumbnail-image {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .thumbnail-image:hover {
          transform: scale(1.05);
        }

        /* Loading shimmer effect */
        .image-loading {
          background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
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
            {/* Left side - Dynamic Image Display */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-8 rounded-3xl shadow-2xl">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-20">
                  <div className="grid grid-cols-3 h-full">
                    <div className="bg-gradient-to-b from-orange-400 to-orange-600"></div>
                    <div className="bg-gradient-to-b from-red-500 to-orange-500"></div>
                    <div className="bg-gradient-to-b from-orange-600 to-red-600"></div>
                  </div>
                </div>
                
                {/* Dynamic Feature Image */}
                <div className="relative z-10">
                  <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 border-gray-800/50">
                    {/* Device header */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-gray-400 text-xs">SoundKraft Academy</div>
                    </div>
                    
                    {/* Main Feature Image */}
                    <div className="relative overflow-hidden rounded-xl mb-4 group">
                      <img 
                        src={features.find(f => f.id === activeFeature)?.imageUrl}
                        alt={features.find(f => f.id === activeFeature)?.title}
                        className="w-full h-64 object-cover feature-image transition-transform duration-700"
                        loading="eager"
                        onError={(e) => {
                          // Multiple fallback options
                          const fallbacks = [
                            "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                            "https://images.unsplash.com/photo-1571266028243-d220c9ae3b15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                            "https://picsum.photos/1000/640?random=dj"
                          ];
                          const currentSrc = e.currentTarget.src;
                          const nextFallback = fallbacks.find(url => !currentSrc.includes(url.split('?')[0]));
                          if (nextFallback) {
                            e.currentTarget.src = nextFallback;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                          {features.find(f => f.id === activeFeature)?.title}
                        </h3>
                        <p className="text-orange-300 text-sm font-medium">
                          Feature {activeFeature} of {features.length} • SoundKraft
                        </p>
                      </div>
                      
                      {/* Play icon overlay for dynamic effect */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                      </div>
                    </div>
                    
                    {/* Feature thumbnails */}
                    <div className="grid grid-cols-5 gap-2">
                      {features.map((feature) => (
                        <button
                          key={feature.id}
                          onClick={() => handleFeatureClick(feature.id)}
                          className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                            activeFeature === feature.id 
                              ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-black transform scale-105' 
                              : 'opacity-60 hover:opacity-100 hover:scale-105'
                          }`}
                        >
                          <img 
                            src={feature.imageUrl}
                            alt={feature.title}
                            className="w-full h-12 object-cover thumbnail-image"
                            loading="lazy"
                            onError={(e) => {
                              // Fallback for thumbnails with grayscale effect
                              e.currentTarget.src = `https://picsum.photos/80/48?random=${feature.id}&grayscale`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-1 left-1 text-white text-xs font-bold">
                            {feature.id}
                          </div>
                        </button>
                      ))}
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
                Discover the SoundKraft Academy
              </h2>

              <div className="space-y-8">
                {features.map((feature) => (
                  <div key={feature.id} className="flex group">
                    {/* Animated left border */}
                    <div className={`w-1 mr-6 flex-shrink-0 transition-all duration-500 ease-in-out ${
                      activeFeature === feature.id ? 'bg-orange-500 h-16' : 'bg-gray-600 h-8 group-hover:h-12 group-hover:bg-orange-400'
                    }`}></div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <button
                        onClick={() => handleFeatureClick(feature.id)}
                        className={`text-xl font-bold mb-3 text-left w-full transition-all duration-500 ease-in-out hover:text-orange-400 flex items-center gap-3 ${
                          activeFeature === feature.id ? 'text-white' : 'text-gray-400'
                        }`}
                      >
                        <span>{feature.title}</span>
                        {activeFeature === feature.id && (
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        )}
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
                  Start Your SoundKraft Journey
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
