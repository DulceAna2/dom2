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

function ejercicio12(parametro) {
    let elemento = document.getElementById('12')
    let cont1 = 0
    switch (parametro) {
        case 'suma':
            cont1++
            elemento.textContent = " " + cont1
            break;
        case 'resta':
            cont1--
            elemento.textContent = " " + cont1

            break;
        case 'reset':
            cont1 = 0
            break;
        default:
            alert("error")
    }
}
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
    elemento.textContent = "Cantidad de veces que hizo clic"
}
function ejercicio13() {
    let elemento = document.getElementById("13")
    let opcion, nombre;
    do {
        nombre = prompt("Nombre del label")
        if (!nombre) {
            alert("El nombre del label no puede estar vacio")
        }
    }
    while (!nombre);
    let label = document.createElement("label")
    label.textContent = nombre
    do {
        opcion = parseInt(prompt("1-texto\n2-numero"))
        if (opcion !== 1 && opcion !== 2) {
            alert("ingrese 1 o 2")
        }
    }
    while (opcion !== 1 && opcion !== 2);
    let input = document.createElement("input")
    opcion === 1 ? input.type = "text" : input.type = "number"
    elemento.append(label, input)
}

const frutas = ["Manzana", "Banana", "Cereza"];
const vegetales = ["Zanahoria", "Cebolla", "Papa"];
const animales = ["Perro", "Gato", "Caballo"];
const cantantes = ["Lana del Rey", "Taylor", "Mon Laferte", "f", "g", "j"]
function ejercicio14() {
    //Funcion para actualizar la subcategorias en funcion de la categoria seleccionada
    let categoria = document.getElementById("categoria").value;
    let subcategoriaSelect = document.getElementById("subcategoria")
    //limpia las subcategorias anteriores
    subcategoriaSelect.innerHTML = '<option value="">Selecciones una subcategoria</option>'
    let subcategorias;
    //determinar el array de subcategorias basado en la categoria seleccionada
    switch (categoria) {
        case 'frutas':
            subcategorias = frutas;
            break;
        case 'vegetales':
            subcategorias = vegetales;
            break;
        case 'animales':
            subcategorias = animales;
            break;
        case 'cantantes':
            subcategorias = cantantes;
        default:
            subcategorias = [];
    }
    /*
    if (categoria === "frutas") {
        subcategorias = frutas;
    } else {
        if (categoria === "vegetales") {
            subcategorias = vegetales;
        }
        else {
            if (categoria === "animales") {
                subcategorias = animales;
            }
            else {
                subcategorias = [];
            }
        }
    }
    */
    //agregar las nuevas subcategorias al despegable usando un bucle for
    for (let i = 0; i < subcategorias.length; i++) {
        let option = document.createElement("option");//crea option 
        option.value = subcategorias[i].toLowerCase();//crea valor y pone nombre
        option.textContent = subcategorias[i];//lo que va a leer el usuario
        subcategoriaSelect.appendChild(option);//agrega el option al select
    }
}
function ejercicio15() {
    let nombre = document.getElementById("nombre").value
    let gmail = document.getElementById("gmail").value
    let mensaje = document.getElementById("mensaje").value
    // obtener el div para mostrar el error
    let errores = document.getElementById("errores")
    errores.innerHTML = "";//blanqueo
    //validar que los campos no esten vacios
    let parrafo = document.getElementById("parrafo")
    console.log(nombre)

    if (nombre === "") {
        errores.innerHTML += "El nombre es obligatorio.<br>";
    }
    else {
        if (nombre.length < 10) {
            errores.innerHTML += "El nombre debe tener al menos diez caracteres.Actualmente tiene " + nombre.length + "<br>";
        }
        else {
            errores.innerHTML += "El tiene mas de diez caracteres.<br>";
        }
    }
    if (gmail === "") {
        errores.innerHTML += "El Gmail es obligatorio.<br>";
    }
    if (mensaje === "") {
        errores.innerHTML += "El Mensaje es obligatorio.<br>";
    }
}
function ejercicio16(event) {
    console.log("se esta ejecutando un evento")
    console.log("presiono la tecla" + event.key)
    //verificar si la tecla presionada es "enter"
    if (event.key === "Enter") {
        //Mostrar una alerta
        let valor = document.getElementById("16").value;
        alert("¡Has presionado la tecla Enter! enviaste:" + valor)

    }
}
function ejercicio17() {
    let elemento = document.getElementById("tabla")
    //let apellido=prompt("¿Que Apellido desea agregar?")
    let ttrr = document.createElement("tr")
    elemento.append(ttrr)
//NOMBRE
    let nombre = prompt("¿Que nombre desea agregar?")
   do{
    if (!nombre) {
        alert("El nombre no puede estar vacio")
    }
   }
    while (!nombre);
    let ntd = document.createElement("td")
    ntd.innerHTML = nombre
//APELLIDO
    apellido = prompt("¿Que apellido desea agregar?")
    do{
        if (!apellido) {
            alert("El apellido no puede estar vacio")
        }
    }

    while (!apellido);
    let atd = document.createElement("td")
    atd.innerHTML = apellido
    //ELIMINAR


    let boton = document.createElement("button")
    boton.textContent="X"

    
    





    ttrr.append(ntd, atd,boton)


    /**
      do {
         let apellido = prompt("¿Que Apellido desea agregar?")
         if (!apellido) {
             alert("El apellido no puede estar vacio")
         }
     }
     while (!apellido);
     let atd = document.createElement("td")
     */
}
