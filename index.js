const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");

require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: false }));

const systemConfig = require("./config/system");
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
const database = require("./config/database");
database.connect();

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");
console.log(__dirname);
app.use(express.static(`${__dirname}/public`));

app.locals.prefixAdmin = systemConfig.prefixAdmin;

//TinyMCE
app.use(
  "/tinymce",
  express.static(path.join(__dirname, "node_modules", "tinymce"))
);
// End TinyMCE

// Flash
app.use(cookieParser("JAHFJBDW"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
// End Flash

route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
