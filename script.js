const lista = document.getElementById("listaPersonas");
const input = document.getElementById("apellidoInput");
const agregarBtn = document.getElementById("agregarBtn");
const carouselInner = document.getElementById("carouselInner");

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

    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = apellido;
    span.addEventListener("click", () => mostrarFoto(apellido));

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input me-2";

    const editarBtn = document.createElement("button");
    editarBtn.textContent = "Editar";
    editarBtn.className = "btn btn-warning btn-sm shadow";
    editarBtn.onclick = () => editarApellido(index);

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.className = "btn btn-danger btn-sm shadow";
    eliminarBtn.onclick = () => {
      personas.splice(index, 1);
      mostrarLista();
    };

    const btnGroup = document.createElement("div");
    btnGroup.appendChild(editarBtn);
    btnGroup.appendChild(eliminarBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnGroup);

    lista.appendChild(li);
  });
}

function mostrarFoto(apellido) {
  const imgPath = `imagenes/${apellido.toLowerCase()}.jpg`;
  const carouselItem = document.createElement("div");
  carouselItem.className = "carousel-item";

  const img = document.createElement("img");
  img.src = imgPath;
  img.className = "d-block w-100";
  img.alt = apellido;

  carouselItem.appendChild(img);

  if (carouselInner.children.length === 0) {
    carouselItem.classList.add("active");
  }

  carouselInner.appendChild(carouselItem);
}

function editarApellido(index) {
  const nuevoApellido = prompt("Editar apellido:", personas[index]);
  if (nuevoApellido) {
    personas[index] = nuevoApellido.trim();
    mostrarLista();
  }
}
