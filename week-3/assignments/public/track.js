const form = document.querySelector('.input-form');

const myNameUrl = 'http://localhost:3000/myName';

function ajax(url) {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      window.location.href = myNameUrl;
    }
  };

  xhttp.open('GET', url, true);
  xhttp.send();
}

async function fet(url) {
  const response = await fetch(url);

  window.location.href = myNameUrl;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const url = `http://localhost:3000/trackName?name=${name}`;

  // ajax(url);

  fet(url);
});
