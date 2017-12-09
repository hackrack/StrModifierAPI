document.addEventListener('DOMContentLoaded', () => {

  var input = document.querySelector("input");
  var upper = document.getElementById("upper");
  var lower = document.getElementById("lower");
  var length = document.getElementById("length");
  var reverse = document.getElementById("reverse");
  let modP = document.querySelector('#modP');
  let nullB = document.querySelector('#nullB');

  upper.addEventListener('click', (event) => {
      var request = new XMLHttpRequest();
      request.open("GET", `http://localhost:3000/upper/${input.value}`, true);
      request.send();
      request.addEventListener("load", function() {
        var jFile = JSON.parse(request.responseText);
        modP.innerText = jFile.result;
    })
  });

  lower.addEventListener('click', (event) => {
      var request = new XMLHttpRequest();
      request.open("GET", `http://localhost:3000/lower/${input.value}`);
      request.send();
      request.addEventListener("load", function() {
        var jFile = JSON.parse(request.responseText);
        modP.innerText = jFile.result;
    })
  });

  length.addEventListener('click', (event) => {
      var request = new XMLHttpRequest();
      request.open("GET", `http://localhost:3000/length/${input.value}`);
      request.send();
      request.addEventListener("load", function() {
        var jFile = JSON.parse(request.responseText);
        modP.innerText = jFile.result;
    })
  });

  reverse.addEventListener('click', (event) => {
      var request = new XMLHttpRequest();
      request.open("GET", `http://localhost:3000/reverse/${input.value}`);
      request.send();
      request.addEventListener("load", function() {
        var jFile = JSON.parse(request.responseText);
        modP.innerText = jFile.result;
    })
  })
})
