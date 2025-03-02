// Lista para los nombres
const listaNombres = [];

// Función que agrega amigos
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();  // Elimina espacios en blanco al inicio y final

    // Validación: Si está vacío, muestra la alerta y no añade nada
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;  // Detiene la función si el campo está vacío
    }

    // Si es válido, añade el nombre a la lista
    listaNombres.push(nombre);

    // Limpiar el campo
    inputNombre.value = "";

    // Mostrar la lista actualizada
    mostrarLista();
}

// Función para mostrar los nombres en la lista
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpia el contenido previo

    // Recorremos el arreglo y creamos un <li> por cada nombre
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

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";  // Limpiamos el resultado anterior

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `🎉 El amigo secreto es: ${nombreSorteado}! 🎁`;
    resultado.appendChild(itemResultado);
}
