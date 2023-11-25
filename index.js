const { oferta, demanda, custos } = require("./data");
const fs = require('fs');


// Dados do problema
let observacoes = [];
let countDummys = 0;

// Inicialização das variáveis
const totalOferta = oferta.reduce((acc, val) => acc + val.value, 0);
const totalDemanda = demanda.reduce((acc, val) => acc + val.value, 0);

// Verificando se a oferta total é igual à demanda total
if (totalOferta !== totalDemanda) {
  observacoes.push("Oferta é diferente do custo, foram inseridos os dummys;");
  // Adicionando variáveis "dummy" para equilibrar oferta e demanda
  if (totalOferta > totalDemanda) {
    observacoes.push("A oferta é maior que a demanda;");
    demanda.push({nome: `Dummy${countDummys++}`, value: totalOferta - totalDemanda});
    for (let i = 0; i < oferta.length; i++) {
      custos[i].push(0); // Adicionando custos para as variáveis "dummy"
    }
  } else {
    observacoes.push("A demanda é maior que a oferta;");

    oferta.push({nome: `Dummy${countDummys++}`, value: totalDemanda - totalOferta});
    const novaLinhaCustos = new Array(demanda.length).fill(0);
    custos.push(novaLinhaCustos); // Adicionando nova linha de custos para as variáveis "dummy"
  }
}

const transporte = Array.from({ length: oferta.length }, () =>
  Array(demanda.length).fill(0)
);

// Resolução do problema
while (true) {
  let custoMinimo = Number.POSITIVE_INFINITY;
  let iMin = -1,
    jMin = -1;

  // Encontrar a célula com o menor custo
  for (let i = 0; i < oferta.length; i++) {
    for (let j = 0; j < demanda.length; j++) {
      if (oferta[i].value > 0 && demanda[j].value > 0 && custos[i][j] < custoMinimo) {
        custoMinimo = custos[i][j];
        iMin = i;
        jMin = j;
      }
    }
  }

  if (iMin === -1 && jMin === -1) {
    break;
  }

  // Determinar a quantidade a ser alocada
  const quantidade = Math.min(oferta[iMin].value, demanda[jMin].value);
  transporte[iMin][jMin] = quantidade;
  oferta[iMin].value -= quantidade;
  demanda[jMin].value -= quantidade;
}

let custoTotal = 0;
let string = '';

// Imprimir a solução
string += "Plano de transporte:\n"
string += `---------------------------------------------------------\n`
string += `Origem\t|\tDestino\t|\tQtd\t|\tCusto\t|\n`
string += `---------------------------------------------------------\n`


for (let i = 0; i < oferta.length; i++) {
  for (let j = 0; j < demanda.length; j++) {
    custoTotal += transporte[i][j] * custos[i][j];
    if (transporte[i][j] > 0) {
      string +=  `${oferta[i].nome}\t|\t${demanda[j].nome}\t|\t${transporte[i][j]}\t|\t${
        transporte[i][j] * custos[i][j]
      }\t|\n`
    }
  }
}

string += `---------------------------------------------------------\n`
string += "Custo Total: \t\t" + custoTotal

console.log(string)

fs.writeFile('result.txt', string, (err) => {});

console.log("\nResumo:");
console.log(`--------------------------------`);
observacoes.forEach((value) => {
  console.log("\t" + value);
});
