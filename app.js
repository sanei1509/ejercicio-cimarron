// IMPORT de paquetes a utilizar
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// dotenv config
require("dotenv").config({ path: "./.env" });

// acceso a metodos y funciones de express
app = express();
app.use(cors());

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

// ENDPOINTS de nuestra app [ HOME ]
app.get("/", (req, res) => res.send("Home de la app"));

// OBTENER empleados
app.get("/empleados", (req, res) => {
  conexion.query("SELECT * FROM empleados", (error, filas) => {
    if (error) console.log(error);
    else res.send(filas);
  });
});

// CREAR empleados
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
  // QUERY
  conexion.query(sql, data, function (error, resultados) {
    if (error) console.log("Error en el POST ->", error);
    else {
      res.send(resultados);
    }
  });
});

// MODIFICAR empleados
app.put("/empleados/:id", (req, res) => {
  const id = req.params.id;
  const { nombre, apellido, nacimiento, documento, salario, ingreso } =
    req.body;
  const sql =
    "UPDATE empleados SET nombre = ?, apellido = ?, nacimiento = ?, documento= ?, salario = ?, ingreso = ? WHERE id = ?";
  // QUERY
  conexion.query(
    sql,
    [nombre, apellido, nacimiento, documento, salario, ingreso, id],
    function (error, resultado) {
      if (error) console.log("Error en la modficación ->", error);
      else res.send(resultado);
    }
  );
});

// BAJAS a a empleados
app.delete("/empleados/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM empleados WHERE id = ?";
  //QUERY
  conexion.query(sql, id, function (error, resultado) {
    if (error) console.log("Error en dar de baja al empleado ->", error);
    else res.send(resultado);
  });
});

// TEST conexión a la base de datos
conexion.connect(function (error) {
  if (error) console.log("Error en la conexión", error);
  else console.log("Conexion exitosa con DB!");
});
