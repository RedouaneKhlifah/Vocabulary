
import UserRepository from '../repositories/UserRepository';
import { IUser } from '../interfaces';
const create = async (user: IUser) => {
    const { name, howDidYouHear, ageGroup } = user

    try {
        const result = await UserRepository.insert.executeAsync({
            $name: name,
            $howDidYouHear: howDidYouHear,
            $ageGroup: ageGroup
        });
        return result;
    } catch (error) {
        console.log('Insert Error:', error);
        return null;
    }
}



const getUser = async () : Promise<IUser | null> => {
    try {
        const result = await UserRepository.get.executeAsync() as unknown as IUser[];
        const user = result[0];
        if(!user) {
            return null;
        }
        return user;
        
    } catch (error) {
        console.log('Insert Error:', error);
        return null;
    }
}

 const  UserService = {
    create,
    getUser,
};

export default UserService;