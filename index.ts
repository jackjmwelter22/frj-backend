import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Well done!');
})
app.get('/jack/hello', (req, res) => {
    res.send('Hello pat');
    console.log('The application is listening on port 3000!');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})