// document.addEventListener("DOMContentLoaded", function() {
//   // Evento de clic en el enlace del ícono de usuario
//   document.getElementById("open-login-modal").addEventListener("click", function(event) {
//     event.preventDefault();
//     // Agregar la clase "open" para mostrar la ventana modal
//     document.getElementById("modal-login").classList.add("open");
//   });

//   // Evento de clic en el botón de cerrar
//   document.getElementById("close-login-modal").addEventListener("click", function() {
//     // Quitar la clase "open" para ocultar la ventana modal
//     document.getElementById("modal-login").classList.remove("open");
//   });

//   // Evento de envío del formulario de inicio de sesión
//   document.getElementById("login-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     var email = document.getElementById("exampleInputEmail1").value;
//     var password = document.getElementById("exampleInputPassword1").value;

//     // Validar las credenciales
//     if (
//       (email === "correo1@example.com" && password === "contraseña1") ||
//       (email === "correo2@example.com" && password === "contraseña2") ||
//       (email === "correo3@example.com" && password === "contraseña3")
//     ) {
//       // Acción cuando las credenciales son válidas
//       console.log("Inicio de sesión exitoso");
//       // Realizar la redirección manualmente
//       window.location.href = "admin2.html";
//     } else {
//       // Acción cuando las credenciales son inválidas
//       console.log("Credenciales incorrectas");
//       // Mostrar mensaje de error o realizar alguna otra acción
//       alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
//     }
//   });
// });
// $(document).ready(function() {
//   // Mostrar modal al hacer clic en el ícono de usuario
//   $('#user-icon').click(function() {
//     $('#login-modal').modal('show');
//   });
  
//   // Cerrar modal al hacer clic fuera de él
//   $(document).on('click', function(e) {
//     if ($(e.target).is('#login-modal')) {
//       $('#login-modal').modal('hide');
//     }
//   });
// });
