const e = require('express');

exports.main = function (req, res) {
  res.send('Hello, My Server!');
};

exports.getSum = function (req, res) {
  const num = +req.query.number;

  if (isNaN(num)) {
    res.send(`Wrong Parameter`);
  } else if (num === 0) {
    res.send('0');
  } else {
    res.send(`${(num * (num + 1)) / 2}`);
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
