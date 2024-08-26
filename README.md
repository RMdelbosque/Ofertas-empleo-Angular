# Plataforma de Ofertas de Empleo en Angular

## Descripción del Proyecto

Este proyecto consiste en el desarrollo de una plataforma web de ofertas de empleo utilizando Angular. La aplicación permite a los usuarios visualizar ofertas de empleo sin necesidad de estar registrados, mientras que los administradores pueden gestionar las ofertas disponibles (crear, eliminar y visualizar) a través de una interfaz segura y sencilla. El proyecto está diseñado con Bootstrap para lograr un diseño responsive y amigable, y todas las interacciones con los datos se realizan mediante un API implementado con JHipster.

## Funcionalidades

1. **Home**
   - Pantalla principal donde se listan todas las ofertas de empleo disponibles.
   - Cada oferta se muestra con su título en una estructura tabular.
   - Incluye un enlace "Ver" para consultar los detalles completos de cada oferta.
   - La pantalla es accesible para cualquier usuario sin necesidad de registro.
   - Enlace directo a la pantalla de Login para administradores.

2. **Oferta**
   - Pantalla de detalles de una oferta específica.
   - Muestra información detallada como el título, descripción, empresa, ciudad, salario y un correo electrónico para el envío de CV.
   - Incluye un enlace para regresar a la pantalla Home.
   - Disponible para todos los usuarios sin necesidad de registro.

3. **Login**
   - Pantalla destinada exclusivamente a administradores con credenciales preestablecidas.
   - Los administradores pueden iniciar sesión para gestionar las ofertas.
   - Redirección automática a la pantalla de gestión de ofertas si las credenciales son correctas.
   - Muestra un mensaje de error si las credenciales son incorrectas.

4. **Ofertas (Administración)**
   - Pantalla para que los administradores gestionen las ofertas de empleo.
   - Muestra un listado de todas las ofertas con opciones para eliminar cada una.
   - Enlace para acceder a la pantalla de nueva oferta y crear una nueva oferta de empleo.

5. **Nueva Oferta**
   - Formulario para crear una nueva oferta de empleo.
   - Campos: Título, Descripción, Empresa, Salario, Ciudad, Email.
   - Todos los campos son obligatorios y cuentan con validaciones de longitud y formato (especialmente el email).
   - El formulario está diseñado con Bootstrap para una maquetación clara y responsiva.

## Tecnologías Utilizadas

- **Angular**: Framework principal para el desarrollo de la aplicación.
- **Bootstrap**: Utilizado para el diseño responsivo de las pantallas.
- **API REST con JHipster**: Para la gestión de datos (ofertas y autenticación).
- **HTML/CSS**: Para la estructura y estilo de las páginas.
