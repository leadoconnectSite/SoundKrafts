interface PricingPlan {
    name: string;
    price: string;
    period: string;
    features: string[];
    popular?: boolean;
  }
  
  const Pricing = () => {
    const pricingPlans: PricingPlan[] = [
      {
        name: 'Starter',
        price: '$29',
        period: '/month',
        features: [
          'Access to basic lessons',
          'Community forum access',
          'Monthly newsletter',
          'Course certificates'
        ]
      },
      {
        name: 'Pro',
        price: '$59',
        period: '/month',
        features: [
          'All courses included',
          'Weekly mentorship sessions',
          'Exclusive masterclasses',
          'Priority support',
          'Downloadable resources'
        ],
        popular: true
      },
      {
        name: 'Superstar',
        price: '$129',
        period: '/month',
        features: [
          'Everything in Pro',
          '1-on-1 coaching sessions',
          'DJ contest participation',
          'Industry networking events',
          'Career placement support'
        ]
      }
    ];
  
    return (
      <>
        {/* SCOPED CSS with button alignment fixes */}
        <style jsx>{`
          /* CARD ALIGNMENT STYLES */
          .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            align-items: stretch;
          }
          
          .pricing-card {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          
          .card-content {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          .features-list {
            flex-grow: 1;
            margin-bottom: 2rem;
          }
          
          .button-container {
            margin-top: auto;
          }
  
          /* SCOPED 3D EFFECT FOR PRO PLAN BUTTON */
          .pricing-btn-primary-compact {
            position: relative;
            overflow: hidden;
            background: linear-gradient(45deg, #f97316, #fb923c);
            border: none;
            border-radius: 12px;
            color: white;
            font-weight: 600;
            font-size: 1rem;
            padding: 12px 24px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform: perspective(1000px) rotateX(0deg);
            box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.3),
                        0 10px 10px -5px rgba(249, 115, 22, 0.04);
            width: 100%;
          }
  
          .pricing-btn-primary-compact::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease-in-out;
          }
  
          .pricing-btn-primary-compact:hover {
            transform: perspective(1000px) rotateX(-10deg) translateY(-2px);
            box-shadow: 0 20px 40px -10px rgba(249, 115, 22, 0.4),
                        0 15px 25px -5px rgba(249, 115, 22, 0.1);
            background: linear-gradient(45deg, #ea580c, #f97316);
          }
  
          .pricing-btn-primary-compact:hover::before {
            left: 100%;
          }
  
          .pricing-btn-primary-compact:active {
            transform: perspective(1000px) rotateX(0deg) translateY(0px);
            transition: transform 0.1s ease;
          }
  
          /* EXACT "EXPLORE COURSES" BUTTON EFFECT FOR STARTER & SUPERSTAR */
          .pricing-btn-secondary {
            position: relative;
            background: transparent;
            border: 2px solid transparent;
            border-radius: 12px;
            color: #f97316;
            font-weight: 600;
            font-size: 1rem;
            padding: 12px 24px;
            cursor: pointer;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
            background-clip: padding-box;
            width: 100%;
          }
  
          .pricing-btn-secondary::before {
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
            animation: pricing-gradientShift 3s ease infinite;
          }
  
          .pricing-btn-secondary::after {
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
  
          .pricing-btn-secondary:hover {
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 15px 30px -5px rgba(249, 115, 22, 0.3);
          }
  
          .pricing-btn-secondary:hover::after {
            background: transparent;
          }
  
          /* SCOPED KEYFRAME ANIMATION */
          @keyframes pricing-gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
  
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .pricing-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
          }
  
          @media (max-width: 640px) {
            .pricing-btn-primary-compact,
            .pricing-btn-secondary {
              font-size: 0.9rem;
              padding: 10px 20px;
            }
          }
  
          @media (max-width: 480px) {
            .pricing-btn-primary-compact,
            .pricing-btn-secondary {
              font-size: 0.85rem;
              padding: 8px 16px;
            }
          }
        `}</style>
  
        <section id="pricing" className="min-h-screen py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Pricing Plans
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              Flexible plans to match your learning goals
            </p>
  
            {/* Updated grid with alignment classes */}
            <div className="pricing-grid">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`pricing-card relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border ${
                    plan.popular
                      ? 'border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.4)]'
                      : 'border-orange-500/30 hover:border-orange-500/60'
                  } transition-all`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  )}
  
                  <div className="card-content">
                    <h3 className="text-2xl font-bold mb-2 text-orange-400">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
  
                    <ul className="features-list space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-orange-500 mr-2">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
  
                    {/* Button container that stays at bottom */}
                    <div className="button-container">
                      <button
                        className={
                          plan.popular 
                            ? "pricing-btn-primary-compact"
                            : "pricing-btn-secondary"
                        }
                      >
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Pricing;
  