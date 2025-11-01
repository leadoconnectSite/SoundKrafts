import { useState } from 'react';
import { Sparkles, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'bootcamp', label: 'Bootcamp' },
    { id: 'faq', label: 'FAQ' }
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Add the 3D button effect styles */}
      <style>{`
        .btn-3d-navbar {
          position: relative;
          overflow: hidden;
          background: linear-gradient(45deg, #f97316, #fb923c);
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: perspective(1000px) rotateX(0deg);
          box-shadow: 0 8px 20px -4px rgba(249, 115, 22, 0.4),
                      0 4px 8px -2px rgba(249, 115, 22, 0.1);
        }
        
        .profile-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 0.5rem;
          width: 200px;
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          z-index: 50;
          overflow: hidden;
        }

        .btn-3d-navbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease-in-out;
        }

        .btn-3d-navbar:hover {
          transform: perspective(1000px) rotateX(-8deg) translateY(-1px);
          box-shadow: 0 15px 30px -6px rgba(249, 115, 22, 0.5),
                      0 8px 15px -3px rgba(249, 115, 22, 0.2);
          background: linear-gradient(45deg, #ea580c, #f97316);
        }

        .btn-3d-navbar:hover::before {
          left: 100%;
        }

        .btn-3d-navbar:active {
          transform: perspective(1000px) rotateX(0deg) translateY(0px);
          transition: transform 0.1s ease;
        }

        /* Mobile version with slightly reduced effect */
        @media (max-width: 768px) {
          .btn-3d-navbar:hover {
            transform: perspective(1000px) rotateX(-5deg) translateY(-1px);
          }
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                SoundKraft Academy
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-orange-500' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {isAuthenticated ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white"
                  >
                    {user?.name ? user.name.charAt(0).toUpperCase() : <User size={20} />}
                  </button>
                  
                  {isProfileMenuOpen && (
                    <div className="profile-dropdown">
                      <div className="p-4 border-b border-gray-700">
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-sm text-gray-400">{user?.email}</p>
                      </div>
                      <div className="p-2">
                        <Link 
                          to="/profile" 
                          className="block px-4 py-2 text-sm hover:bg-gray-700 rounded-md"
                          onClick={() => setIsProfileMenuOpen(false)}
                        >
                          My Profile
                        </Link>
                        <button 
                          onClick={() => {
                            logout();
                            setIsProfileMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 rounded-md"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/signin" className="btn-3d-navbar px-5 py-2 flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>Get Started</span>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-orange-500/20 z-50">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left capitalize text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/profile" 
                    className="block w-full text-left text-gray-300 hover:text-orange-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left text-red-400 hover:text-orange-400 transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link to="/signin" className="btn-3d-navbar w-full px-6 py-2 text-center" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
