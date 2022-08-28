const express = require("express");

require("dotenv").config({ path: "./config/.env" });
const app = express();
require("./config/db");
const techRoutes = require("./routes/techController");
const imagesRoutes = require("./routes/imagesController");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(cors());
app.use("/api/tech", techRoutes);
app.use("/api/images", imagesRoutes);

app.listen(PORT, () => console.log(`Server started : ${PORT}`));
