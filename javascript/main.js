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