const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const dummyRoute = [
    { latitude: 17.385044, longitude: 78.486671 },
    { latitude: 17.486044, longitude: 78.487671 },
    { latitude: 17.387044, longitude: 78.488671 },
    { latitude: 17.388044, longitude: 78.489671 },
    { latitude: 17.389044, longitude: 78.490671 },
    { latitude: 17.390044, longitude: 78.491671 }
];

let currentIndex = 0;

app.get('/api/vehicle-location', (req, res) => {
    const vehicleLocation = dummyRoute[currentIndex];
    currentIndex = (currentIndex + 1) % dummyRoute.length;
    res.json(vehicleLocation);
});

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
