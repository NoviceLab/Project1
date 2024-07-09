"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1();
app.use(body_parser_1.json());
var services = [
    { id: 1, name: 'backend', description: 'WorkCoSpace-Backend' },
    { id: 2, name: 'express', description: 'WorkCpSpace-intermediator' }
];
// Get all services
app.get('/api/v1/services', function (req, res) {
    res.json(services);
});
// Get a single service by ID
app.get('/api/v1/services/:id', function (req, res) {
    var service = services.find(function (s) { return s.id === parseInt(req.params.id); });
    if (!service)
        return res.status(404).send('Service not found.');
    res.json(service);
});
// Create a new service
app.post('/api/v1/services', function (req, res) {
    var _a = req.body, name = _a.name, description = _a.description;
    if (!name || !description) {
        return res.status(400).send('Name and description are required.');
    }
    var service = {
        id: services.length > 0 ? services[services.length - 1].id + 1 : 1,
        name: name,
        description: description
    };
    services.push(service);
    res.status(201).json(service);
});
// Update an existing service
app.put('/api/v1/services/:id', function (req, res) {
    var service = services.find(function (s) { return s.id === parseInt(req.params.id); });
    if (!service)
        return res.status(404).send('Service not found.');
    var _a = req.body, name = _a.name, description = _a.description;
    if (!name || !description) {
        return res.status(400).send('Name and description are required.');
    }
    service.name = name;
    service.description = description;
    res.json(service);
});
// Delete a service
app.delete('/api/v1/services/:id', function (req, res) {
    var service = services.find(function (s) { return s.id === parseInt(req.params.id); });
    if (!service)
        return res.status(404).send('Service not found.');
    services = services.filter(function (s) { return s.id !== parseInt(req.params.id); });
    res.json(service);
});
var port = 3000;
app.listen(port, function () {
    
    console.log("Server running on port "+port);
});
