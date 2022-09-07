# Gestión de empleados de una empresa (app)

| Web spa (de solo una página) visualizado en una tabla donde poder dar altas, bajas y modificar los empleados

## funcionalidades

- podras:
  `añadir` nuevos empleados
  `eliminar` empleados
  `modificar` empleados

## Tecnologías

| **Base de datos**

- `Xamp` -> servidor local

- `MySQL` -> desde interfaz de phpmyadmin ( local )

| **Api** / **Backend**

- `Insomnia` para testear los endpoints de mi api

- `NodeJS` (entorno de ejecución de javascript fuera del navegador)
  - mysql (paquete de node)
- `Express JS` (framework que simplifica el desarrollo del backend)

| **Vista** / **Frontend**

- `Vue JS`/ framework o Bootstrap (depende del tiempo)

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
