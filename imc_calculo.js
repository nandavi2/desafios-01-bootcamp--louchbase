//calculo imc

const nome = "Fernanda";
const peso = 52;
const altura = 1.73;

imc = peso / (altura * altura);

let message = "";

if (imc >= 30) {
  message = `${nome} Você está acima do peso.`;
} else message = `${nome} você está abaixo do peso`;

console.log(message);
