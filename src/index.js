const express = require ('express');
const cors = require('cors');
const path = require('path')
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  const indexpage = path.join( __dirname, '../public/index.html');
  // res.send('hello world')
  res.sendFile(indexpage);
})

const port = process.env.PORT;

app.listen(port, ()=> {
  console.log(`listening on port ${port}...`);
})