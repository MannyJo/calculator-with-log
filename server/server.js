const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./modules/pool');

const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.get('/results', (req, res) => {
    pool.query(`SELECT expression FROM "expression_log" ORDER BY created DESC LIMIT 10;`)
    .then(results => {
        res.send(results.rows);
    }).catch(err => {
        console.log('Error with getting expressions :', err);
        res.sendStatus(500);
    });
});

io.on('connection', socket => {
    socket.on('expression', (expression) => {
        pool.query(`
            INSERT INTO "expression_log" ( "expression" )
            VALUES ( $1 );
        `, [ expression ])
        .then( () => {
            pool.query(`SELECT expression FROM "expression_log" ORDER BY created DESC LIMIT 10;`)
            .then(results => {
                io.emit('expressions', results.rows);
            }).catch(err => {
                console.log('Error with getting expressions :', err);
            });
        }).catch(err => {
            console.log('Error with inserting expression :', err);
        });
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
});

http.listen(PORT, () => console.log(`Listening on port: ${PORT}`));