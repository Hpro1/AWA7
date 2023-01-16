import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

interface Vehicle {
    model: string;
    color: string;
    year: number;
    power: number;
}
const app = express();
const port = 3000;
const vehicleList: Vehicle[] = [];

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/hello', (req, res) => {
    res.send('Hello world');
});
app.post('/vehicle/add', (req, res) => {
    const newVehicle: Vehicle = req.body;
    vehicleList.push(newVehicle);
    res.status(201).send({message: 'Vehicle added'});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
