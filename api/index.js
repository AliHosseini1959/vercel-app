const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("<H1 style=color:blue;>Express on Vercel is working! 6</H1>"));
//app.listen(4000, () => console.log("Server ready on port 4000."));
module.exports = app;