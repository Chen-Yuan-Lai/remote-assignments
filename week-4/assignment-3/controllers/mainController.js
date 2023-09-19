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

async function getUser(email) {
  const [rows] = await pool.query(
    `
    SELECT * 
    FROM user 
    WHERE email= ?
    `,
    [email]
  );

  return rows[0];
}

async function createUser(email, password) {
  await pool.query(
    `
    INSERT INTO user (email, password)
    VALUES (?, ?)
    `,
    [email, password]
  );
}

function homePage(req, res) {
  res.render("index");
}

function member(req, res) {
  res.render("member");
}

async function signUp(req, res) {
  try {
    const { email, password } = req.body;
    let status;
    let description;

    if (email === "" || password === "") {
      status = "fail";
      description = "email or password can't be empty";
    } else {
      const result = await getUser(email);

      console.log(result);

      // account not exist in the database
      if (result === undefined) {
        // create new user in the database
        await createUser(email, password);
        status = "success";
        description = "create a new user";
      } else {
        status = "fail";
        description = "This user has already exsited";
      }
    }

    res.status(201).json({
      status,
      description,
    });
  } catch (error) {
    console.error(error.message);
  }
}

async function signIn(req, res) {
  try {
    const { email, password } = req.body;
    let status;
    let description;

    if (email === "" || password === "") {
      status = "fail";
      description = "email or password can't be empty";
    } else {
      const result = await getUser(email);

      if (result === undefined) {
        // create new user in the database
        status = "fail";
        description = "Not found, please signing up";
      } else {
        status = "success";
        description = "sign-in successfully!";
      }
    }

    res.status(201).json({
      status,
      description,
    });
  } catch (error) {
    console.error(error.message);
  }
}

export default { homePage, signUp, signIn, member };
