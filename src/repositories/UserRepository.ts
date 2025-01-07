import db from "../config/db";

// Prepare the statement for inserting data into the test table
const insert = await db.prepareAsync(
  'INSERT INTO user (name, howDidYouHear, ageGroup) VALUES ($name, $howDidYouHear, $ageGroup)'
);

const get = await db.prepareAsync('SELECT * FROM user LIMIT 1');

const UserRepository = {
    insert,
    get
};

export default UserRepository