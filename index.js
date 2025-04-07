// index.js
const express = require('express')
const app = express()
const PORT = 4000
app.get('/', (req, res) => {
  res.send("<H1 style=color:blue;>Express on Vercel is working! Test 1</H1>");
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app