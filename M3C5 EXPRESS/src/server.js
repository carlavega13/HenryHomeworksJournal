const express = require("express");

let publications = [];
let i = 1;
const server = express();

server.use(express.json());
//!  RUTA /POSTS    HTTP POST  !!!
server.post("/posts", (req, res) => {
  //?  AGARRO LAS PROPIEDADES DEL BODY
  const { author, title, contents } = req.body;
  //?    PREGUNTO SI TENGO TODOS LOS DATOS NECESARIOS
  if (author && title && contents) {
    //?   GUARDO UN OBJETO CON LOS DATOS PROVISTOS
    console.log(publications);
    const obj = {
      author,
      title,
      contents,
      id: i++,
    };
    //? PUSHEO MI OBJETO EN MI "BASE DE DATOS"
    publications.push(obj);
    //?  ENVIO RESPUESTA DEL OBJETO
    return res.status("200").json(obj);
  } else {
    //?  ESCRIBO EL ERROR
    const error = {
      error: `No se recibieron los parámetros necesarios para crear la publicación`,
    };
    //?   ENVIO EL ERROR
    return res.status("400").json(error);
  }
});

//!  RUTA /POSTS/QUERY    HTTP GET  !!!
server.get("/posts", (req, res) => {
  //? AGARRO POR QUERY LAS PORPIEDADESD DE MI URL
  const { author, title } = req.query;

  //?  BUSCO EN UNA NUEVA CONST SI TENGO  EL AUTHOR Y EL TITLE
  const found = publications.find((post) => {
    post.author === author && post.title === title;
  });
  console.log(found);
  //? SI  TENGO ALGO EN FOUND RETORNO
  if (found) {
    return res.json(found);
  } else {
    //? SI NO TENGO ALGO EN FOUND RETORNO
    return res.status(400).json({
      error: "No existe ninguna publicación con dicho título y autor indicado",
    });
  }
});

//!  RUTA /POSTS/:AUTHOR    HTTP GET  !!!
server.get("/posts/:author", (req, res) => {
  //? SACO EL PARAMETRO DE LA URL
  const author = req.params;
  //? BUSCO SI TENGO PUBLICACION CON EL AUTOR Y LO GUARRDO
  const found = publications.find((post) => {
    post.author === author;
  });
  if (found) {
    return res.json(found);
  } else {
    return res
      .status(400)
      .json({ error: "No existe ninguna publicación del autor indicado" });
  }
});

//! RUTA /POSTS/:ID    HTTP PUT  !!!
server.put("/posts/:id", (req, res) => {
  //? SACO EL PARAMETRO DE LA URL
  const id = req.params;
  //? SACO VALORES DEL BODY
  const { title, contents } = req.body;
  //? SI ME FALTA ALGUN PARAMETRO RETORNO EL ERROR
  if (!id && !title && !contents) {
    return res.status("400").json({
      error:
        "No se recibieron los parámetros necesarios para modificar la publicación",
    });
  }
  //? BUSCO SI TENGO ALGUNA PUBLICACION CON ESE ID
  for (let i = 0; i < publications.length; i++) {
    if (publications[i].id == id) {
      publications[i].title = title;
      publications[i].contents = contents;
      return res.json(publications[i]);
    }
  }
  //? SI LLEGUE ACA ES PORQUE TENGO TODO LOS CAMPOS PERO NO MATCHEE CON NINGUNA PUBLICACION
  return res.status("400").json({
    error:
      "No se recibió el id correcto necesario para modificar la publicación",
  });
});

//! RUTA /POSTS/:ID   HTTP DELETE !!!
server.delete("/posts/:id", (req, res) => {
  //? SACO EL ID DE LA URL PARAMS
  const id = req.params;

  //? SI NO ME PASARON EL ID EN PARAMS RETORNO ERROR
  if (!id) {
    return res
      .status("400")
      .json({ error: "No se recibió el id de la publicación a eliminar" });
  }

  //? CREO MI ARRAY YA FILTRADO
  const postsFiltered = publications.filter((post) => post.id !== Number(id));

  //? SI LOS 2 ARRAYS TIENEN LENGTH DISTINTAS RETORNO SUCCES
  if (postsFiltered.length !== publications.length) {
    publications = postsFiltered;
    return res.json({ success: true });
  } else {
    //
    //? LOS 2 ARRAYS SON IGUALES ENTONCES RETORNO ERROR
    return res.status("400").json({
      error:
        "No se recibió el id correcto necesario para eliminar la publicación",
    });
  }
});
//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = {
  publications,
  server,
};
