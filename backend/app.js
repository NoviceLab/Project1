const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Sample data for example to show it working or not -- by coder Irfan
let services = [
  { id: 1, name: 'backend', description: 'This is first project' },
  { id: 2, name: 'express', description: 'this is unique project' }
];

app.get('/api/v1/services', (req, res) => {
  res.json(services);
});

app.get('/api/v1/services/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) return res.status(404).send('Service not found.');
  res.json(service);
});


app.post('/api/v1/services', (req, res) => {
  const service = {
    id: services.length + 1,
    name: req.body.name,
    description: req.body.description
  };
  services.push(service);
  res.status(201).json(service);
});

app.put('/api/v1/services/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) return res.status(404).send('Service not found.');

  service.name = req.body.name;
  service.description = req.body.description;
  res.json(service);
});

app.delete('/api/v1/services/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) return res.status(404).send('Service not found.');

  const index = services.indexOf(service);
  services.splice(index, 1);
  res.json(service);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
