const e = require('express');

exports.main = function (req, res) {
  res.send('Hello, My Server!');
};

exports.getSum = function (req, res) {
  let num = req.query.number;

  if (num === '') {
    res.send('Lack of Parameter');
    return;
  } else {
    num = +num;

    if (isNaN(num) || num < 0) {
      res.send('Wrong Parameter');
    } else {
      res.send(`${(num * (num + 1)) / 2}`);
    }
  }
};

exports.getCookie = function (req, res) {
  const userName = req.cookies.name;
  console.error(userName);
  if (userName) {
    res.render('name', { name: userName });
    return;
  }

  res.render('track');
};

exports.setCookie = function (req, res) {
  const trackName = req.query.name;

  res.cookie('name', trackName);
  res.send();
};
