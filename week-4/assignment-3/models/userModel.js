import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// connection database
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function getOneUser(data) {
  try {
    console.log(data);
    const [row] = await pool.query(
      `
      SELECT *
      FROM user
      WHERE email= ?
      AND password= ?
      `,
      [data.email, data.password]
    );

    return row;
  } catch (error) {
    throw error;
  }
}

async function createUser(data) {
  try {
    await pool.query(
      `
    INSERT INTO user (email, password)
    VALUES (?, ?)
    `,
      [data.email, data.password]
    );
  } catch (error) {
    throw error;
  }
}

export default { getOneUser, createUser };
