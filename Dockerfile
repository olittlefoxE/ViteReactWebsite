# Verwende ein Node.js-Image als Basis
FROM node:18-alpine

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Projektverzeichnisses in das Arbeitsverzeichnis
COPY . .

# Baue die Anwendung für die Produktion
RUN npm run build

# Verwende ein leichtgewichtiges Webserver-Image, um die Anwendung zu dienen
FROM nginx:alpine

# Kopiere die gebauten Dateien in das Verzeichnis, das von Nginx bedient wird
COPY --from=0 /app/build /usr/share/nginx/html

# Exponiere den Port 80, auf dem Nginx läuft
EXPOSE 80

# Starte Nginx
CMD ["nginx", "-g", "daemon off;"]