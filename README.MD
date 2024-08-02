### index.js

Se encarga de iniciar nuestra aplicación (el servidor).

### src/server.js

Contiene la configuración y descripción de nuestro servidor Express, así como la integración de las rutas.

### src/models

Se encarga de albergar los modelos de la base de datos. En este proyecto, utilizamos MongoDB para la persistencia de datos.

### src/usecases

Cada archivo contiene los casos de uso de cada una de las entidades/recursos que utiliza nuestra aplicación. Aquí se define la lógica de negocio y las reglas específicas de la aplicación.

### src/routes

Un archivo por cada router de Express que tenga nuestra API. Aquí se definen las rutas y controladores para cada recurso de la aplicación.

### src/middlewares

Contiene funciones middleware para nuestra API. Los middlewares se utilizan para interceptar y manipular las solicitudes y respuestas, y para realizar operaciones como la validación, autenticación, etc.

### src/lib

Funciones utilitarias que no pertenecen a ninguna otra categoría. Estas funciones pueden ser reutilizadas en diferentes partes de la aplicación.
