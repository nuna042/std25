const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const api = require('./routers/api');
const person = require('./routers/person');

const port = 3000;

require('./config/DB');


const app = express();

//app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use('/api', api);
app.use('/person', person);
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
*/
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
