const sumar = require("./CALCULADORA/sumar");
const restar = require("./CALCULADORA/restar");
const multiplicacion = require("./CALCULADORA/multiplicacion");
const division = require("./CALCULADORA/division");

console.log("HOLA SOY UNA CALCULADORA DE OPERACIONES BASICAS.");
console.log(
  "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
);

console.log("El resultado de la suma es:", sumar(1500, 100));

console.log(
  "-------------------------------------------------------------------------------"
);

console.log("El resultado de la resta es :", restar(400, 45));

console.log(
  "------------------------------------------------------------------------------"
);

console.log("El resultado de la multiplicacion es:", multiplicacion(10, 30));

console.log(
  "------------------------------------------------------------------------------"
);
console.log("El resultado de la division:", division(0, 1));
console.log(
  "------------------------------------------------------------------------------"
);
