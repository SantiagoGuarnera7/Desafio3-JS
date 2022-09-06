let nombreUsuario = prompt("Bienvenido a Indumentaria Emma Por favor ingrese nombre de usuario");
let saludo= `Hola! ${nombreUsuario}`;

alert(saludo);


class Producto{
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [];

for (let i = 0; i < 3; i++){

    let nombre = prompt( "Ingresa el nombre del producto por favor.");
    let precio = parseInt(prompt("Ahora Ingresa el precio"));

let obj = new Producto(nombre, precio);

productos.push(obj);

}

console.log(productos);


