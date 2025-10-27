import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  description: string;
  djName: string;
  image: string;
  achievement: string;
}

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories: Story[] = [
    {
      id: 1,
      title: "Played at Tomorrowland 2025",
      description: "David Herrlich played Tomorrowland 2025 after winning the Perform at Tomorrowland DJ competition.",
      djName: "David Herrlich",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievement: "Tomorrowland Main Stage"
    },
    {
      id: 2,
      title: "Signed to Major Label",
      description: "Sarah Martinez got signed to Spinnin' Records after completing the Advanced Production course and winning our remix contest.",
      djName: "Sarah Martinez",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievement: "Spinnin' Records Artist"
    },
    {
      id: 3,
      title: "Headlined Ultra Miami",
      description: "Mark Johnson went from bedroom producer to headlining Ultra Miami in just 2 years after joining the academy.",
      djName: "Mark Johnson",
      image: "https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievement: "Ultra Miami Headliner"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStoryData = stories[currentStory];

  return (
    <>
      {/* Same compact 3D button effect CSS from Features component */}
      <style jsx>{`
        /* COMPACT VERSION OF HERO BUTTON EFFECT */
        .btn-primary-compact {
          position: relative;
          overflow: hidden;
          background: linear-gradient(45deg, #f97316, #fb923c);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          padding: 10px 20px;  /* Same compact size */
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: perspective(1000px) rotateX(0deg);
          box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.3),
                      0 10px 10px -5px rgba(249, 115, 22, 0.04);
        }

        .btn-primary-compact::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease-in-out;
        }

        .btn-primary-compact:hover {
          transform: perspective(1000px) rotateX(-10deg) translateY(-2px);
          box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4),
                      0 15px 25px -5px rgba(249, 115, 22, 0.1);
          background: linear-gradient(45deg, #ea580c, #f97316);
        }

        .btn-primary-compact:hover::before {
          left: 100%;
        }

        .btn-primary-compact:active {
          transform: perspective(1000px) rotateX(0deg) translateY(0px);
          transition: transform 0.1s ease;
        }

        /* Responsive adjustments for compact button */
        @media (max-width: 640px) {
          .btn-primary-compact {
            font-size: 0.9rem;
            padding: 8px 16px;
          }
        }
      `}</style>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Large container with background card */}
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-orange-500/20 shadow-2xl overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-400/5 rounded-full blur-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Enhanced Content */}
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <p className="text-orange-500 uppercase tracking-widest text-sm font-bold mb-4 flex items-center">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      REAL PEOPLE, REAL RESULTS
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      Success stories from{' '}
                      <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                        students
                      </span>
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                      From bedroom DJ to the biggest stages. Discover how students turned their 
                      <span className="text-orange-400 font-semibold"> passion into success</span>.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      Your story could be next.
                    </p>
                  </div>

                  {/* Call to action section */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <p className="text-white font-semibold text-lg">
                        Join the Academy now!
                      </p>
                    </div>
                    
                    {/* Updated button with compact 3D effect */}
                    <button className="btn-primary-compact">
                      <span className="flex items-center">
                        START NOW
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-8 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">500+</div>
                      <div className="text-sm text-gray-400">Success Stories</div>
                    </div>
                    <div className="w-px h-12 bg-gray-700"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">95%</div>
                      <div className="text-sm text-gray-400">Career Growth</div>
                    </div>
                  </div>
                </div>

                {/* Right side - DJ Image with Story Card */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    {/* DJ Image */}
                    <img
                      src={currentStoryData.image}
                      alt={currentStoryData.djName}
                      className="w-full h-[500px] object-cover object-center transition-all duration-700"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Story Card Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/90 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {currentStoryData.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {currentStoryData.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-orange-400 font-bold text-lg">
                            {currentStoryData.djName}
                          </span>
                          <span className="text-orange-300 text-sm font-semibold bg-orange-500/20 px-3 py-1 rounded-full">
                            {currentStoryData.achievement}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-orange-500/20 rounded-full backdrop-blur-sm border border-orange-500/30 flex items-center justify-center">
                      <Star className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="absolute top-8 right-20 w-6 h-6 bg-orange-400/40 rounded-full"></div>
                  </div>

                  {/* Navigation Controls - Moved below image */}
                  <div className="flex items-center justify-between mt-8">
                    {/* Previous Button */}
                    <button
                      onClick={prevStory}
                      className="w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-orange-500/25 border border-orange-500/30"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Story Indicators */}
                    <div className="flex space-x-3">
                      {stories.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentStory(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            currentStory === index ? 'bg-orange-500' : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={nextStory}
                      className="w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-orange-500/25 border border-orange-500/30"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
