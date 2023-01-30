let http = require('http');
let express = require('express');

let app = express();
let cors = require('cors');
let fs = require('fs');

let methodOverride = require('method-override');
let bodyParser = require('body-parser');
let path = require('path');

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

var indexRouter = require('./routes/index');
app.use('/api/', indexRouter);

app.use('/uploads', express.static('./uploads'));
app.use('/uploads/imgs', express.static('./uploads/imgs'));
app.use('/uploads/paths', express.static('./uploads/paths'));
app.use('/uploads/messages', express.static('./uploads/messages'));

app.set('port', 4000);

app.get('/:name', (req, res) => {
  let reqJSON = {};
  fs.readdir('uploads/paths/' + req.params.name, function (err, files) {
    if (err) {
      console.log(err);
      return;
    }
    files.map((name) => {
      const file = fs.readFileSync('uploads/paths/' + req.params.name + '/' + name, 'utf-8');
      try {
        let data = JSON.parse(file);
        reqJSON[name.slice(0, -4)] = data;
      } catch (error) {
        reqJSON[name.slice(0, -4)] = file;
      }
    });
    res.json(reqJSON);
  });
});

app.get('/mes/m', (req, res) => {
  const folderPath = 'uploads/messages';
  const files = fs.readdirSync(folderPath);
  let jsonData = {};

  files.forEach((file) => {
    if (path.extname(file) === '.txt') {
      const filePath = path.join(folderPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      jsonData[file] = JSON.parse(fileContent);
    }
  });

  res.json(jsonData);
});

app.delete('/mes/:filename', (req, res) => {
  const filePath = path.join(
    '/home/ja/Desktop/vscode/one-page-cms/server/uploads/messages',
    req.params.filename,
  );
  fs.unlink(filePath, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send('File deleted successfully');
    }
  });
});

// fs.readdir('uploads/messages', function (err, files) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(files);
//   res.json(files);

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(`Express server listening on: http://localhost:${app.get('port')}`);
});
