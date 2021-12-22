const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

// Home
app.get("/", (req, res) => {
  res.render("pages/index");
});
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/static/index.html");
// });
// About
app.get("/about", (req, res) => {
  res.render("pages/about");
});

// Portfolio
app.get("/services", (req, res) => {
  res.render("pages/services");
});
// Contact
app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

const port = process.env.PORT || 80;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
