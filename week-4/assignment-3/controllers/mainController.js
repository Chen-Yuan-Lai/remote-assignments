import mysql from "mysql2";
import dotenv from "dotenv";
import { AppError } from "../util/appError.js";

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

async function getOneUser(req, res, next) {
  try {
    const { email } = req.body;

    const [row] = await pool.query(
      `
      SELECT * 
      FROM user 
      WHERE email= ?
      `,
      [email]
    );

    if (!row.length) {
      return next(new AppError("No user found with that email", 404));
    }

    res.status(201).json({
      status: "success",
      data: row,
    });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const data = req.body;

    await pool.query(
      `
    INSERT INTO user (email, password)
    VALUES (?, ?)
    `,
      [data.email, data.password]
    );

    res.status(201).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
}

export default { getOneUser, createUser };
