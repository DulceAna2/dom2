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
function ejercicio4(p) {
    p.remove();
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
    let elemento = document.getElementById("tabla")    //llamar a tabla
    let ttrr = document.createElement("tr")//crear tr
    elemento.append(ttrr)

    let nombre, apellido
    do {
        nombre = prompt("¿Que nombre desea agregar?")
        apellido = prompt("¿Que apellido desea agregar?")

        if (!nombre | !apellido) {
            alert("La celda no puede estar vacia")
        }
    }
    //NOMBRE
    while (!nombre);
    let cel1 = document.createElement("td")
    cel1.innerHTML = nombre
    //Apellido
    while (!apellido);
    let cel2 = document.createElement("td")
    cel2.innerHTML = apellido
    //ELIMINAR
    let boton = document.createElement("button")
    boton.textContent = "X"
    boton.addEventListener('click', function () {
        ttrr.remove();
    })
    let cel3 = document.createElement("td")
    cel3.appendChild(boton)
    ttrr.append(cel1, cel2, cel3)
}
function ejercicio18() {
    let elemento = document.getElementById("18b").value
    let p = document.getElementById("18a")
    if (elemento.length) {
        p.innerHTML = "Caracteres: " + elemento.length
    }
    else {
        p.innerHTML = "Contador de Caracteres:"
    }
    //en este ejericio se utiliza oninput y no keydown porque el keydown se ejecuta antes que el input guarde el valor eso crea
}
function ejercicio19() {
    let p = document.querySelectorAll("p");
    cantidadparrafo = p.length;
    for (i = 0; i < cantidadparrafo; i++) {
        p[i].remove();
    }
    alert(cantidadparrafo + ".Parrafos fueron eliminados ");
    /*
      getElementByClass(actualizacion dinamica)
      getElementByTagName(actualizacion dinamica)
      querySelectorAll(estatico)
   */
}

    let contador1 = 0;
    const imagenes = document.querySelectorAll(".imagenes");
    function mostrarImagen() {
        imagenes.forEach((img, index) => {
            img.style.display = (index === contador1)? 'block' : 'none';
        });
    }
    function siguienteImagen() {
        contador1 = (contador1 + 1) % imagenes.length;
        console.log(contador1)
        mostrarImagen();
    }
    function anteriorImagen() {
        contador1 = (contador1 - 1 + imagenes.length) % imagenes.length;
        console.log(contador1)
        mostrarImagen()
    }

