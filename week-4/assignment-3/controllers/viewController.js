function homePage(req, res) {
  res.render("index");
}

function member(req, res) {
  res.render("member");
}

export default { homePage, member };
