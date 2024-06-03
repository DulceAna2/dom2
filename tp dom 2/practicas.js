//DIA 21-5
function ejercicio1() {
    let parrafo1 = document.getElementById("1")
    parrafo1.innerText = "Programacion 1"
}
function ejercicio2() {
    let parrafo2 = document.getElementById("2")
    parrafo2.style.color = "red"
}
let cont = 1
function ejercicio3() {
    let lis1 = document.createElement('li')
    lis1.textContent = "Programacion " + cont
    let elementoPadre = document.querySelector(".padre");
    elementoPadre.appendChild(lis1);
    cont++
}
function ejercicio4(elemento) {
    elemento.remove();
}
/*eliminar mediante id
function eliminar(id){
    let elemento=document.getElementById(id)
    if(elemento){
        elemento.remove()
    }
}
*/
/**
 *  document.getElementById("parrafo2").remove()//elimina el parrafo2
    //utilizando remove child, eliminando el hijo del padre
    document.getElementById("padre").removeChild(document.getElementById("parrafo3"))
 */
function ejercicio5() {
    let elemento = document.getElementById("5")
    if (elemento.style.display === "none") {
        elemento.style.display = "block"
    }
    else {
        elemento.style.display = "none"
    }
}
function ejercicio6() {
    let div1 = document.createElement('div')
    div1.textContent = "Nuevo div "
    let elementoPadre = document.querySelector(".padre1");
    elementoPadre.appendChild(div1);
}
function ejercicio7() {
    let miElemento = document.getElementById("imagen1");
    miElemento.setAttribute("src", "assest/flor2.jpg")
    miElemento.setAttribute("alt", "Imagen2")
}
function ejercicio8a() {
    let elemento = document.getElementById("8");
    elemento.style.color = "red";
    elemento.style.fontSize = "20px";
    elemento.style.background = "yellow";
}
function ejercicio8b() {
    let elemento = document.getElementById("8");
    elemento.style.color = "black";
    elemento.style.fontSize = "16px";
    elemento.style.backgroundColor = "white";
}
function ejercicio9a() {
    let elemento = document.getElementById("9");
    elemento.classList.add("subrayado")
}
function ejercicio9b() {
    let elemento = document.getElementById("9");
    elemento.classList.remove("subrayado")
}
function ejercicio10() {
    let elemento = document.getElementById("10");
    elemento.classList.toggle("resaltar")
}
function ejercicio11() {
    let elemento = document.getElementById("11");
    let respuesta = confirm("¿Esta seguro que desea eliminar el elemento?")
    respuesta ? elemento.remove() : alert("No se elimino ningun elemento")
}
let cont1 = 0
function ejercicio12a() {//suma
    let elemento = document.getElementById('12')
    cont1++
    elemento.textContent = " " + cont1
}
function ejercicio12b() {//resta
    let elemento = document.getElementById('12')
    cont1--
    elemento.textContent = " " + cont1
}
function ejercicio12c() {//resetear
    let elemento = document.getElementById('12')
    cont1 = 0
    elemento.textContent = "Cantidad de veces que hizo clic"
}
function ejercicio13() {
    nombre = prompt("Nombre del label")
    let elemento=document.getElementById("13")
    let label=document.createElement("label")
    label.innerHTML=" "+nombre
    elemento.appendChild(label);

    let input=document.createElement("input")

    opcion=prompt("1-Texto \n2-Numerica")
    if(opcion=1){

    }
    else if(opcion=2){

    }
    else{
        alert("opcion incorrecta")
    }





/*
let elenombre = document.createElement("label")
    elenombre.textContent = " "+ nombre 
    let elementoPadre = document.querySelector(".padre");
    elementoPadre.appendChild(elenombre);

    opcion=prompt("1-Texto \n2-Numerica")
    if(opcion=1){

    }
    else if(opcion=2){

    }
    else{
        alert("opcion incorrecta")
    }
*/

    


}
