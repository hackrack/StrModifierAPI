const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send(homepage);
});

app.get(`/upper/:str`, (req, res) => {
  res.json({
    oldStr: req.params.str,
    result: req.params.str.toUpperCase()
  });
});

app.get(`/lower/:str`, (req, res) => {
  res.json({
    oldStr: req.params.str,
    result: req.params.str.toLowerCase()
  })
});

app.get(`/length/:str`, (req, res) => {
  res.json({
    oldStr: req.params.str,
    result: req.params.str.length
  });
});

app.get(`/reverse/:str`, (req, res) => {
  res.json({
    oldStr: req.params.str,
    result: req.params.str.split("").reverse().join("")
  });
});


app.listen(port, () => {
  console.log(`running on port ${port}`);
});

const homepage = `
<html>
  <head>
    <title>Mid Program String Modifier</title>
    <link href="app.css"
          type="text/css" rel="stylesheet">
    <link rel="icon" type="image/x-icon"
          href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Itim" rel="stylesheet">
    <script src="app.js"></script>
    </head>
  <body>
    <h1>Mid Program String Modifier</h1>
    <input type="text" name="string"
           placeholder="type a string">
    <p id="modP">modified strong goes here</p>
    <button id="upper">Upper</button>
    <button id="lower">Lower</button>
    <button id="length">Length</button>
    <button id="reverse">Reverse</button>
  </body>
</html>
`;
