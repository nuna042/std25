const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.end('Welcome to root path');
});
app.get('/home', (req, res) => {
    res.end('Welcome to Home path');
});
app.post('/api', (req, res) => {
    const feedback = req.body.feedback;
    res.end('Receive Feedback: ' + feedback);
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
