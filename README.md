# Proyecto 1
Creación del microservicio de autenticacion, mostrando el funcionamiento de express para crear middlewares  y endpoints para el uso de servicios REST.



## Ejecutarlo

### Paso 1
Descargar el repositorio

```bash
git clone https://github.com/LucioHdz/api-auth
```

### Paso 2
Acceder al proyecto e instalar las dependencias del proyecto.

```bash
cd api-auth && npm i
```

### Paso 3 
Ejecutar el entorno de express en produccion
```bash
npm start
```
Tambien puede ser en un entorno de desarrollo
```bash
npm run dev
```

### Paso 4
Acceder a la url http://localhost:3000 para la ruta del servidor express


## Rutas


- `GET`: http://localhost:3000/
    - Usada para mostrar usuarios sin proteccion de datos
- `POST`: http://localhost:3000/login
    - Usado para pasar los parametros username y password para crear un token de usuario
- `GET`: http://localhost:3000/saludo-protegido
    - manda el token en las cabeceras para mostrar un saludo o en caso contrario denegar el acceso con el uso del middleware de validación.




    # API de Usuarios

## Pruebas de las rutas

### Obtener todos los usuarios

- **Método**: GET
- **URL**: `http://localhost:3003/Us/users`
- **Descripción**: Obtiene todos los usuarios.
- **Instrucciones**: Haz clic en "Send" para enviar la solicitud y ver la respuesta.

### Crear un nuevo usuario

- **Método**: POST
- **URL**: `http://localhost:3003/Us/users`
- **Descripción**: Crea un nuevo usuario.
- **Instrucciones**:
  1. En la pestaña "Body", selecciona "raw" y "JSON".
  2. Añade el siguiente JSON:
    ```json
    {
        "username": "testuser",
        "password": "testpassword"
    }
    ```
  3. Haz clic en "Send" para enviar la solicitud y ver la respuesta.

### Iniciar sesión

- **Método**: POST
- **URL**: `http://localhost:3003/Us/login`
- **Descripción**: Inicia sesión con un usuario existente.
- **Instrucciones**:
  1. En la pestaña "Body", selecciona "raw" y "JSON".
  2. Añade el siguiente JSON:
    ```json
    {
        "username": "testuser",
        "password": "testpassword"
    }
    ```
  3. Haz clic en "Send" para enviar la solicitud y ver la respuesta.

### Obtener un usuario por ID

- **Método**: GET
- **URL**: `http://localhost:3003/Us/users/{id}`
- **Descripción**: Obtiene un usuario por su ID.
- **Instrucciones**:
  1. Reemplaza `{id}` con el ID del usuario que deseas obtener.
  2. Haz clic en "Send" para enviar la solicitud y ver la respuesta.

### Obtener un usuario por nombre

- **Método**: GET
- **URL**: `http://localhost:3003/Us/users/name/{username}`
- **Descripción**: Obtiene un usuario por su nombre.
- **Instrucciones**:
  1. Reemplaza `{username}` con el nombre del usuario que deseas obtener.
  2. Haz clic en "Send" para enviar la solicitud y ver la respuesta.

### Eliminar un usuario

- **Método**: DELETE
- **URL**: `http://localhost:3003/Us/users/{id}`
- **Descripción**: Elimina un usuario por su ID.
- **Instrucciones**:
  1. Reemplaza `{id}` con el ID del usuario que deseas eliminar.
  2. Haz clic en "Send" para enviar la solicitud y ver la respuesta.

### Actualizar un usuario

- **Método**: PUT
- **URL**: `http://localhost:3003/Us/users/{id}`
- **Descripción**: Actualiza un usuario por su ID.
- **Instrucciones**:
  1. Reemplaza `{id}` con el ID del usuario que deseas actualizar.
  2. En la pestaña "Body", selecciona "raw" y "JSON".
  3. Añade el siguiente JSON:
    ```json
    {
        "username": "updateduser",
        "password": "updatedpassword"
    }
    ```
  4. Haz clic en "Send" para enviar la solicitud y ver la respuesta.# api_conexion_react
