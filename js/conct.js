const persona = {
    id: 0,
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    ciudad: '',
    pais: ''
};

function processConctForm(e) {
    e.preventDefault(); // Evitamos el envío del formulario

    // Asignamos los valores del formulario al objeto persona
    persona.nombres = document.forms["conctmortgage"]["nombre"].value;
    persona.apellidos = document.forms["conctmortgage"]["apellido"].value;
    persona.telefono = document.forms["conctmortgage"]["numberphone"].value;
    persona.email = document.forms["conctmortgage"]["correo"].value;
    persona.ciudad = document.forms["conctmortgage"]["city"].value;
    persona.pais = document.forms["conctmortgage"]["country"].value;

    // Si el ID es 0, asignamos un nuevo ID único basado en timestamp
    if (persona.id === 0) {
        persona.id = Date.now();
    }

    // Convertimos el objeto persona a JSON y lo guardamos en localStorage
    let personajson = JSON.stringify(persona);
    localStorage.setItem(persona.id, personajson);

    alert("Datos guardados con éxito");

    // Reiniciamos el formulario y el objeto persona
    document.forms["conctmortgage"].reset();
    persona.id = 0;

    // Actualizamos la lista de contactos
    listaconctactos();
}

function listaconctactos() {
    let dinamicTable = "<table class='table'>"; // Iniciamos la tabla
    dinamicTable += "<tr>";
    dinamicTable += "<th>Orden</th>";  // Columna para el orden del array
    dinamicTable += "<th>Nombres</th>";
    dinamicTable += "<th>Apellidos</th>";
    dinamicTable += "<th>Telefonos</th>";
    dinamicTable += "<th>Email</th>";
    dinamicTable += "<th>Accion</th>";
    dinamicTable += "</tr>";

    // Obtenemos todas las llaves de localStorage
    let savePerson = allStorge(); // Obtenemos los datos almacenados

    for (let i = 0; i < savePerson.length; i++) {
        dinamicTable += "<tr>";
        let personajson = JSON.parse(savePerson[i]);
        dinamicTable += "<td>" + (i + 1) + "</td>"; // Usamos el índice del array para el orden
        dinamicTable += "<td>" + personajson.nombres + "</td>";
        dinamicTable += "<td>" + personajson.apellidos + "</td>";
        dinamicTable += "<td>" + personajson.telefono + "</td>";
        dinamicTable += "<td>" + personajson.email + "</td>";
        dinamicTable += "<td><a href='./detalles.html?id=" + personajson.id + "'>Ver</a> | <a href='javascript:editarContactos(" + personajson.id + ");'>Editar</a> | <a href='javascript:eliminarContacto(" + personajson.id + ");'>Eliminar</a></td>";
        dinamicTable += "</tr>";
    }

    dinamicTable += "</table>"; // Cerramos la tabla
    document.getElementById("tableconct").innerHTML = dinamicTable; // Insertamos la tabla en el HTML
}

function verDetalles() {
    let contactoId = obtenerParametroUrl();
    if (!contactoId) {
        console.error("No se encontró el parámetro 'id' en la URL");
        return;
    }

    let contacto = localStorage.getItem(contactoId);
    if (!contacto) {
        console.error("No se encontró ningún contacto con el ID proporcionado");
        return;
    }

    let personajson = JSON.parse(contacto);
    document.getElementById("nombre").innerText = personajson.nombres;
    document.getElementById("apellido").innerText = personajson.apellidos;
    document.getElementById("numberphone").innerText = personajson.telefono;
    document.getElementById("correo").innerText = personajson.email;
    document.getElementById("country").innerText = personajson.pais;
    document.getElementById("city").innerText = personajson.ciudad;
}

function editarContactos(id) {
    let contacto = localStorage.getItem(id);
    if (contacto) {
        let personajson = JSON.parse(contacto);
        document.getElementById("nombre").value = personajson.nombres;
        document.getElementById("apellido").value = personajson.apellidos;
        document.getElementById("numberphone").value = personajson.telefono;
        document.getElementById("correo").value = personajson.email;
        document.getElementById("country").value = personajson.pais;
        document.getElementById("city").value = personajson.ciudad;
        persona.id = id;
    } else {
        console.error("No se encontró ningún contacto con el ID proporcionado");
    }
}

function eliminarContacto(id) {
    // Eliminamos el contacto del localStorage
    localStorage.removeItem(id);

    // Actualizamos la lista de contactos
    listaconctactos();

    alert("Contacto eliminado con éxito");
}

// Función para obtener el parámetro 'id' de la URL
function obtenerParametroUrl() {
    let url = window.location.href;
    let paramString = url.split('?')[1];
    if (!paramString) return null; // Si no hay parámetros en la URL, retorna null
    let queryString = new URLSearchParams(paramString);
    let parameterID = null;

    for (let pair of queryString.entries()) {
        if (pair[0] === 'id') {
            parameterID = pair[1]; // Obtenemos el valor del parámetro 'id'
        }
    }

    return parameterID;
}

// Función para obtener todos los datos de localStorage
function allStorge() {
    let values = [];
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
        values.push(localStorage.getItem(keys[i])); // Obtenemos cada valor
    }
    return values;
}
