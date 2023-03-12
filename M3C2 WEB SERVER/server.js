var fs = require("fs");
var http = require("http");
// var all = require("./utils/dogsData.json");

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  http

    .createServer((req, res) => {
      // res.writeHead(200, { "Content-Type": "text/plain" });
      // res.end("ANDA");
      switch (req.url) {
        case "/api":
          fs.readFile("./utils/dogsData.json", (err, data) => {
            if (err) {
              res.writeHead(404, { "Content-Type": "text/plain" });
              res.end("json not found");
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
          });
          return;
        case "/allDogs":
          fs.readFile("./utils/allDogs.html", "utf-8", (err, data) => {
            if (err) {
              res.writeHead(404, { "Content-Type": "text/plain" });
              res.end("html not found");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          });
          return;
        default:
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Route not found");
          return;
      }
    })
    .listen(PORT, "localhost");
