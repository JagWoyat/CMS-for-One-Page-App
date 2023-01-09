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

app.set('port', 4000);

app.get('/s', (req, res) => {
  fs.readdir('uploads/paths', function (err, files) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(files);
    res.json(files);
  });
});

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(`Express server listening on: http://localhost:${app.get('port')}`);
});
