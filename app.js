

const express = require('express');
const app = express();
const route=require('./routes/index')
const sequelize = require('./utils/database')
const cors=require('cors')
                                      // it will allows a server to indicate any origins (domain, scheme, or post) other than its own from which a browser should permit load resources
app.use(cors());

const bodyParser = require('body-parser');                          // it gives 4 express middleware for parasing JSON, Text, URL-encoded, raw data sets over an HTTP request body... 
app.use(bodyParser.json({ extended: false}));

app.use(route)
sequelize.sync().then(result=>{
console.log(result)
    app.listen(3000)
}).catch(err=>{
    console.log(err)
})