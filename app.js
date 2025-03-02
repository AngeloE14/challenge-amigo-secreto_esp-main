// Lista donde se guardan los amigos
const amigos = [];

// Expresión regular para validar que el nombre solo tenga letras y espacios
const regexNombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

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

    // Validar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado. Por favor, ingresa un nombre diferente.");
        return;  // Salir de la función si el nombre ya está en la lista
    }

    // Si aprueba todas las validaciones, se procede a  agregar el nombre a la lista
    amigos.push(nombre);

    // Limpia el campo de texto
    inputNombre.value = "";

    // Mostrar la lista
    mostrarListaAmigos();
}

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

function sortearAmigo() {
    // Valida que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Selecciona un índice al azar entre 0 y la cantidad de amigos - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";  // Limpiar resultado anterior

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `🎉 El amigo secreto es: ${amigoSeleccionado}! 🎁`;
    listaResultado.appendChild(itemResultado);
}

