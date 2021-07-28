const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./api/routes/index");

const PORT = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use("/api", routes);

app.set("trust proxy", true);

app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});
