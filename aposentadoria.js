// calculo aposentadoria

const nome = "Fernanda";
const sexo = "F";
const idade = 83;
const contribuicao = 33;

const calculoContribuicao = idade + contribuicao;

const mulherPodeAposentar =
  sexo == "F" && contribuicao >= 30 && calculoContribuicao >= 85;
const homemPodeAposentar =
  sexo == "M" && contribuicao >= 35 && calculoContribuicao >= 95;

if (mulherPodeAposentar || homemPodeAposentar) {
  console.log(`${nome}, você pode se aposentar!`);
} else console.log(`${nome}, Não pode se aposentar!`);
