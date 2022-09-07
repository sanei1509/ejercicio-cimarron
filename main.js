const { response } = require("express");

// VARIABLES GLOBALES
const URL_API = "http://localhost:3001/empleados";

const contenedor = document.querySelector("tbdody");
let resultados = "";

const MODAL = new bootstrap.Modal(document.getElementById("modal_empleados"));
const form_empleado = document.querySelector("form");
const btn_crear_empleado = document.querySelector(".btn_crear_empleado");

// OBTENEMOS TODOS LOS CAMPOS DEL MODAL
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const nacimiento = document.getElementById("nacimiento");
const documento = document.getElementById("documento");
const salario = document.getElementById("salario");
const ingreso = document.getElementById("ingreso");

// CAPTURAMOS EL 'CLICK' PARA ABRIR EL MODAL
btn_crear_empleado.addEventListener("click", () => {
  // LIMPIAMOS CADA VEZ QUE ABRE
  nombre.value = "";
  apellido.value = "";
  nacimiento.value = "";
  documento.value = "";
  salario.value = "";
  ingreso.value = "";

  opcion = "crear";

  // abrir modal
  MODAL.show();
});

// FUNCIONES
const listar = (empleados) => {
  // iteramos sobre los empleados
  empleados.forEach((empleado) => {
    resultados += `<tr> 
						<td>${empleado.id}<td> 
						<td>${empleado.nombre}<td> 
						<td>${empleado.apellido}<td> 
						<td>${empleado.nacimiento}<td>
						<td>${empleado.documento}<td>
						<td>${empleado.salario}<td>
						<td>${empleado.ingreso}<td>
					<tr>`;
  });
};

// OBTENER & MOSTRAR DATOS DE NUESTRA API
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((contenido) => listar(contenido))
  .catch((error) => console.log(error));
