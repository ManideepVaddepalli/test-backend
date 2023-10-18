const express = require("express");
const app = express();

app.use(express.json());
app.get("", (req, res) => {
  res.status(200).json({ Mssg: "Working" });
});
app.listen(4000, () => {
  console.log("listining at port 4000");
});
