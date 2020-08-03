const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.get('/', (req, res) => {
    res.send("Server is running!");
});

io.on('connection', socket => {
    socket.on('expression', (expression) => {
        console.log(expression);
    });
    
    socket.on('disconnect', () => {
        console.log('disconnected');
    });
});

http.listen(PORT, () => console.log(`Listening on port: ${PORT}`));