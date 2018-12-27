const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors'),
const mongoose = require('mongoose');
const api = require('./node/routers/api');
const config = require('./config/DB');
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();

//app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
