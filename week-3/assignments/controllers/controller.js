const e = require('express');

exports.main = function (req, res) {
  res.send('Hello, My Server!');
};

exports.getSum = function (req, res) {
  let num = req.query.number;

  if (num === undefined) {
    res.send(`Lack pf Parameter`);
  } else if (isNaN(+num)) {
    res.send(`Wrong Parameter`);
  } else {
    num = +num;
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
