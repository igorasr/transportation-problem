## Grupo

 Ítallo da Pureza Oliveira / E00550

 Igor Augusto Raquel de Souza / E01724
 
 Vinicius Caldeira Maciel / E01708
 
 Vitória Márcia Ramos Dias / E01604

## Problema:

Em uma economia globalizada, uma empresa logística de renome gerencia uma rede complexa de armazéns e centros de distribuição em diferentes regiões do país. Sete armazéns estrategicamente localizados são os pontos focais dessa operação logística, cada um com capacidades distintas para suprir uma ampla variedade de produtos.

O Armazém A1, localizado próximo a um importante centro de produção, mantém um estoque robusto de 250 unidades de mercadorias, variando de eletrônicos a produtos farmacêuticos, prontos para serem distribuídos conforme a demanda.

Enquanto isso, o Armazém A7, na área metropolitana, contém 220 unidades de produtos essenciais, com uma logística eficiente para atender a demandas emergenciais na região urbana densamente povoada.

Por toda a nação, quinze centros de distribuição estão espalhados, cada um representando uma cidade ou zona de demanda distinta. O Centro de Distribuição C3, em uma área industrial em ascensão, requer 150 unidades para atender à crescente necessidade local. Enquanto isso, o Centro de Distribuição C10, situado em uma área comercial movimentada, exige o maior suprimento, com uma demanda de 300 unidades.

A complexidade logística se manifesta nos custos variados de transporte entre os armazéns e os centros de distribuição. As rotas de transporte diferem em distância, infraestrutura rodoviária e logística de armazenamento temporário.

O transporte de mercadorias do Armazém A4 para o Centro de Distribuição C1, embora mais curto em distância, enfrenta desafios de terrenos acidentados, resultando em custos mais elevados de transporte, avaliados em 9 unidades monetárias por unidade transportada. Enquanto isso, a rota do Armazém A5 para o Centro de Distribuição C5, com estradas mais acessíveis, apresenta um custo mais baixo de 6 unidades monetárias por unidade transportada.

Diante desse cenário desafiador, a equipe de logística está empenhada em otimizar as rotas de transporte, considerando os custos, capacidades de oferta e demanda de cada região. O objetivo é garantir a entrega eficiente de produtos, mantendo os custos de transporte dentro do orçamento estipulado, para atender à demanda crescente e garantir a satisfação dos clientes em todo o país.

Matriz que resumo os custos, oferta e demanda:
|        | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | C10 | C11 | C12 | C13 | C14 | C15 | Oferta |
|--------|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|--------|
| A1     | 6  | 8  | 10 | 7  | 9  | 5  | 8  | 9  | 6  | 7   | 8   | 10  | 6   | 9   | 7   | 250    |
| A2     | 7  | 5  | 9  | 6  | 8  | 4  | 6  | 7  | 8  | 5   | 6   | 9   | 7   | 5   | 6   | 150    |
| A3     | 8  | 6  | 7  | 5  | 9  | 7  | 6  | 5  | 8  | 6   | 7   | 5   | 8   | 6   | 7   | 300    |
| A4     | 9  | 7  | 6  | 8  | 5  | 9  | 7  | 6  | 9  | 7   | 8   | 6   | 7   | 9   | 8   | 200    |
| A5     | 5  | 8  | 7  | 6  | 9  | 6  | 8  | 7  | 5  | 8   | 6   | 7   | 5   | 8   | 6   | 180    |
| A6     | 6  | 9  | 8  | 7  | 5  | 8  | 9  | 6  | 7  | 9   | 8   | 6   | 7   | 5   | 8   | 280    |
| A7     | 7  | 6  | 8  | 9  | 7  | 5  | 6  | 8  | 7  | 6   | 9   | 7   | 8   | 6   | 5   | 220    |
| Demanda| 180| 200| 150| 250| 230| 280| 190| 210| 170| 300 | 260 | 240 | 220 | 200 | 180 |        |



Objetivo:
Minimizar os custos totais de transporte:

Restrições:

As quantidades transportadas não podem exceder a oferta disponível em cada armazém:
As quantidades transportadas devem atender à demanda de cada centro de distribuição:
As quantidades transportadas devem ser não negativas:

