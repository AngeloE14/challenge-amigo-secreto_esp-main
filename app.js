// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde guardamos los nombres
const listaNombres = [];

// Función para agregar nombres
function agregarNombre() {
    const inputNombre = document.getElementById("nombreAmigo");
    const nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
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
    const resultado = document.getElementById("resultadoSorteo");
    resultado.textContent = `🎉 El amigo secreto es: ${nombreSorteado}! 🎁`;
}

// Conectar los botones con las funciones
document.getElementById("btnAgregar").addEventListener("click", agregarNombre);
document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
