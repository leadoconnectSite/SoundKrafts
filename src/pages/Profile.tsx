import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger entrance animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, [isAuthenticated, navigate]);

  // Mock function for navbar
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      navigate('/');
    }
  };

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed Background - Matching Hero page */}
      <div className="fixed inset-0 bg-black -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[150px]"></div>
      </div>
      <style jsx>{`
        /* Hero-matching entrance animation */
        .profile-entrance {
          opacity: 0;
          transform: translateY(-50px);
          transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .profile-entrance.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Staggered animation for child elements */
        .stagger-1 {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          transition-delay: 0.2s;
        }
        
        .stagger-2 {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          transition-delay: 0.4s;
        }
        
        .loaded .stagger-1,
        .loaded .stagger-2 {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Main container with Hero-style background */
        .profile-section {
          position: relative;
          min-height: 100vh;
          padding: 2rem 1rem;
          overflow: hidden;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          will-change: transform;
          transform: translateZ(0);
        }
        
        /* Enhanced gradient text matching Hero */
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
      `}</style>
      
      <div className="profile-section">
        <Navbar activeSection="" scrollToSection={scrollToSection} />
        
        <div className={`profile-entrance ${isLoaded ? 'loaded' : ''}`}>
          <div className="container mx-auto px-4 py-12 mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Profile Avatar */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-4xl font-bold stagger-1">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  
                  {/* User Info */}
                  <div className="flex-1 stagger-2">
                    <h1 className="text-3xl font-bold mb-2 gradient-text">{user.name}</h1>
                    <p className="text-gray-300 mb-6">{user.email}</p>
                    
                    <button 
                      onClick={logout}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl text-white font-semibold transition transform hover:-translate-y-1 shadow-lg"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
                
                {/* Purchased Courses Section */}
                <div className="mt-10 stagger-2">
                  <h2 className="text-2xl font-bold mb-6 gradient-text">Your Purchased Courses</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {user.purchasedCourses && user.purchasedCourses.length > 0 ? (
                      user.purchasedCourses.map((course) => (
                        <div key={course.id} className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                          <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                          <p className="text-gray-300 mb-4">{course.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-orange-400 font-semibold">{course.progress}% Complete</span>
                            <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-lg text-white font-medium text-sm transition">
                              Continue Learning
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-8 text-center">
                        <p className="text-gray-300 mb-4">You haven't purchased any courses yet.</p>
                        <button 
                          onClick={() => navigate('/')}
                          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl text-white font-semibold transition transform hover:-translate-y-1 shadow-lg"
                        >
                          Browse Courses
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
