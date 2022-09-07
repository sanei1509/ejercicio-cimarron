// importo los paquetes que voy a usar (instalados)
const { table } = require("console");
const express = require("express");
const mysql = require("mysql2");

// acceso a metodos y funciones de express
app = express();

// SET conexión a la base de datos
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empresa-x",
  port: "3307",
});

// ENV recibido por parámetro
const PUERTO = process.env["PUERTO"] || 3000;

app.listen(PUERTO, () =>
  console.log(`Servidor [ corriendo ] en puerto: ${PUERTO}`)
);

// endpoints de nuestra app [ HOME ]
app.get("/", (req, res) => res.send("Home de la app"));

// traer todos los empleados
app.get("/empleados", (req, res) => {
  conexion.query("SELECT * FROM empleados", (error, filas) => {
    if (error) console.log(error);
    else res.send(filas);
  });
});

// crear empleados
app.post("");

// TEST conexión a la base de datos
conexion.connect(function (error) {
  if (error) console.log("Error en la conexión", error);
  else console.log("Conexion exitosa con DB!");
});
