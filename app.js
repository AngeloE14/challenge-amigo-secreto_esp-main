// Lista donde guardaremos los nombres de los amigos
const amigos = [];

// Expresión regular para validar que el nombre solo tenga letras y espacios
const regexNombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

// Función para añadir un amigo a la lista
function agregarAmigo() {
    // Obtener el campo de texto donde se escribe el nombre
    const inputNombre = document.getElementById("amigo");
    // Guardar el valor, eliminando espacios extra al principio y al final
    const nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;  // Salir de la función si el nombre está vacío
    }

    // Validar que el nombre solo contenga letras y espacios
    if (!regexNombreValido.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios. No se permiten números ni caracteres especiales.");
        return;  // Salir de la función si el nombre es inválido
    }

    // Si pasa las validaciones, agregamos el nombre al arreglo
    amigos.push(nombre);

    // Limpiar el campo de texto
    inputNombre.value = "";

    // Mostrar la lista actualizada
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    // 1. Obtener el elemento de la lista (ul) donde se mostrarán los nombres
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    // 3. Recorrer el arreglo de amigos usando un bucle for
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un nuevo elemento <li> para cada amigo
        const elementoLista = document.createElement("li");
        elementoLista.textContent = amigos[i];  // Asignar el nombre al <li>

        // 5. Agregar el <li> creado dentro de la lista (ul)
        lista.appendChild(elementoLista);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Seleccionar un índice al azar entre 0 y la cantidad de amigos - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";  // Limpiar resultado anterior

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `🎉 El amigo secreto es: ${amigoSeleccionado}! 🎁`;
    listaResultado.appendChild(itemResultado);
}
