const nombres = () => nombreAlumno = prompt("Ingrese el nombre del alumno/a").toString();
const notas = () => notasTotal = parseInt(prompt("Ingrese la cantidad de notas que va a promediar"));
let suma = 0;

nombres();
while(nombreAlumno === ""){
    alert("No ha ingresado el nombre del alumno/a");
    nombres();
}
notas();
while(isNaN(notasTotal) || notasTotal <= 0 || notasTotal === 1) {
    alert("Error. No ingresó correctamente la cantidad de notas que va a promediar");
    notas();
}
for(i = 0; i < notasTotal; i++) {
    let nota = parseInt(prompt("Ingrese la nota"));
    while(isNaN(nota)){
        alert("No ha ingresado una nota");
        nota = parseInt(prompt("Ingrese la nota"));
    }
    suma = suma + nota;
}
let promedio = Math.round(suma / notasTotal);
if(promedio >= 7) {
    alert(`Aprobado Alumno/a: ${nombreAlumno} - Promedio: ${promedio}`); 
}else{
    alert(`Desaprobado Alumno/a: ${nombreAlumno} - Promedio: ${promedio}`); 
}

