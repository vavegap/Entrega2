const lista = document.getElementById("listaPersonas");
const input = document.getElementById("apellidoInput");
const agregarBtn = document.getElementById("agregarBtn");
const foto = document.getElementById("fotoPersona");

let personas = [];

agregarBtn.addEventListener("click", () => {
    const apellido = input.value.trim();
    if (apellido !== "") {
        personas.push(apellido);
        mostrarLista();
        input.value = "";
    }
});

function mostrarLista() {
    lista.innerHTML = "";
    personas.forEach((apellido, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = apellido;
        span.addEventListener("click", () => mostrarFoto(apellido));

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const editarBtn = document.createElement("button");
        editarBtn.textContent = "Editar";
        editarBtn.onclick = () => editarApellido(index);

        const elinarBtn = document.createElement("button");
        elinarBtn.textContent = "Eliminar";
        elinarBtn.onclick = () => {
            personas.splice(index, 1);
            mostrarLista();
            foto.style.display = "none";
        };

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editarBtn);
        li.appendChild(elinarBtn);

        lista.appendChild(li);
    });
}

function mostrarFoto(apellido) {
    foto.src = `imagenes/${apellido.toLowerCase()}.jpg`;
    foto.style.display = "block";
}

function editarApellido(index) {
    const nuevoApellido = prompt("Editar apellido:", personas[index]);
    if (nuevoApellido) {
        personas[index] = nuevoApellido.trim();
        mostrarLista();
    }
}


