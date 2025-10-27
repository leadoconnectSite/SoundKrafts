import { Trophy, Music, Sparkles } from 'lucide-react';

const Bootcamp = () => {
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

  return (
    <>
      {/* SCOPED CSS - Only affects buttons in this Bootcamp component */}
      <style jsx>{`
        /* SCOPED 3D EFFECT FOR BOOTCAMP "APPLY TODAY" BUTTON */
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
          transform: perspective(1000px) rotateX(0deg);
          box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.3),
                      0 10px 10px -5px rgba(249, 115, 22, 0.04);
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
          transform: perspective(1000px) rotateX(-10deg) translateY(-2px);
          box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4),
                      0 15px 25px -5px rgba(249, 115, 22, 0.1);
          background: linear-gradient(45deg, #ea580c, #f97316);
        }

        .bootcamp-btn-primary-compact:hover::before {
          left: 100%;
        }

        .bootcamp-btn-primary-compact:active {
          transform: perspective(1000px) rotateX(0deg) translateY(0px);
          transition: transform 0.1s ease;
        }

        /* Responsive adjustments for bootcamp button */
        @media (max-width: 640px) {
          .bootcamp-btn-primary-compact {
            font-size: 1rem;
            padding: 12px 28px;
          }
        }

        @media (max-width: 480px) {
          .bootcamp-btn-primary-compact {
            font-size: 0.95rem;
            padding: 10px 24px;
          }
        }
      `}</style>

      <section id="bootcamp" className="min-h-screen py-20 px-4 flex items-center">
        <div className="max-w-5xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-orange-500/30 shadow-[0_0_40px_rgba(249,115,22,0.2)]">
            <div className="text-center mb-8">
              <Trophy className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                6-Week DJ Performance Bootcamp
              </h2>
              <p className="text-xl text-gray-300">
                Transform from beginner to stage-ready performer
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              {bootcampFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-orange-500/10 rounded-xl border border-orange-500/30"
                >
                  <feature.icon className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2 text-orange-400">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              {/* Updated button with 3D effect */}
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
