# 1. Configuración del Entorno
Primero, asegúrate de tener instalado Node.js y npm (Node Package Manager) en tu sistema. Puedes descargarlos desde nodejs.org.

# 2. Creación del Proyecto

Abre tu terminal y sigue estos pasos:

### Crea un nuevo directorio para tu proyecto:
```bash
mkdir sql-app
cd sql-app
```

### Inicia un nuevo proyecto de Node.js:

```bash
npm init -y
```
### Instala TypeScript:

```
npm install typescript --save-dev
```

### Inicializa un proyecto TypeScript:

```
npx tsc --init
```
Instala ts-node para ejecutar TypeScript directamente sin compilarlo a JavaScript:

```
npm install ts-node --save-dev
```

Instala @types/node para obtener las definiciones de tipos para Node.js:

```
npm install @types/node --save-dev
```

# 3. Configuración del Proyecto TypeScript
Edita el archivo tsconfig.json para ajustar la configuración de TypeScript según tus necesidades. Algunas opciones comunes son:

- Establecer "target" a "es6" o superior.
- Configurar "moduleResolution" a "node".
- Habilitar "outDir" para especificar el directorio de salida para los archivos compilados.

# 4. Estructura del Proyecto

Crea una estructura básica de directorios para tu proyecto. Por ejemplo:

```
/mi-proyecto-node
    /src
        - index.ts
    /dist
```

# 5. Script de Inicio

En tu archivo package.json, configura un script para iniciar tu aplicación. Añade algo como lo siguiente en la sección "scripts":

```
"scripts": {
    "start": "ts-node src/index.ts",
    "build": "tsc",
    "serve": "node dist/index.js"
}
```