const http = require("http");

// On rajoute l’import de notre application Express
const app = require("./app");

// Pour dire sur quel port l'app Express va tourner
app.set("port", {}.PORT || 3002);

// On va lancer notre serveur via Express (qui va recevoir et envoyer la requête et la réponse)
const server = http.createServer(app);

server.listen({}.PORT || 3000);
