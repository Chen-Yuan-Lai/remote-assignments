const calcuForm = document.querySelector('.input-form');

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const ans = document.querySelector('.ans');
    ans.textContent = `Ans: ${this.responseText}`;
  }
};

calcuForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const num = document.getElementById('integer').value;
  const url = `http://localhost:3000/data?number=${num}`;
  xhttp.open('GET', url, true);
  xhttp.send();
});
