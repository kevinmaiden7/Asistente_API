const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const reportsRoute = require('./Report/app');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/reports', reportsRoute); // Ruta de acceso a la API de reportes de incidentes

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.json({"ASSISTANT": "API"});
});

const server = app.listen(port, function(){
    console.log('Server running on port %d', port);
});
