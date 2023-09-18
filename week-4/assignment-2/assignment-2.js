function ajax(src, callback) {
  fetch(src)
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch((err) => console.log(err.message));
}

function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  console.log(data);
  data.forEach((el) => {
    const card = document.createElement("ul");

    for (let key in el) {
      const list = document.createElement("li");

      list.textContent = `${key}: ${el[key]}`;
      card.appendChild(list);
    }
    document.querySelector("body").appendChild(card);
  });
}

ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render sdata in the page
