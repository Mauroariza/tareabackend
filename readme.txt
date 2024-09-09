Este proyecto es una aplicación full stack que utiliza React con TypeScript y Vite en el frontend, y Node.js con Express y Sequelize en el backend. La aplicación incluye autenticación de usuarios y manejo de comentarios.

Estructura del Proyecto
La estructura del proyecto es la siguiente:

Backend: Construido con Node.js, Express y Sequelize. Utiliza una base de datos PostgreSQL y se encarga de la autenticación de usuarios y el manejo de comentarios.
Frontend: Construido con React, TypeScript y Vite. Utiliza Tailwind CSS para el diseño y react-hook-form para el manejo de formularios.
Backend
Configuración

Instalación y Ejecución
Instala las dependencias:
cd backend
npm install
Inicia el servidor en modo desarrollo:
Estructura del Backend
src/index.ts: Punto de entrada del servidor.
db.ts: Configuración de la conexión a la base de datos.
Comentarios.ts: Rutas para el manejo de comentarios.
src/controllers/commentController.ts: Controladores para las operaciones de comentarios.
Frontend
Instalación y Ejecución
Instala las dependencias:
Inicia el servidor de desarrollo:
Estructura del Frontend
src/main.tsx: Punto de entrada de la aplicación React.
src/pages/SignIn.tsx: Página de inicio de sesión.
src/api/axios.ts: Configuración de Axios para las solicitudes HTTP.
tailwind.config.js: Configuración de Tailwind CSS.
Scripts Disponibles
Backend
npm run dev: Inicia el servidor en modo desarrollo.
Frontend
npm run dev: Inicia el servidor de desarrollo.
npm run build: Construye la aplicación para producción.
npm run lint: Ejecuta ESLint para encontrar y arreglar problemas en el código.
npm run preview: Previsualiza la aplicación construida.

Descripción del código
El backend de este proyecto está construido con Node.js, Express y Sequelize, y utiliza una base de datos PostgreSQL. A continuación, se describe la estructura y las funcionalidades principales del backend:
Estructura del Backend
1.	Configuración de la Base de Datos:
o	Archivo: src/db.ts
o	Funciones Importantes:
	sequelize.authenticate(): Verifica la conexión a la base de datos.
	sequelize.sync(): Sincroniza los modelos con la base de datos.
2.	Modelos:
o	Archivos: src/models/User.ts, src/models/Comentario.ts, src/models/Device.ts
o	Funciones Importantes:
	UserFactory(sequelize): Define el modelo de usuario.
	CommentFactory(sequelize): Define el modelo de comentario.
	DeviceFactory(sequelize): Define el modelo de dispositivo.
3.	Servidor:
o	Archivo: src/server.ts
o	Funciones Importantes:
	server.use(express.json()): Configura el servidor para manejar JSON.
	server.use(morgan('dev')): Configura el middleware de logging.
	server.use(cors(corsOptions)): Configura el middleware de CORS.
	server.use(passport.initialize()): Inicializa Passport para la autenticación.
4.	Punto de Entrada:
o	Archivo: src/index.ts
o	Funciones Importantes:
	server.listen(PORT): Inicia el servidor en el puerto especificado.
Funcionalidades Principales
1.	Autenticación de Usuarios:
o	Utiliza Passport para la autenticación.
o	Los usuarios se definen en el modelo User.
2.	Manejo de Comentarios:
o	Los comentarios se definen en el modelo Comment.
o	Las rutas y controladores para manejar comentarios se encuentran en src/controllers/commentController.ts.
3.	Manejo de Dispositivos:
o	Los dispositivos se definen en el modelo Device.
Variables de Entorno
•	Archivo: .env
•	Contiene las variables necesarias para la configuración de la base de datos y el puerto del servidor.
Scripts Disponibles
•	Archivo: package.json
•	Scripts Importantes:
o	npm run dev: Inicia el servidor en modo desarrollo utilizando nodemon y ts-node.
El frontend de este proyecto está construido con React, TypeScript y Vite, y utiliza Tailwind CSS para el diseño. A continuación, se describe la estructura y las funcionalidades principales del frontend:
Estructura del Frontend
1.	Punto de Entrada:
o	Archivo: src/main.tsx
o	Descripción: Este archivo es el punto de entrada de la aplicación React. Aquí se monta el componente raíz en el DOM.
2.	Páginas:
o	Archivos: src/pages/HomePage.tsx, src/pages/DeviceDetailPage.tsx, src/pages/SignInPage.tsx, src/pages/SignUpPage.tsx
o	Funciones Importantes:
	HomePage: Muestra la lista de dispositivos.
	DeviceDetailPage: Muestra los detalles de un dispositivo específico.
	SignInPage: Página de inicio de sesión.
	SignUpPage: Página de registro de usuarios.
3.	Componentes:
o	Archivos: src/components/DeviceList.tsx, src/components/Navbar.tsx
o	Funciones Importantes:
	DeviceList: Componente que muestra una lista de dispositivos.
	NavBar: Barra de navegación que incluye enlaces a diferentes páginas y opciones de autenticación.
4.	API Services:
o	Archivos: src/api/deviceService.ts, src/api/commentService.ts
o	Funciones Importantes:
	obtenerDispositivos: Función para obtener la lista de dispositivos desde el backend.
	createComment, deleteComment, updateComment: Funciones para manejar comentarios (crear, eliminar, actualizar).
5.	Estado Global:
o	Archivo: src/store/authStore.ts
o	Funciones Importantes:
	useAuthStore: Hook para manejar el estado de autenticación de usuarios.
6.	Configuración de Estilos:
o	Archivo: tailwind.config.js
o	Descripción: Configuración de Tailwind CSS para el diseño de la aplicación.
Funcionalidades Principales
1.	Autenticación de Usuarios:
o	Utiliza el estado global manejado por useAuthStore para verificar si un usuario está autenticado.
o	Las páginas de inicio de sesión y registro permiten a los usuarios autenticarse y crear nuevas cuentas.
2.	Manejo de Dispositivos:
o	La página HomePage muestra una lista de dispositivos utilizando el componente DeviceList.
o	La página DeviceDetailPage muestra los detalles de un dispositivo específico, incluyendo su nombre, descripción e imagen.
3.	Manejo de Comentarios:
o	Las funciones createComment, deleteComment y updateComment permiten a los usuarios crear, eliminar y actualizar comentarios en los dispositivos.
4.	Navegación:
o	Utiliza React Router para manejar la navegación entre diferentes páginas de la aplicación.
o	El componente NavBar proporciona enlaces a las páginas principales y opciones de autenticación.
Variables de Entorno
•	Archivo: .env
•	Contiene las variables necesarias para la configuración del entorno de desarrollo.
Scripts Disponibles
•	Archivo: package.json
•	Scripts Importantes:
o	npm run dev: Inicia el servidor de desarrollo.
o	npm run build: Construye la aplicación para producción.
o	npm run lint: Ejecuta ESLint para encontrar y arreglar problemas en el código.
o	npm run preview: Previsualiza la aplicación construida.
Este frontend está diseñado para proporcionar una interfaz de usuario intuitiva y responsiva, permitiendo a los usuarios explorar dispositivos, ver detalles y manejar comentarios de manera eficiente.




