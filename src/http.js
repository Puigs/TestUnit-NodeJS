var http = require("http");
const routes = new Map();

function about(res) {
    res.write("about");
    res.end();
}

function config(res) {
    res.write("config");
    res.end();
}

function error204(res) {
    res.writeHead(204).end();
}

routes.set("/about", about);
routes.set("/config", config);
routes.set("/favicon.ico", error204);

const server = http.createServer(function(req, res) {
    var url = req.url;
    
    try {
        routes.get(url)(res);
    } catch (e) {
        console.log("The routes " + url + " doesn't exist");
        res.writeHead(404).end();
    }
});

server.listen(8000, () => {
    console.log("The server is runnig on 127.0.0.1:8000");
});

/*
Les navigateurs essaieront par défaut de demander /favicon.icoà la racine d'un nom d'hôte, afin d'afficher une icône dans l'onglet du navigateur.

Si vous souhaitez éviter cette demande de renvoyer un 404, vous pouvez soit:

Fournissez un favicon.icofichier disponible à la racine de votre site.
Utilisez un module tel que serve-favicon pour diriger les requêtes vers un fichier spécifique.
Attrapez la favicon.icodemande et envoyez un 204 No Contentstatut:

app.get('/favicon.ico', (req, res) => res.status(204));
*/

/*function get_simple(url) {
    http.request(url, res => {
        let data = "";
        res.on("data", d => {
            data += d
        })
        res.on("end", () => {
            console.log(data)
            return data;
        })
    }).end();
}*/
//exports.get_simple = get_simple;