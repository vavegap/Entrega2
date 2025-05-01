const lista= document.getelementbyid("listaPersonas");
const input= document.getelementbyid("apellisdoInput");
const agregarBtn= document.getelementbyid("agregarBtn");
const foto= document.getelementbyid("fotoPersona");

let persona = [];

agregarBtn.addEventListener("click",() => {
     const apellido = input.value.trim();
    if (apellido !== "") {
        personas.push(apellido);
        mostrarLista();
        input.value = "";
    }
});


