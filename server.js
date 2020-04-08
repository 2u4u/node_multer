const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const upload = require('./multer-aws.js');

app.post("/image", upload.any('file'), (req, res) => {
  console.log("req.files", req.files)
  return res.status(200).send(req.files)
})
// To get the data from a POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
