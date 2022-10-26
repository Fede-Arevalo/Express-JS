const express = require("express");
const app = express();
const puerto = "3000";

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Bienvenido a <b>Node Express JS</b>`);
});

app.get("/productos", (req, res) => {
  res.send(`Listado de <b>Productos</b>`);
});

app.post("/productos", (req, res) => {
  res.send("Crear un producto");
});

app.put("/productos", (req, res) => {
  res.send("Actualizar un producto");
});

app.delete("/productos", (req, res) => {
  res.send("Borrar un producto");
});

app.get("/usuarios", (req, res) => {
  res.send(`Listado de <b>Usuarios</b>`);
});

app.post("/usuarios", (req, res) => {
  res.send("Crear usuario");
});

app.put("/usuarios", (req, res) => {
  res.send("Actualizar usuario");
});

app.delete("/usuarios", (req, res) => {
  res.send("Borrar usuario");
});

app.listen(puerto, () => {});
