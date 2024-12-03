const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

//DB connect
require('./database/config');

const controller = require('./controller/usercontroller');
app.use('/',controller);

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{console.log(`Server Started at => http://localhost:${PORT}`);});