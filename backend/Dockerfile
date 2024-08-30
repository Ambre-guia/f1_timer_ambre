# Dockerfile for the backend
# Utilisez une image Node.js officielle comme image de base
FROM node:14

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste des fichiers du backend
COPY . .

# Exposer le port sur lequel le backend va écouter
EXPOSE 5000

# Commande pour lancer l'application backend
CMD ["npm", "start"]
