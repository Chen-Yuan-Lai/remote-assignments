/* select all articles with their author’s email */
SELECT email, title, content
FROM user
INNER JOIN article ON user.id=article.author;

/* select articles from 7th to 12th sorted by id */
SELECT article.id, email, title
FROM user
INNER JOIN article ON user.id=article.author
ORDER BY id
LIMIT 6, 6;
