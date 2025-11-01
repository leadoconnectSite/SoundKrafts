import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  // Trigger entrance animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await signup(name, email, password);
      if (success) {
        navigate('/profile');
      } else {
        setError('Failed to create account');
      }
    } catch (err) {
      setError('An error occurred during signup');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed Background - Matching Hero page */}
      <div className="fixed inset-0 bg-black -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[150px]"></div>
      </div>
      <style jsx>{`
        /* Hero-matching entrance animation */
        .auth-entrance {
          opacity: 0;
          transform: translateY(-50px);
          transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .auth-entrance.loaded {
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
        
        .stagger-3 {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          transition-delay: 0.6s;
        }
        
        .loaded .stagger-1,
        .loaded .stagger-2,
        .loaded .stagger-3 {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Main container with Hero-style background */
        .auth-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
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
        
        /* Logo/Brand styling matching Hero */
        .brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .brand-logo:hover {
          transform: translateY(-4px);
        }
        
        .brand-text {
          font-size: 2rem;
          font-weight: 800;
          color: #ff8c42;
          text-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
        }
        
        /* Icon wrapper matching Hero style */
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 107, 53, 0.2);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          margin: 0 auto 2rem;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, border-color, box-shadow;
          transform: translateZ(0);
        }
        
        .icon-wrapper:hover {
          transform: translateY(-4px) rotate(8deg) translateZ(0);
          border-color: rgba(255, 107, 53, 0.6);
          box-shadow: 0 12px 24px rgba(255, 107, 53, 0.25);
        }
        
        /* Main form container with Hero-style glass effect */
        .auth-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 450px;
          margin: 0 auto;
        }
        
        .auth-form {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          margin-bottom: 1.5rem;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Typography matching Hero */
        .auth-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          color: #ffffff;
          text-align: center;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .auth-subtitle {
          font-size: 1.1rem;
          color: #cbd5e1;
          text-align: center;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        /* Input styling matching Hero theme */
        .input-group {
          position: relative;
          margin-bottom: 1.5rem;
        }
        
        .input-field {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px 20px 16px 50px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          outline: none;
          will-change: border-color, background, box-shadow;
        }
        
        .input-field::placeholder {
          color: #94a3b8;
        }
        
        .input-field:focus {
          border-color: rgba(255, 107, 53, 0.5);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }
        
        .input-field.error {
          border-color: rgba(239, 68, 68, 0.5);
          background: rgba(239, 68, 68, 0.05);
        }
        
        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          transition: color 0.3s ease;
        }
        
        .input-field:focus + .input-icon {
          color: #ff8c42;
        }
        
        .password-toggle {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        
        .password-toggle:hover {
          color: #ff8c42;
        }
        
        /* Error styling matching Hero theme */
        .error-alert {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 12px;
          color: #fca5a5;
          padding: 16px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
        }
        
        /* Button styling exactly matching Hero */
        .submit-btn {
          width: 100%;
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
          position: relative;
          overflow: hidden;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform, box-shadow, background;
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .submit-btn:not(:disabled):hover {
          transform: perspective(1000px) rotateX(-10deg) translateY(-3px) translateZ(0);
          box-shadow: 0 25px 50px -10px rgba(249, 115, 22, 0.4),
                      0 20px 30px -5px rgba(249, 115, 22, 0.1);
          background: linear-gradient(45deg, #ea580c, #f97316);
        }
        
        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .submit-btn:hover::before {
          left: 100%;
        }
        
        .submit-btn:active {
          transform: perspective(1000px) rotateX(0deg) translateY(0px) translateZ(0);
          transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Links styling */
        .auth-links {
          text-align: center;
        }
        
        .auth-link {
          color: #ff8c42;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .auth-link:hover {
          color: #ff6b35;
          transform: translateY(-1px);
        }
        
        .signin-text {
          color: #cbd5e1;
          font-size: 0.9rem;
        }
        
        /* Loading spinner matching Hero style */
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #ffffff;
          animation: spin 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          margin-right: 8px;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Responsive design */
        @media (max-width: 640px) {
          .auth-form {
            padding: 2rem 1.5rem;
          }
          
          .auth-title {
            font-size: 2rem;
          }
          
          .input-field {
            padding: 14px 18px 14px 45px;
          }
        }
      `}</style>

      <div className={`auth-section auth-entrance ${isLoaded ? 'loaded' : ''}`}>
        <div className="auth-container">
          {/* Brand Logo */}
          <Link to="/" className={`brand-logo stagger-1`}>
            <span className="brand-text gradient-text">SoundKraft</span>
          </Link>
          
          {/* Icon */}
          <div className={`icon-wrapper stagger-1`}>
            <User className="w-6 h-6 text-orange-400" />
          </div>
          
          {/* Form Container */}
          <div className={`auth-form stagger-2`}>
            <h1 className="auth-title gradient-text">Join the Community</h1>
            <p className="auth-subtitle">Create your account and start your musical journey</p>
            
            {error && (
              <div className="error-alert">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className={`input-field ${error ? 'error' : ''}`}
                  required
                />
                <User className="input-icon w-5 h-5" />
              </div>
              
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`input-field ${error ? 'error' : ''}`}
                  required
                />
                <Mail className="input-icon w-5 h-5" />
              </div>
              
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create password (min. 8 characters)"
                  className={`input-field ${error ? 'error' : ''}`}
                  required
                />
                <Lock className="input-icon w-5 h-5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              <div className="input-group">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  className={`input-field ${error ? 'error' : ''}`}
                  required
                />
                <Lock className="input-icon w-5 h-5" />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="password-toggle"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="submit-btn"
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Links */}
          <div className={`auth-links stagger-3`}>
            <p className="signin-text">
              Already have an account?{' '}
              <Link to="/signin" className="auth-link">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;