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

async function fetchPosts(url) {
  const response = await fetch(url);
  return await response.json();
}

async function insertPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const posts = await fetchPosts(url);

  const insertPostsPromise = posts.map(async (el) => {
    const author = Math.floor(Math.random() * 3 + 1);

    await pool.query(
      `
      INSERT INTO article (author, title, content)
      VALUES(?, ?, ?)
      `,
      [author, el.title, el.body]
    );
  });

  await Promise.all(insertPostsPromise);
  pool.end();
  console.log("Complete");
}

insertPosts();
