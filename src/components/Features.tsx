import { 
    GraduationCap, 
    Music, 
    Video, 
    Target, 
    Users, 
    Award 
  } from 'lucide-react';
  
  interface Feature {
    id: number;
    title: string;
    description: string;
    icon: any;
  }
  
  const Features = () => {
    const features: Feature[] = [
      {
        id: 1,
        title: "More than 600+ lessons",
        description: "Learn from industry professionals and Tomorrowland artists through step by step in-depth courses for beginners and pros.",
        icon: GraduationCap,
      },
      {
        id: 2,
        title: "The best online tools",
        description: "Download learning materials, guides, samples & project files to upgrade your learning experience.",
        icon: Music,
      },
      {
        id: 3,
        title: "Schedule livestreams",
        description: "Submit your demos or mixes and receive feedback from professionals during feedback and Q&A livestreams.",
        icon: Video,
      },
      {
        id: 4,
        title: "Talent radar",
        description: "Grab countless opportunities to get discovered. Join remix competitions, DJ contests and earn your spot on the talent radar.",
        icon: Target,
      },
      {
        id: 5,
        title: "Join the community",
        description: "Join students from all over the world in the Tomorrowland Academy WhatsApp community.",
        icon: Users,
      },
      {
        id: 6,
        title: "Tomorrowland",
        description: "Supported and trusted by Tomorrowland.",
        icon: Award,
      }
    ];
  
    return (
      <>
        {/* Hero button effects with smaller padding for START NOW button */}
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
            padding: 10px 20px;  /* Smaller padding - was 16px 32px */
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
            {/* Large container with increased corner radius */}
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-orange-500/20 shadow-2xl overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-400/5 rounded-full blur-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header Section - decreased height */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-orange-500 uppercase tracking-wider text-sm font-semibold mb-2">
                      WHAT YOU GET
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                      What's included in a subscription?
                    </h2>
                  </div>
                  {/* Smaller button with same 3D effect */}
                  <button className="btn-primary-compact">
                    START NOW
                  </button>
                </div>
  
                {/* Features Grid - reduced spacing and height */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {features.map((feature) => (
                    <div key={feature.id} className="group">
                      {/* Icon - smaller spacing */}
                      <div className="mb-4">
                        <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300">
                          <feature.icon className="w-7 h-7 text-orange-500" />
                        </div>
                      </div>
  
                      {/* Content - tighter spacing */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
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
  
  export default Features;
  