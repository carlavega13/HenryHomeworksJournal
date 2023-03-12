const mostrarAmigos = () => {
  $("#contenedor").empty();
  $.get("http://localhost:5000/amigos", (response) => {
    for (const user of response) {
      $(`<div class ="card">
                <h2 id="nombre">Nombre: ${user.name} </h2>
                <ul>
                <li><h5 class="datos">Age: ${user.age} </h5></li>
                <li><h5 class="datos">Email: ${user.email} </h5></li>
                </ul>
                </div>`).appendTo($("#contenedor"));
    }
  });
};
const buscarAmigo = () => {
  const id = $("#input")[0].value;
  if ($("#amigo").children()[0] !== undefined) $("#amigo").empty();

  if (id === "") return;
  $.get(`http://localhost:5000/amigos/${id}`, (response) => {
    $(`<span> Se busco por ID a: ${response.name}</span>`).appendTo("#amigo");
  });
  $("#input")[0].value = "";
};
const eliminarAmigo = () => {
  const id = $("#inputDelete")[0].value;
  if ($("#success").children()[0] !== undefined) $("#success").empty();
  if (id === "") return;
  $.ajax({
    type: "DELETE",
    url: `http://localhost:5000/amigos/${id}`,
    success: (response) => {
      console.log(response);
      $(`<span>Tu amigo fue borrado con exito</span>`).appendTo("#success");
    },
  });
  mostrarAmigos();
  $("#inputDelete")[0].value = "";
};

$("#boton").click(mostrarAmigos);
$("#search").click(buscarAmigo);
$("#delete").click(eliminarAmigo);
