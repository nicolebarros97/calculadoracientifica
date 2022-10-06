//capturar los ingresos numericos - variable
// capturo los o el ingreso de operacion - variable
// Ruta del DOM del resultado o visor 
// eventos en todos los botones que recolecte los valores de los botones apretados


let numero1 = parseInt(document.querySelector('n1').value); /*el value trae el contenido interno de la caja y con el innerHTML cumple la funcion como del value pero en vez de incorporar las cosas me muestra lo que esta en esa ruta, pero sin el parseInt me trae un string. Con button se usa value y si los botones fueron puestos como enlances se usa innerHTML*/
let numero3 = parseInt(document.querySelector('n3').value);
let operacion = document.querySelector('suma').value; 

console.log(numero1 + operacion + numero2);

