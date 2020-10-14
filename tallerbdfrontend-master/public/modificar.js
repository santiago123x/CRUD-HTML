

var formulario = document.getElementById('contact');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');
  let id = datos.get('id');

  let myHeaders = new Headers();

  const options = {
    method: 'PUT',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente,
      'id': id
    }),
  }
  

  fetch('/basedatos/modificarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
