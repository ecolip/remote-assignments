//Assignment 1: Callback Function
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(
    () => { callback(n1 + n2); }
    , delayTime);
}
// 9 (4+5) will be shown in the console after 3 seconds
delayedResult(4, 5, 3000, console.log);

// 5 (-5+10) will be shown in an alert dialog after 2 seconds
delayedResult(-5, 10, 2000, window.alert);

// Assignment 2: Callback Function and Advanced HTML DOM
function ajax(src, callback) {
  fetch(src).then(callback);
}

function render(data) {
  data.json().then(results => {
    results.map(result => {
      const element = document.createElement('li');
      element.innerText = `name: ${result.name}, price: ${result.price}, description: ${result.description}`;
      document.getElementById("result").appendChild(element);
    })
  })
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (res) {
    render(res);
  }
); // you should get product information in JSON format and render data in the page