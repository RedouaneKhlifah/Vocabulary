import db from '../config/db';

// Prepare the statement for inserting data into the test table
const insert = await db.prepareAsync(
  'INSERT INTO user (name, howDidYouHear, ageGroup) VALUES ($name, $howDidYouHear, $ageGroup)'
);




const UserRepository = {
    insert,
};

export default UserRepository