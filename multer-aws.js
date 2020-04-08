const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: require("./config/config.example").aws.key,
  accessKeyId: require("./config/config.example").aws.id,
  region: 'eu-central-1'
});

const s3 = new aws.S3();

const storage = multerS3({
  s3: s3,
  bucket: require("./config/config.example").aws.bucket,
  key: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;