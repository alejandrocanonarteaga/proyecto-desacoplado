# Usa la imagen oficial de Node como base
FROM node:14

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia el archivo package.json e package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto en el que la aplicación va a correr
EXPOSE 3000

# Comando para correr la aplicación
CMD ["node", "app.js"]
