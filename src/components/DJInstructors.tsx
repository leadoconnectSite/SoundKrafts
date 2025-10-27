import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DJ {
  id: number;
  name: string;
  lessons: number;
  image: string;
  specialty?: string;
}

const DJInstructors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const djs: DJ[] = [
    {
      id: 1,
      name: "James Hype",
      lessons: 36,
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialty: "House & Tech House"
    },
    {
      id: 2,
      name: "Afrojack",
      lessons: 95,
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialty: "EDM & Progressive House"
    },
    {
      id: 3,
      name: "Alok",
      lessons: 8,
      image: "https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialty: "Brazilian Bass"
    },
    {
      id: 4,
      name: "Kevin de Vries",
      lessons: 18,
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialty: "Techno"
    },
    {
      id: 5,
      name: "Martin Garrix",
      lessons: 42,
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialty: "Big Room House"
    },
    {
      id: 6,
      name: "David Guetta",
      lessons: 67,
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialty: "Commercial Dance"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(djs.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(djs.length / 4)) % Math.ceil(djs.length / 4));
  };

  const getVisibleDJs = () => {
    const startIndex = currentSlide * 4;
    return djs.slice(startIndex, startIndex + 4);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-orange-500 uppercase tracking-wider text-sm font-semibold mb-3">
              LEARN FROM THE BEST
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              DJs and their courses
            </h2>
          </div>
        </div>

        {/* DJ Cards Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleDJs().map((dj) => (
              <div
                key={dj.id}
                className="group cursor-pointer"
              >
                {/* DJ Card */}
                <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105">
                  {/* DJ Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={dj.image}
                      alt={dj.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* DJ Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {dj.name}
                      </h3>
                      <p className="text-orange-200 font-semibold drop-shadow">
                        {dj.lessons} lessons
                      </p>
                      {dj.specialty && (
                        <p className="text-white/80 text-sm mt-1 drop-shadow">
                          {dj.specialty}
                        </p>
                      )}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
                    <div className="absolute top-6 right-16 w-4 h-4 bg-orange-300/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-orange-500/25 border border-orange-500/30"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-black/50 backdrop-blur-sm hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-orange-500/25 border border-orange-500/30"
            disabled={currentSlide >= Math.ceil(djs.length / 4) - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(djs.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-orange-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DJInstructors;
