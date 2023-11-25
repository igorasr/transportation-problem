const oferta = [
  { nome: "A1", value: 250 },
  { nome: "A2", value: 150 },
  { nome: "A3", value: 300 },
  { nome: "A4", value: 200 },
  { nome: "A5", value: 180 },
  { nome: "A6", value: 280 },
  { nome: "A7", value: 220}
]; // Capacidade das fontes

const demanda = [
  {nome: "B1", value: 180}, 
  {nome: "B2", value: 200}, 
  {nome: "B3", value: 150},
  {nome: "B4", value: 250}, 
  {nome: "B5", value: 230}, 
  {nome: "B6", value: 280},
  {nome: "B7", value: 190}, 
  {nome: "B8", value: 210}, 
  {nome: "B9", value: 170},
  {nome: "B10", value: 300}, 
  {nome: "B11", value: 260},
  {nome: "B12", value: 240},
  {nome: "B13", value: 220}, 
  {nome: "B14", value: 200},
  {nome: "B15", value: 180},
]; //  Demanda dos destinos

const custos = [
  [6, 8, 10, 7, 9, 5, 8, 9, 6, 7, 8, 10, 6, 9, 7], // Custos de transporte fonte 1
  [7, 5, 9, 6, 8, 4, 6, 7, 8, 5, 6, 9, 7, 5, 6], // Custos de transporte fonte 2
  [8, 6, 7, 5, 9, 7, 6, 5, 8, 6, 7, 5, 8, 6, 7], // Custos de transporte fonte 3
  [9, 7, 6, 8, 5, 9, 7, 6, 9, 7, 8, 6, 7, 9, 8], // Custos de transporte fonte 4
  [5, 8, 7, 6, 9, 6, 8, 7, 5, 8, 6, 7, 5, 8, 6], // Custos de transporte fonte 5
  [6, 9, 8, 7, 5, 8, 9, 6, 7, 9, 8, 6, 7, 5, 8], // Custos de transporte fonte 6
  [7, 6, 8, 9, 7, 5, 6, 8, 7, 6, 9, 7, 8, 6, 5], // Custos de transporte fonte 7
];

module.exports = {oferta, demanda, custos}