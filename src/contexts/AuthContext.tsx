
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";

// Define user types
export type UserRole = 'startup' | 'investor';

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, email: string, password: string, role: UserRole, name: string) => Promise<void>;
}

// Mock users for frontend testing
const MOCK_USERS = [
  {
    id: '1',
    username: 'muser',
    password: 'muser',
    name: 'Mock Startup',
    email: 'startup@example.com',
    role: 'startup' as UserRole,
  },
  {
    id: '2',
    username: 'mvc',
    password: 'mvc',
    name: 'Mock VC Investor',
    email: 'investor@example.com',
    role: 'investor' as UserRole,
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    
    try {
      // First check mock users (for frontend testing)
      const mockUser = MOCK_USERS.find(
        (u) => u.username === username && u.password === password
      );

      if (mockUser) {
        // Create user object without password
        const { password, ...userWithoutPassword } = mockUser;
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        toast({
          title: "Success",
          description: "Logged in successfully with mock user",
        });
        return;
      }

      // If no mock user, try backend (would implement API call here)
      toast({
        title: "Error",
        description: "Invalid credentials. (For testing, use muser/muser or mvc/mvc)",
        variant: "destructive",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Login failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: "Success",
      description: "Logged out successfully",
    });
  };

  const register = async (username: string, email: string, password: string, role: UserRole, name: string) => {
    setIsLoading(true);
    
    try {
      // Mock registration - in a real app this would call an API
      // Check if username already exists in mock users
      if (MOCK_USERS.some(u => u.username === username)) {
        throw new Error("Username already taken");
      }
      
      toast({
        title: "Success",
        description: "Registration successful. Please log in.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Registration failed",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
