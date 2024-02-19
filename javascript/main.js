let ingreso = prompt(
    "Selecciona tu condicion \n 1-Riesgo Inmediato \n 2-Urgente \n 3-No Urgente"
);

if (ingreso == "1") {
    alert("Ingreso Inmediato");
}
else if (ingreso == "2") {
    alert("Tiempo de espera: 15 minutos");
}
else if (ingreso == "3") {
    alert("Tiempo de espera: 30 minutos")
}



const elementos = ['Riesgo Inmediato', 'Urgente', 'No Urgente'];

for (let i = 0; i < elementos.length; i++) {
    let prioridad;

        if (elementos[i] === 'Riesgo Inmediato') {
        prioridad = 'Alta';
        } else if (elementos[i] === 'Urgente') {
        prioridad = 'Media';
        } else {
        prioridad = 'Baja';
    }
    
    console.log(`${elementos[i]} Tiene prioridad ${prioridad}`);
}


function anunciarse(nombre) {
    console.log(nombre);
}

var nombrePaciente = prompt("Ingresa DNI y nombre para registrarte:");

anunciarse(nombrePaciente);