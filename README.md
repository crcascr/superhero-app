# Superhero App

Una aplicación web moderna construida con Next.js y TypeScript que permite explorar información detallada sobre superhéroes.

## 🚀 Tecnologías Utilizadas

- **Framework Frontend:** [Next.js 15.3.2](https://nextjs.org/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **UI Framework:** [Tailwind CSS](https://tailwindcss.com/)
- **Gestión de Estado:** React Hooks
- **Cliente HTTP:** [Axios](https://axios-http.com/)
- **Iconos:** [React Icons](https://react-icons.github.io/react-icons/)

## 📱 Funcionalidades

- Visualización de una lista paginada de superhéroes.
- Modal con información detallada de cada superhéroe.
- Estadísticas visuales de poderes.
- Diseño moderno, responsivo y modo oscuro basado en la configuración del navegador.
- Manejo de errores y recarga de datos.
- Búsqueda eficiente y navegación fluida.

## 🛠️ Instalación

### **Desde repositorio**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/crcascr/superhero-app.git
   cd superhero-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` con la URL de la API:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api
   ```
   > Puedes cambiar la URL si tienes otra API compatible.

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### **Desde archivo ZIP**

1. Descarga y descomprime el archivo ZIP del proyecto en la carpeta de tu preferencia.

2. Abre una terminal y navega hasta la carpeta descomprimida:
   ```bash
   cd ruta/del/proyecto/superhero-app
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📦 Estructura del Proyecto

```
superhero-app/
├── app/                 # Entrypoint y páginas Next.js
├── components/          # Componentes reutilizables de React
├── config/              # Configuración de entorno
├── constants/           # Constantes de la aplicación (rutas, etc)
├── hooks/               # Custom React hooks
├── interfaces/          # Interfaces TypeScript
├── services/            # Servicios de acceso a la API
├── utils/               # Funciones utilitarias
├── public/              # Recursos estáticos
├── next.config.ts       # Configuración de Next.js
└── package.json         # Dependencias y scripts
```

## 🌐 API Utilizada

La aplicación consume la siguiente API pública:
```
https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api
```
- **Endpoints principales:**
  - `/heroes?page={page}&size={size}`: Listado paginado de superhéroes.
  - `/hero?id={id}`: Detalle de un superhéroe.

## 🔧 Características Técnicas

- **SSR y CSR:** Renderizado híbrido con Next.js.
- **Tipado estricto:** Uso intensivo de TypeScript y tipado en toda la app.
- **Hooks personalizados:** Para la gestión de datos y estados de carga/error.
- **Tailwind CSS:** Para un diseño rápido, responsivo y con soporte de dark mode.
- **Manejo de errores:** Feedback visual y opción de reintentar peticiones.
- **Variables de entorno:** Configuración sencilla para diferentes entornos.
- **Componentización:** Código limpio y reutilizable.

## 🚀 Despliegue

### En Vercel
1. Conecta tu repositorio a [Vercel](https://vercel.com/).
2. Configura la variable de entorno `NEXT_PUBLIC_API_BASE_URL` en el dashboard de Vercel.
3. Haz deploy directamente desde la interfaz de Vercel.

### Manualmente
1. Genera el build de producción:
   ```bash
   npm run build
   ```
2. Inicia el servidor:
   ```bash
   npm start
   ```

