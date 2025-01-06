// hooks/useAuth.ts
import { useState, useEffect } from 'react';
import UserService from "../services/UserService";
import { IUser } from '../interfaces';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const checkAuthAndFirstTime = async () => {
      try {
        const user = await UserService.getUser();
        setUser(user);
      } catch (error) {
        console.error('Error checking user status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthAndFirstTime();
  }, []);

  return {user, isLoading };
}
