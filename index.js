let add = document.getElementById("add-city");
let ciudad = document.getElementById("eleccion-ciudad");
var lista_ciudad = []

function addcity() {
    if (lista_ciudad.includes(add.value) == false) {
        lista_ciudad.push(add.value);
        return localStorage.setItem("Ciudad",JSON.stringify(lista_ciudad));
    }
    
}

function CargaCiudades() {
    let text = localStorage.getItem("Ciudad");
    let asd = JSON.parse(text);
}

let aaa = localStorage.getItem("Ciudad");
let asd = JSON.parse(aaa);

for (let index = 0; index < asd.length; index++) {
    ciudad.options
    
}