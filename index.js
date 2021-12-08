let add = document.getElementById("add-city");
let ciudad = document.getElementById("ciudad");
let lista_ciudad = []
let temp = document.getElementById('temp');
let nombre = document.getElementById('name');
let desc = document.getElementById('desc');



function AgregarCiudad() {
    if (lista_ciudad.includes(add.value) == false) {
        if(add.value != "")
            lista_ciudad.push(add.value);
            return localStorage.setItem("Ciudad",JSON.stringify(lista_ciudad));
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
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ciudad.value+'&appid=3936d0749fdc3124c6566ed26cf11978')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
        
      tempValue = tempValue - 273.15
      nombre.innerHTML = nameValue;
      desc.innerHTML = "Descripcion - "+descValue;
      temp.innerHTML = "Temperatura - "+tempValue.toFixed(2);
    
    })
    
    .catch(err => alert("Wrong city name!"));
    }