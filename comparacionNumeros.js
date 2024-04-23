let numero1 = Number(prompt("Ingrese el primer número: "));
let numero2 = Number(prompt("Ingrese el segundo número: "));
let numero3 = Number(prompt("Ingrese el tercer número: "));

for (let i = 0; i > 0; i++) {
  if (numero1[i] > numero2[i] && numero1[i] > numero3[i]) {
    console.log("El número mayos es: " + numero1[i]);
  } else if (numero2[i] > numero1[i] && numero2[i] > numero3[i]) {
    console.log("El número mayor es: " + numero2[i]);
  } else {
    console("El número mayor es: " + numero3[i]);
  }
}
