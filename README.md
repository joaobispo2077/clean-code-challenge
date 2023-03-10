# Desafios de Clean Code

O objetivo do desafio é:

- Criar um código limpo e de fácil manutenção


## Desafio 1

Função que calcula juros composto com novos aportes no período da aplicação.

### Contexto

Suponha que esteja criando um código que deve demonstrar a previsão do rendimento de uma aplicação financeira. Deve-se utilizar a formula de juros compostos para calcular o rendimento e considerar o caso do rendimento podendo ser mensal com o período de aplicação também podendo ser mensal, também deve-se considerar novos aportes durante o período de aplicação.

### Informações extras

Segue a formula de juros compostos:

```math
M = C * (1 + i)^n
```

- M = Montante
- C = Capital
- i = Taxa de juros
- n = Tempo


![Formula dos juros compostos](./.github/assets/formula-juros-compostos.png)




### Requisitos

- Utilizar a linguagem de programação predileta, mas preferencialmente enviar somente um arquivo no Pull Request para a pasta `./answers/${seu-username-do-github}`.
- Evitar duplicar a resposta da pasta `./resolutions/`, a resolução deve ser conferida somente após o Pull Request ser aceito.


Caso queira otimizar a solução atual, pode conferir ela [aqui](./resolutions/interest-calculator).


### Casos de teste


- Uma aplicação de investimento inicial de R$ 1000,00, com taxa de juros de 0.5% ao mês, durante 48 meses, com aporte mensal de R$ 150,00, o resultado esperado é R$ 9.385,16.
- Uma aplicação de investimento inicial de R$ 500,00, com taxa de juros de 0.3% ao mês, durante 24 meses, sem novo aporte mensal, o resultado esperado é R$ 537,27.


## ♻️ Como contribuir

-   Faça um fork desse repositório;
-   Cria uma branch com a sua feature: `git checkout -b minha-feature`;
-   Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
-   Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

<p align="center">Made with 💙 & ☕  by <strong><a href="https://www.linkedin.com/in/joaobispo2077/">João Bispo</a>😎 </strong> </p>