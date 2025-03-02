// Lista donde guardamos los nombres
const listaNombres = [];

// Función para agregar nombres
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();

    // Verificamos si el campo está vacío
    if (!nombre) {
        // Mostrar la alerta solo si el campo está vacío
        return;
    }

    // Añadir nombre a la lista si no está vacío
    listaNombres.push(nombre);

    // Limpiar el campo de texto
    inputNombre.value = "";

    // Mostrar la lista actualizada
    mostrarLista();
}

// Función para mostrar los nombres en la lista
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista anterior

    // Crear un <li> por cada nombre en la lista
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

    // Selección aleatoria de un nombre
    const indiceSorteado = Math.floor(Math.random() * listaNombres.length);
    const nombreSorteado = listaNombres[indiceSorteado];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";  // Limpiar resultados anteriores

    // Crear un <li> para el resultado
    const itemResultado = document.createElement("li");
    itemResultado.textContent = `🎉 El amigo secreto es: ${nombreSorteado}! 🎁`;
    resultado.appendChild(itemResultado);
}

// Conectar los botones con las funciones
document.querySelector(".button-add").addEventListener("click", function() {
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();

    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
    } else {
        agregarAmigo();
    }
});

document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
