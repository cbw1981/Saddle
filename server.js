const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/connection.js");
const path = require("path");
app.use(express.json());
const userRoute = require("./routes/userRoutes");
const songsRoute = require("./routes/songRoute");
const adminRoute = require("./routes/adminRoute");

app.use("/api/users", userRoute);
app.use("/api/songs", songsRoute);
app.use("/api/admin", adminRoute);
const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Node js server started at port ${port}!`));
