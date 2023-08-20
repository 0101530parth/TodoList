const express = require('express');
const Connection = require('./database/db.js');
const cors = require('cors');
require('./database/db.js');
 const route =require('./routes/route.js');


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', route);
const PORT = 8000;
Connection();
app.listen(PORT,()=>{
console.log(`My server is running....on port ${PORT}`)
});