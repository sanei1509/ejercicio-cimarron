// VARIABLES GLOBALES
const URL_API = "http://localhost:3001/empleados/";
const AÑO_ACTUAL = 2022;
const contenedor = document.querySelector("tbody");
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
let opcion = "";

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
  //   <td>${empleado.id}</td>;
  empleados.forEach((empleado) => {
    let edad = AÑO_ACTUAL - empleado.nacimiento;
    let antiguedad = AÑO_ACTUAL - empleado.ingreso;
    let incremento = 0;
    // incremento del 8% por año pasado luego 3
    if (antiguedad > 3) {
      let años_pasados = antiguedad - 3;
      incremento = ((empleado.salario * 8) / 100) * años_pasados;
    }
    let salario_actual = empleado.salario + incremento;
    resultados += `
	<tr> 
		<td>${empleado.nombre}</td> 
		<td>${empleado.apellido}</td> 
		<td>${empleado.nacimiento}</td>
		<td>${empleado.documento}</td>
		<td>${empleado.salario}</td>
		<td>${empleado.ingreso}</td>
		<td class="text-center"><a class="btnEditar btn btn-dark">Editar<a> <a href="#" class="btnBorrar btn btn-danger">Eliminar</a></td>
		<td>${edad}</td>
		<td>${antiguedad}</td>
		<td>${salario_actual}</td>
	<tr>`;

    // despues de formateada la información insertamos en el contenido de nuestra tabla
    contenedor.innerHTML = resultados;
  });
};

// CREAR Y EDITAR empleado
form_empleado.addEventListener("submit", (e) => {
  e.preventDefault();
  //Podrría haber usado el mismo modal para editar
  fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre.value,
      apellido: apellido.value,
      nacimiento: nacimiento.value,
      documento: documento.value,
      salario: salario.value,
      ingreso: ingreso.value,
    }),
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      const nuevoArticulo = [];
      nuevoArticulo.push(data);
      listar(nuevoArticulo);
    });

  location.reload();
});

// TRABAJAMOS SOBRE EL CONTENIDO OBTENIDO DE NUESTRA API
fetch(URL_API)
  .then((respuesta) => respuesta.json())
  .then((contenido) => listar(contenido))
  .catch((error) => console.log(error));
