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
