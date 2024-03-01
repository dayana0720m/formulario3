
function enviarFormulario() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    // Puedes realizar acciones con los datos aquí, como enviarlos a un servidor

    alert('Registro exitoso:\nNombres: ' + nombres + '\nApellidos: ' + apellidos + '\nCorreo: ' + correo);
}
