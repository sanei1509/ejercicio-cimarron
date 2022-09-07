// importo los paquetes que voy a usar (instalados)
const express = require("express");
const mysql = require("mysql");

// acceso a metodos y funciones de express
app = express();

// ENV recibido por parámetro
const PUERTO = process.env["PUERTO"] || 3000;

app.listen(PUERTO, () =>
  console.log(`Servidor [ corriendo ] en puerto: ${PUERTO}`)
);

// endpoints de nuestra app [ HOME ]
app.get("/", (req, res) => res.send("Home de la app"));
