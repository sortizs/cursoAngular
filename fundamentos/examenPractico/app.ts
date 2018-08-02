// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};

// Cree una interfaz que sirva para validar el siguiente objeto
interface iHeroe {
  nombre: string;
  artesMarciales: string[];
}

let batman: iHeroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

// Convertir esta funcion a una funcion de flecha
/* function resultadoDoble(a, b) {
  return (a + b) * 2;
} */
let resultadoDoble = (a: number, b: number) => (a + b) * 2;
console.log(resultadoDoble(3, 6));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre: string, poder?: string, arma: string = "arco") {
  let mensaje:string;
  if (poder) {
    // mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    mensaje = `${nombre} tiene el poder de ${poder} y un arma ${arma}`
  } else {
    // mensaje = nombre + " tiene un " + poder;
    mensaje = `${nombre} tiene el poder de ${poder}`
  }
  console.log(mensaje);
}

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
  base: number;
  altura: number;
  
  constructor(base:number, altura:number) {
    this.base = base;
    this.altura = altura;
  }

  area():number{
    return this.base * this.altura;
  }
}

let rectangulo = new Rectangulo(5,4);
console.log(rectangulo.area());
