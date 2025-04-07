const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("<H1 style=color:blue;>Express on Vercel is working! 14</H1>"));
//app.listen(4000, () => console.log("Server ready on port 4000."));
app.get("/api/data", (req, res) => {
  res.json(getData());
});
module.exports = app;