const express = require('express')
const router_U = require('./router/usersRouter')
const router_C = require('./router/climateRouter')
const app = express();
app.use(express.json())




app.use('/', router_U)
app.use('/', router_C)


app.listen(8080,()=>{console.log("server is running http://localhost:8080")});