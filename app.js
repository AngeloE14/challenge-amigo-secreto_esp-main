// Lista de nombres
const listaNombres = [];

// Expresión regular para validar nombres (solo letras y espacios)
const regexNombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

// Función para agregar amigos
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();  // Elimina espacios al inicio y final

    // Validación: Si está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;  // Detiene la función
    }

    // Validación: Solo letras y espacios permitidos
    if (!regexNombreValido.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios. No se permiten números ni caracteres especiales.");
        return;
    }

    // Añadir el nombre a la lista
    listaNombres.push(nombre);

    // Limpiar el input
    inputNombre.value = "";

    // Mostrar la lista actualizada
    mostrarLista();
}

// Función para mostrar los nombres en la lista
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpia el contenido previo

    listaNombres.forEach(nombre => {
        const item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaNombres.length);
    const nombreSorteado = listaNombres[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";  // Limpiar resultado anterior

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `🎉 El amigo secreto es: ${nombreSorteado}! 🎁`;
    resultado.appendChild(itemResultado);
}
