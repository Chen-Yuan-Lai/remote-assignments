const form = document.querySelector('.input-form');

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    window.location.href = 'http://localhost:3000/myName';
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  console.log(name);
  const url = `http://localhost:3000/trackName?name=${name}`;
  xhttp.open('GET', url, true);
  xhttp.send();
});
