const express = require("express");
const { restart } = require("nodemon");
const app = express();
const puerto = "3000";

app.use(express.json());

const lista = {
  description: "Productos",
  items: [
    { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
    { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
    { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
    { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
    { id: 5, nombre: "Skin Valorant", precio: 120 },
    { id: 6, nombre: "Taza de Star Wars", precio: 220 },
  ],
};

const items = lista.items;

app.get("/products", (req, res) => {
  res.send(lista.items);
});

app.get("/precio/:precio", (req, res) => {
  res.send(items.filter((item) => item.precio == req.params.precio));
});

app.get("/rango/:rango", (req, res) => {
  const rango = req.params.precio > 50 && req.params.precio < 250;
  console.log(rango)
  res.send(items.filter((item) => rango == req.params.precio));
});

app.post("/products", (req, res) => {
  const newItem = {
    id: items.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio,
  };
  if (!req.body.nombre || !req.body.precio) {
    res.status(400).send({ msg: "Por favor, carga todos los campos" });
  } else {
    items.push(newItem);
    res.status(201).send({ items });
  }
});

app.put("/id/:id", (req, res) => {
  const found = items.some((item) => item.id == req.params.id);
  if (found) {
    items.forEach((item) => {
      if (item.id == req.params.id) {
        (item.nombre = req.body.nombre ? req.body.nombre : item.nombre),
          (item.precio = req.body.precio ? req.body.precio : item.precio);
        res.send(item);
      }
    });
  } else {
    res
      .status(400)
      .send({ msg: `El Item con id ${req.params.id} no ha sido encontrado` });
  }
});

app.delete("/id/:id", (req, res) => {
  const found = items.some((item) => item.id == req.params.id);
  if (found) {
    res.send(items.filter((item) => item.id != req.params.id));
  } else {
    res
      .status(404)
      .send({ msg: `El Item con id ${req.params.id} no ha sido encontrado` });
  }
});

//////
app.listen(puerto, () => {});
