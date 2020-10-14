

var formulario = document.getElementById('contact');

function genera_tabla(data) {
  // Obtener la referencia del elemento body
  var contenedor = document.getElementById("tabla");
  contenedor.innerHTML = "";
  console.log(data[1].nombre);
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = "<table>";
  tabla += "<thead>";
  tabla += "<tr>";
  tabla += "<th>Id</th>";
  tabla += "<th>Nombre</th>";
  tabla += "<th>Apellido</th>";
  tabla += "<th>Identificacion</th>";
  tabla += "</tr>";
  tabla += "</thead>";
        
  tabla += "<tbody>";
  // Crea las celdas
  for (var i = 0; i < data.length; i++) {
    tabla += "<tr>";
    console.log(data[i].nombre);
    tabla +="<td>"+data[i].id+"</td>";
    tabla +="<td>"+data[i].nombre+"</td>";
    tabla +="<td>"+data[i].apellido+"</td>";
    tabla +="<td>"+data[i].numid+"</td>";
    
    
    tabla += "</tr>";
  }
  tabla += "</tbody>";
  tabla += "</table>";
  contenedor.innerHTML= tabla;
  
}

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  let datos = new FormData(formulario);
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'GET',
    headers: myHeaders,
    
  }
  

  fetch('/basedatos/consultatotalpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      genera_tabla(data);

});
});


