var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

let cors = require('cors');

let methodOverride = require('method-override');
let bodyParser = require('body-parser');
let path = require('path');

let fs = require('fs');

router.use(methodOverride());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.join(__dirname, 'public')));

let cont = {};

router.use(cors());

var multer = require('multer');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/imgs');
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = '';
    if (file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if (file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if (file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  },
});
var upload = multer({ storage: storage });

router.post('/upload', upload.any(), function (req, res, err) {
  let dir = './uploads/paths/' + req.body.name;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile(dir + '/' + req.body.title + '.txt', req.files[0].filename, function (err) {
    if (err) return console.log(err);
  });
  if (!req.files) {
    res.status(500);
    return err;
  }
  res.json({ fileUrl: 'http://localhost:4000/uploads/' + req.files.filename });
});

router.post('/contact', (req, res) => {
  cont = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  let dir = './uploads/messages/';
  let json = JSON.stringify(cont);
  fs.writeFile(dir + cont.email + Date.now().toString() + '.txt', json, function (err) {
    if (err) return console.log(err);
  });
  res.json(cont);
});

router.post('/arr', (req, res) => {
  cont = req.body;
  let dir = './uploads/paths/' + cont.name;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  let json = JSON.stringify(cont.buttons);
  fs.writeFile(dir + '/' + cont.title + '.txt', json, function (err) {
    if (err) return console.log(err);
  });
  res.json(cont);
});

router.post('/text', (req, res) => {
  cont = req.body;
  let dir = './uploads/paths/' + cont.name;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  let json = JSON.stringify(cont.text);
  fs.writeFile(dir + `/` + cont.title + '.txt', json, function (err) {
    if (err) return console.log(err);
  });
  res.json(cont);
});

router.post('/views', (req, res) => {
  cont = req.body;
  try {
    const file = fs.readFileSync('./uploads/layout.txt', 'utf-8');
    let data = JSON.parse(file);
    data[cont.name] = cont.type;
    const nowe = JSON.stringify(data);
    fs.writeFile('./uploads/layout.txt', nowe, function (err) {
      if (err) return console.log(err);
    });
  } catch (err) {
    let data = {};
    data[cont.name] = cont.type;
    const nowe = JSON.stringify(data);
    fs.writeFile('./uploads/layout.txt', nowe, function (err) {
      if (err) return console.log(err);
    });
    res.json(cont);
  }
});

module.exports = router;
