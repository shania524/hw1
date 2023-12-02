const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 
let items = [];

app.get('/getallitems', (req, res) => {
  console.log(items); 
  res.send(items);
});

app.post('/getallitems', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
  };

  items.push(newItem);
  
});

app.listen(port, () => {
 
});
