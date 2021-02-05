var marca = document.getElementById("marca");
var modelo = document.getElementById("modelo");
var placa = document.getElementById("placa");
var color = document.getElementById("color");
var b = document.getElementById("boton");
b.addEventListener("click", registrarAuto);

function auto(marca, modelo, placa, color){
    this.marca = marca;
    this.modelo = modelo;
    this.placa = placa;
    this.color = color;
}

function registrarAuto(){
    var nuevoAuto = new auto(marca.value, modelo.value, placa.value, color.value);
    alert("Datos del Auto: \nMarca: " + nuevoAuto.marca + "\nModelo: " + nuevoAuto.modelo + "\nPlaca: " + nuevoAuto.placa + "\nColor: " + nuevoAuto.color);
}

