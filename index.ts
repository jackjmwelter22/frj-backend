import express from 'express';
import cors from 'cors';

const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({
    type: ['application/json', 'text/plain']
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

app.post('/login', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
})

app.post('/register', async (req, res) => {
    console.log('Got body:', req.body);
    await client.query(`INSERT INTO public.users ("email", "firstName", "lastName", "password") 
         VALUES ('${req.body.email}', '${req.body.firstName}', '${req.body.lastName}', '${req.body.password}')`,(error,results)=>{
        if(error){
            if(error.code=='23505') {
                return res.send('Email already exists')
            }
            else{
                return res.send('Please check all fields')
            }
        }
        else{
            return res.send('Account created successfully!')
        }
    })
})

app.listen(port, () => {
    console.log('The application is listening on port ' + port);
})

function isEmailValid(email) {

}

