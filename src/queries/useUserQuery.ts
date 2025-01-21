import { useState } from 'react';
import UserRepository from '../repositories/UserRepository';
import { CreateUserDto } from '@/Dto/UserDto';

// Custom Hook: useUserQuery
const useUserQuery = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Function to create a new user
    const create = async (user: CreateUserDto) => {
        setLoading(true);
        setError(null); 

        try {
            const result = await UserRepository.insertOrUpdate(user);
            setLoading(false);
            return result;
        } catch (error) {
            console.error('Insert Error:', error);
            setError('Error creating user');
            setLoading(false);
            return null;
        }
    };

    return {
        loading,
        error,
        create,
    };
};

export default useUserQuery;
