// api/data.js
const { getData } = require("../lib/data");

export default function handler(req, res) {
  const data = getData();
  res.status(200).json(data);
}
