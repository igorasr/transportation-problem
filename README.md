### Grupo

 Ítallo da Pureza Oliveira / E00550

 Igor Augusto Raquel de Souza / E01724
 
 Vinicius Caldeira Maciel / E01708
 
 Vitória Márcia Ramos Dias / E01604

### Problema:
```
Em uma economia globalizada, uma empresa logística de renome gerencia uma rede complexa de armazéns e centros de distribuição em diferentes regiões do país. Sete armazéns estrategicamente localizados são os pontos focais dessa operação logística, cada um com capacidades distintas para suprir uma ampla variedade de produtos.

O Armazém A1, localizado próximo a um importante centro de produção, mantém um estoque robusto de 250 unidades de mercadorias, variando de eletrônicos a produtos farmacêuticos, prontos para serem distribuídos conforme a demanda.

Enquanto isso, o Armazém A7, na área metropolitana, contém 220 unidades de produtos essenciais, com uma logística eficiente para atender a demandas emergenciais na região urbana densamente povoada.

Por toda a nação, quinze centros de distribuição estão espalhados, cada um representando uma cidade ou zona de demanda distinta. O Centro de Distribuição C3, em uma área industrial em ascensão, requer 150 unidades para atender à crescente necessidade local. Enquanto isso, o Centro de Distribuição C10, situado em uma área comercial movimentada, exige o maior suprimento, com uma demanda de 300 unidades.

A complexidade logística se manifesta nos custos variados de transporte entre os armazéns e os centros de distribuição. As rotas de transporte diferem em distância, infraestrutura rodoviária e logística de armazenamento temporário.

O transporte de mercadorias do Armazém A4 para o Centro de Distribuição C1, embora mais curto em distância, enfrenta desafios de terrenos acidentados, resultando em custos mais elevados de transporte, avaliados em 9 unidades monetárias por unidade transportada. Enquanto isso, a rota do Armazém A5 para o Centro de Distribuição C5, com estradas mais acessíveis, apresenta um custo mais baixo de 6 unidades monetárias por unidade transportada.

Diante desse cenário desafiador, a equipe de logística está empenhada em otimizar as rotas de transporte, considerando os custos, capacidades de oferta e demanda de cada região. O objetivo é garantir a entrega eficiente de produtos, mantendo os custos de transporte dentro do orçamento estipulado, para atender à demanda crescente e garantir a satisfação dos clientes em todo o país.
```


### Solução 
---------------------------------------------------------
Origem  |       Destino |       Qtd     |       Custo   |
--------|---------------|---------------|---------------|
A1      |       B10     |       40      |       280     |
A1      |       B13     |       210     |       1260    |
A2      |       B10     |       150     |       750     |
A3      |       B8      |       10      |       50      |
A3      |       B10     |       50      |       300     |
A3      |       B12     |       240     |       1200    |
A4      |       B10     |       20      |       140     |
A4      |       B11     |       180     |       1440    |
A5      |       B9      |       170     |       850     |
A5      |       B13     |       10      |       50      |
A6      |       B11     |       80      |       640     |
A6      |       B14     |       200     |       1000    |
A7      |       B10     |       40      |       240     |
A7      |       B15     |       180     |       900     |
Dummy0  |       B1      |       180     |       0       |
Dummy0  |       B2      |       200     |       0       |
Dummy0  |       B3      |       150     |       0       |
Dummy0  |       B4      |       250     |       0       |
Dummy0  |       B5      |       230     |       0       |
Dummy0  |       B6      |       280     |       0       |
Dummy0  |       B7      |       190     |       0       |
Dummy0  |       B8      |       200     |       0       |

Custo Total:            9100
 
***

Podemos verficiar que a solução dada pelo nosso programa retorna o Amazém de onde o produto vai sair e o Centro de Distribuição de destino, dando a quantidade para aquela viagem e o custo da mesma.

As variaveis "dummy" são adicionadas automaticamente para equilibrar a solução.

Podemos validar a solução com base nos dados do [problema](./Problema.pdf) 

Exemplo:

Armazem A1 tinha uma oferta de 150 produto e utilizou por completo;
Centro de distribuição B10 tinha uma demanda de 300 produtos e foi atendida.