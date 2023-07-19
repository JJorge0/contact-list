// Definición de la lista de contactos
let listaDeContactos = [];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(id, nombres, apellidos, telefono, ubicaciones, ciudad, direccion) {
  const contacto = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: ubicaciones,
    ciudad: ciudad,
    direccion: direccion
  };
  
  listaDeContactos.push(contacto);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
  listaDeContactos = listaDeContactos.filter(contacto => contacto.id !== id);
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  listaDeContactos.forEach(contacto => {
    console.log("ID: " + contacto.id);
    console.log("Nombre completo: " + contacto.nombres + " " + contacto.apellidos);
    console.log("Teléfono: " + contacto.telefono);
    console.log("Ubicaciones: " + contacto.ubicaciones);
    console.log("Ciudad: " + contacto.ciudad);
    console.log("Dirección: " + contacto.direccion);
    console.log("----------------------------------");
  });
}

// Función para actualizar un contacto existente en la lista
function actualizarContacto(id, nuevosDatos) {
  const indice = listaDeContactos.findIndex(contacto => contacto.id === id);
  
  if (indice !== -1) {
    listaDeContactos[indice] = { ...listaDeContactos[indice], ...nuevosDatos };
  }
}

// Emplear
agregarContacto(1, "Tony", "stark", "3141516", ["Casa", "Trabajo"], "tokio", "avenida siempre viva 456");
agregarContacto(2, "Bruce", "Banner", "615141", ["Casa"], "lima", "avenida siempre viva 123");

imprimirContactos();

borrarContacto(2);
imprimirContactos();

actualizarContacto(1, { telefono: "555555555", ciudad: "hawai",  });
imprimirContactos();