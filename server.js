const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./node/routers/api');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
