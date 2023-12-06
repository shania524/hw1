// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/userDB")

// app.use(express.json()); 


// const itemSchema = new mongoose.Schema({
//   itemname: String,
  
// });

// const Item = mongoose.model("Item", itemSchema);


// app.get('/getallitems', (req, res) => {
//   const items=  Item.find({});
//   res.send(items);
// });

// app.post('/getallitems', (req, res) => {
//   const items = new Item({
//     itemname : req.body.name,
//   });
//   const item=  Item.find({});
//   res.send(item);
// });

// app.listen(port, () => {
 
// });
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

const itemSchema = new mongoose.Schema({
  itemname: String,
});

const Item = mongoose.model('Item', itemSchema);

app.get('/getallitems', async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/getallitems', async (req, res) => {
  try {
    const newItem = new Item({
      itemname: req.body.name,
    });

    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
