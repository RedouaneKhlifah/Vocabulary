import getDatabase from "@/config/db";
import { CreateUserDto } from "@/Dto/UserDto";
import { IUser } from "@/interfaces";

const insertOrUpdate = async (user: CreateUserDto): Promise<boolean> => {
  const { name, howDidYouHear, ageGroup } = user;

  console.log('User: ------------------------ ', user);

  try {
    const db = await getDatabase();

    // Check if the user already exists (there should only be one user in the database)
    const existingUser = await db.getFirstAsync(
      'SELECT * FROM user where id = 1'
    ) as IUser | null;

    if (existingUser) {
      console.log('User already exists:', existingUser);
      // If the user exists, update the existing record
      await db.runAsync(
        'UPDATE user SET name = ?, howDidYouHear = ?, ageGroup = ? WHERE id = ?',
        [name, howDidYouHear, ageGroup, 1]
      );
      const afterUser = await db.getFirstAsync(
        'SELECT * FROM user'
      ) as IUser | null;

      console.log('User updated---------------------------:', afterUser);

    } else {
      // If the user does not exist, insert the user
      await db.runAsync(
        'INSERT INTO user (name, howDidYouHear, ageGroup) VALUES (?, ?, ?)',
        [name, howDidYouHear, ageGroup]
      );
    }

    return true;
  } catch (error) {
    console.error('Database Insert/Update Error:', error);
    return false;
  }
};



const get = async (): Promise<IUser | null> => {
  try {
    const db = await getDatabase()
    return await db.getFirstAsync('SELECT * FROM user where id = 1') as IUser | null;
  } catch (error) {
    console.error('Database Error:', error);
    throw error;
  }
};

const UserRepository = {
  insertOrUpdate,
  get,
};

export default UserRepository;
