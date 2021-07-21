const express = require("express");
const app = express();

// Home
app.get("/", (req, res) => res.send("<h1>Home Page Route</h1>"));

// About
app.get("/about", (req, res) => res.send("About Page Route"));

// POrtfolio
app.get("/portfolio", (req, res) => res.send("Portfolio Page Route"));
// Contact
app.get("/contact", (req, res) => res.send("Contact Page Route"));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
