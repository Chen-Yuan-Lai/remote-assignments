/* select all articles with their author’s email */
SELECT title, content, email
FROM article
LEFT OUTER JOIN user ON article.author=user.id;

/* select articles from 7th to 12th sorted by id */
SELECT article.id, email, title
FROM user
INNER JOIN article ON user.id=article.author
ORDER BY id
LIMIT 6, 6;
