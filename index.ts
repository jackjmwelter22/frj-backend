import express from 'express';

const app = express();
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({
    type: ['application/json','text/plain']
}))

const {Client} = require('pg')
const client = new Client({
    user: 'jackjmwelter22',
    port: 5432,
    host: 'localhost',
    database: 'postgres',
    password: 'test123'
})
client.connect()

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.post('/login',(req,res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
})

app.post('/register',(req,res) => {
    console.log('Got body:', req.body);
    client.query(`INSERT INTO public.users ("email", "firstName", "lastName", "password") 
VALUES ('${req.body.email}', '${req.body.firstName}', '${req.body.lastName}', '${req.body.password}')`)
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log('The application is listening on port 3000!');
})

