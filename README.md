# Propuesta del ejercicio

realizar una aplicación (web)

# Realidad de la aplicación

Gestión de información sobre los `empleados de una empresa`

# Funcionalidades de la app

`Listar los empleados`(columnas) mostrando los siguientes datos:

- Nombre
- Apellido
- Fecha de nacimiento
- Documento de identidad (C.I)
- Salario inicial
- Fecha de ingreso

# Lógica (calculos a realizar)

| también se deben mostrar estos datos en la app

- Edad = año actual - año de nacimiento
- Antiguedad = año actual - año de ingreso
- Salario actual:
  - despúes de 3 años de antiguedad -> [salario inicial] + ( 8% \* cantidad de años encima de los 3).

# Funcionalidades sobre el almacenamiento (db)

metodos http a realizar sobre nuestro recurso en este caso (db)

- altas (create), en http protocol = (POST)
- bajas (delete), en http protocol = (DELETE)
- modificaciones (update) en http = (PUT)

## Tecnologías

| Base de datos

- Xamp -> servidor local

- `MySQL` -> desde interfaz de phpmyadmin ( local )

|Api

- `Insomnia` para testear los endpoints de mi api

- `NodeJS` (entorno de ejecución de javascript fuera del navegador)
  - mysql (paquete de node)
- `Express JS` (framework que simplifica el desarrollo del backend)

|Lógica

- Javascript

|Vista

- Vuejs/framework o Bootstrap (depende del tiempo)

# Instalaciones necesarias

`inicio del proyecto`

```
npm init -y
```

`añadir express al proyecto`

```
npm install express --save
```

`paquete de mysql`

```
npm install mysql
```

# Instrucciones de uso

## 0 Clonar repositorio de github y moverse al directorio

```bash
git clone https://github.com/sanei1509/ejercicio-cimarron.git

cd ejercicio-cimarron
```

## 1 instalar dependencias del package-json necesarias para correr la aplicación

```
npm install
```

## 2 Iniciar la app

- puerto a elección desde archivo `.env`
- `default 3000`

```bash
node app.js

======= O ====
PUERTO=3330 node app.js
```

# Autor

- Santiago Neira
