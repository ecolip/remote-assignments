const username = document.getElementById('user');
const password = document.getElementById('password');
const submit = document.getElementById('track-submit');

submit.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  let name = username.value.trim();
  let pass = password.value.trim();
  if (name.length > 0 && pass.length > 0) {
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
      }
    };
    xhr.open('GET', `http://localhost:3000/trackName?name=${name}`);
    xhr.send();
  }
})