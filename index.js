let add = document.getElementById("add-city");
let ciudad = document.getElementById("ciudad");
let lista_ciudad = []
let temp = document.getElementById('temp');
let max = document.getElementById('temp-max');
let min = document.getElementById('temp-min');
let nombre = document.getElementById('name');
let desc = document.getElementById('desc');
let msj = document.getElementById('msj');
let loading = document.getElementById('loadingp');



function AgregarCiudad() {
    if (lista_ciudad.includes(add.value) == false) {
        if(add.value != "")
            lista_ciudad.push(add.value);
            localStorage.setItem("Ciudad",JSON.stringify(lista_ciudad));
            msj.innerHTML = "Ciudad cargada con exito!";
            return add.value = ""
    }
    else{
        msj.innerHTML = "Error: la ciudad ya esta cargada!";
        return add.value = ""
    }
    
}

function CargaCiudades(){
    const array_ciudades = JSON.parse(localStorage.getItem("Ciudad"));
    array_ciudades.forEach(array => {        
        let opt = document.createElement('option');
        opt.value = array; 
        opt.text = array;
        ciudad.appendChild(opt);
    });
}



function ApiClima(){
    loading.style.display = "block";
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ciudad.value+'&appid=3936d0749fdc3124c6566ed26cf11978')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var tempmaxValue = data['main']['temp_max'];
        var tempminValue = data['main']['temp_min'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];


        loading.style.display = "none";
        tempmaxValue = (tempmaxValue - 273.15);
        tempminValue = (tempminValue - 273.15);
        tempValue = (tempValue - 273.15);
        nombre.innerHTML = nameValue;
        max.innerHTML = "Temperatura maxima - "+tempmaxValue.toFixed(2);
        min.innerHTML = "Temperatura minima - "+tempminValue.toFixed(2);
        desc.innerHTML = "Descripcion - "+descValue;
        temp.innerHTML = "Temperatura - "+tempValue.toFixed(2);


    })
    
    .catch(error => 
        console.error(error));
    }
    