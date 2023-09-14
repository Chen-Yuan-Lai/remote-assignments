const calcuForm = document.querySelector('.input-form');
const ans = document.querySelector('.ans');

function ajax(url) {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      ans.textContent = `Ans: ${this.responseText}`;
    }
  };

  xhttp.open('GET', url, true);
  xhttp.send();
}

async function fet(url) {
  const response = await fetch(url);
  const sum = await response.json();

  ans.textContent = `Ans: ${sum}`;
}

calcuForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const num = document.getElementById('integer').value;
  const url = `http://localhost:3000/data?number=${num}`;

  // ajax(url)

  fet(url);
});
