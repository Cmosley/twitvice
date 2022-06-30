const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*"
   })
);

// Server code

app.listen(3000);
