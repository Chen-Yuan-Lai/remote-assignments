const banner = document.querySelector(".banner");
const actionBtn = document.querySelector(".button");
const hiddenBox = document.querySelectorAll(".hide");

banner.addEventListener("click", function (e) {
  this.innerHTML = "<h1>Have a Good Time!</h1>";
});

actionBtn.addEventListener("click", function (e) {
  hiddenBox.forEach((el) => el.classList.remove("hide"));
});
