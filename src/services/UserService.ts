
import UserRepository from '../repositories/userRepository';
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