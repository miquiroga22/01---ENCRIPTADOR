// Obtener el textarea
var textarea = document.querySelector("textarea");

// Añadir un evento de enfoque al textarea
textarea.addEventListener("focus", function () {
  // Limpiar el contenido del textarea si es igual al texto predeterminado
  if (textarea.value === "Ingrese el texto aqui") {
    textarea.value = "";
  }
});

function ocultarmensaje(valor) {
  document.getElementById("text-result").innerHTML = valor;
  document.getElementById("text-result").style.padding = "30px";
  document.getElementById("text-result").style.width = "100%";
  document.getElementById("mensaje-encontrado").style.display = "none";
}

// Función para encriptar el texto según las reglas especificadas
function encriptarTexto(texto) {
  // Reemplazamos las letras según las reglas especificadas
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  return texto;
}

// Función para manejar el evento de encriptar
function encriptar() {
  let textarea = document.querySelector("textarea");
  let textoOriginal = textarea.value.toLowerCase(); // Convertimos todo a minúsculas

  // Encriptamos texto
  let textoEncriptado = encriptarTexto(textoOriginal);

  // Mostramos el texto encriptado en el elemento con id "text-result"
  document.getElementById("text-result").innerText = textoEncriptado;

  // Mostramos el botón de copiar
  document.getElementById("botoncopiar").style.display = "inline";

  // Ocultamos el mensaje de información
  document.getElementById("mensaje-encontrado").style.display = "none";
}

// Función para desencriptar el texto según las reglas especificadas
function desencriptarTexto(texto) {
  // Revertimos las transformaciones de las letras según las reglas especificadas
  texto = texto.replace(/ufat/g, "u");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/enter/g, "e");

  return texto;
}

// Función para manejar el evento de desencriptar
function desencriptar() {
  let textarea = document.querySelector("textarea");
  let textoEncriptado = textarea.value.toLowerCase(); // Convertimos todo a minúsculas

  // Desencriptamos el texto
  let textoDesencriptado = desencriptarTexto(textoEncriptado);

  // Mostramos el texto desencriptado en el elemento con id "text-result"
  document.getElementById("text-result").innerText = textoDesencriptado;

  // Mostramos el botón de copiar
  document.getElementById("botoncopiar").style.display = "inline";

  // Ocultamos el mensaje de información
  document.getElementById("mensaje-encontrado").style.display = "none";
}

// Función para copiar el texto en el textarea al portapapeles
function copiarTexto() {
  var textoCopiar = document.getElementById("text-result").innerText;
  navigator.clipboard
    .writeText(textoCopiar)
    .then(() => alert("¡Texto copiado al portapapeles!"))
    .catch((err) => console.error("Error al intentar copiar el texto: ", err));
}
