const express = require('express');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
const database = require("./config/database");
database.connect();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static("public"));

route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

