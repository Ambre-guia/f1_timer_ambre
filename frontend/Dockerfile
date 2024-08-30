# Dockerfile for the frontend
# Utilisez une image Node.js officielle comme image de base
FROM node:14

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste des fichiers du frontend
COPY . .

# Construire l'application frontend
RUN npm run build

# Utiliser une image Nginx pour servir l'application frontend
FROM nginx:alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Exposer le port 80 pour le serveur web
EXPOSE 80

# Lancer le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
