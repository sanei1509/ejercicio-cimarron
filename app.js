// importo los paquetes que voy a usar (instalados)
const { table } = require("console");
const express = require("express");
const mysql = require("mysql2");

// dotenv config
require("dotenv").config({ path: "./.env" });

// acceso a metodos y funciones de express
app = express();

// especificamos el formato a trabajar
app.use(express.json());

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
app.post("/empleados", (req, res) => {
  let data = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    nacimiento: req.body.nacimiento,
    documento: req.body.documento,
    salario: req.body.salario,
    ingreso: req.body.ingreso,
  };
  let sql = "INSERT INTO empleados SET ?";

  conexion.query(sql, data, function (error, resultados) {
    if (error) console.log("Error en el POST", error);
    else {
      res.send(resultados);
    }
  });
});

// TEST conexión a la base de datos
conexion.connect(function (error) {
  if (error) console.log("Error en la conexión", error);
  else console.log("Conexion exitosa con DB!");
});
