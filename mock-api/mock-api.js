const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.listen(8081);

app.get("/dashboard/sales", function(request, response) {
  // response.status(200).json(require("./mocks/dashboard/sales.json"));
  setTimeout(() => response.status(200).json(require("./mocks/dashboard/sales.json")), 2000);
});