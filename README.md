# API Reactiva

Este proyecto es una API Reactiva construida con Node.js, Express y MongoDB. La API permite gestionar usuarios y tareas, con rutas para crear, leer, actualizar y eliminar datos.

## Requisitos

- Node.js
- MongoDB
- Docker (opcional, para ejecutar MongoDB en un contenedor)

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/tu_usuario/api_reactiva.git
    cd api_reactiva
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Configura la base de datos:

    Si estás utilizando MongoDB localmente, asegúrate de que MongoDB esté corriendo en el puerto 27018. Puedes iniciar MongoDB con el siguiente comando:

    ```sh
    sudo systemctl start mongod
    ```

    Si estás utilizando Docker, puedes levantar un contenedor de MongoDB con el siguiente comando:

    ```sh
    docker compose -p api_react up
    ```

4. Configura las variables de entorno:

    Crea un archivo `.env` en el directorio raíz del proyecto y agrega la URI de conexión a MongoDB:

    ```env
    MONGO_URI=mongodb://admin:password@localhost:27018/nombre_de_tu_base_de_datos
    ```

## Uso

1. Inicia el servidor:

    ```sh
    npm start
    ```

    O si estás utilizando `nodemon` para desarrollo:

    ```sh
    npm run dev
    ```

2. La API estará disponible en `http://localhost:3001`.

## Rutas

### Usuarios

- `GET /Us` - Obtener todos los usuarios
- `POST /Us` - Crear un nuevo usuario
- `POST /Us/login` - Iniciar sesión
- `GET /Us/:id` - Obtener un usuario por ID
- `DELETE /Us/:id` - Eliminar un usuario por ID
- `PUT /Us/:id` - Actualizar un usuario por ID

### Tareas

- `GET /api/tareas` - Obtener todas las tareas
- `GET /api/tareas/completadas` - Obtener todas las tareas completadas
- `GET /api/tareas/pendientes` - Obtener todas las tareas pendientes
- `POST /api/tareas` - Crear una nueva tarea
- `DELETE /api/tareas/:id` - Eliminar una tarea por ID

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.