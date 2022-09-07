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

- altas (`create`), en http protocol = (`POST`)
- obtener empleados (`read`), en http protocol = (`GET`)
- modificaciones (`update`) en http = (`PUT`)
- bajas (`delete`), en http protocol = (`DELETE`)
