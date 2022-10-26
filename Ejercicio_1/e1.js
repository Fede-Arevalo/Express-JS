const express = require("express");
const app = express();
const puerto = "3000";

app.get("/", (req, res) => {
  res.send(`Servidor levantado en el puerto ${puerto}`);
});

app.listen(puerto, () => {});
