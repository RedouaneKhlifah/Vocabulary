
import UserRepository from '../repositories/UserRepository';
import { IUser } from '../interfaces';
import { CreateUserDto } from '@/Dto/UserDto';
const create = async (user: CreateUserDto) => {
    try {
        const result = await UserRepository.insertOrUpdate(user);
        return result;
    } catch (error) {
        console.error('Insert Error:', error);
        return null;
    }
}



export const getUser = async (): Promise<IUser | null> => {
    try {
      const result = await UserRepository.get();
      if (!result) {
        return null;
      }
      return result;
    } catch (error) {
      console.error('Insert Error:', error);
      return null;
    }
  };
 const  UserService = {
    create,
    getUser,
};

export default UserService;