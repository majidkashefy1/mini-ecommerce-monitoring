const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  try {
    const { data } = await axios.get("http://backend:4000/api/products");
    const list = data.map((p) => `<li>${p.name} - $${p.price}</li>`).join("");
    res.send(`<h1>🛒 Product Catalog</h1><ul>${list}</ul>`);
  } catch {
    res.send("Backend not ready...");
  }
});

app.listen(3001, () => console.log("💻 Frontend running on port 3001"));
