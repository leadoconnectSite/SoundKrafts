import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define user type
interface User {
  id: string;
  name: string;
  email: string;
  purchasedCourses: Course[];
}

interface Course {
  id: string;
  title: string;
  progress: number;
}

// Define context type
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
});

// Sample courses data
const sampleCourses = [
  { id: '1', title: 'DJ Fundamentals', progress: 60 },
  { id: '2', title: 'Music Production Basics', progress: 30 },
];

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('soundkrafts_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Login function - in a real app, this would call an API
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // For demo purposes, any non-empty email/password works
    if (email && password) {
      const newUser = {
        id: '1',
        name: email.split('@')[0],
        email,
        purchasedCourses: sampleCourses,
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('soundkrafts_user', JSON.stringify(newUser));
      return true;
    }
    
    return false;
  };

  // Signup function - in a real app, this would call an API
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // For demo purposes, any non-empty values work
    if (name && email && password) {
      const newUser = {
        id: '1',
        name,
        email,
        purchasedCourses: [],
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('soundkrafts_user', JSON.stringify(newUser));
      return true;
    }
    
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('soundkrafts_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);