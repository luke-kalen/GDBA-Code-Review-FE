const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")))

app.use((req, res, next) => {
  console.log(`${req.method} method incoming for ${req.url}`);
  next();
})

app.post('/proof', (req, res) => {
  res.json({ cool: 'yeah' });
})

app.listen(PORT, () => console.log(`running on port ${PORT}`))