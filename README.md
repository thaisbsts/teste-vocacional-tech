# Teste Vocacional de Tecnologia
Ao começar a se interessar por tecnologia (mais especificamente por programação), muitas pessoas sentem-se perdidas no mar de possibilidades que esta área oferece. Por isso, este projeto foi criado: um teste vocacional com 8 perguntas que, além de dizer qual área dá um match com seu perfil, também indica as formações da Alura para você dar o pontapé inicial perfeito na sua carreira!

As áreas escolhidas para o teste (Programação, Front-end, Data Science, Inteligência Artificial, DevOps, UX & Design, Mobile e Inovação & Gestão) são inspiradas nas próprias escolas da Alura. A seguir, você verá mais sobre o processo de desenvolvimento do site.

[CLIQUE AQUI PARA ACESSAR O SITE](https://teste-vocacional-tech.vercel.app/)


## 🚀 O começo de tudo:  Imersão Dev com Gemini | Alura
Este projeto faz parte da Imersão Dev com Gemini, uma imersão para aprender HTML, CSS e JavaScript do zero! Além disso, o Gemini, IA do Google, também é utilizado para que consigamos entender como a Inteligência Artificial ajuda a otimizar o trabalho no desenvolvimento web.

## 📋 Tecnologias usadas
HTML, CSS e JavaScript - Para o desenvolvimento.

Google Gemini - Para apoiar o processo de aprendizagem e acelerar tarefas repetitivas.

Visual Studio Code - Para construção e depuração do código.

## 🔧 Construção

### ⚙️ Desenvolvendo a ideia
Após estabelecer o tema do projeto, eu precisava mapear quais seriam as áreas que o teste poderia dar como resultado. Para isso, visitei o site da Alura e achei interessante a divisão dos temas por escolas, então decidi incorporá-las na minha solução. 

Depois, eu tinha que mapear os aspectos que eu ia analisar no meu teste (interesses, habilidades etc. do usuário) e as características de cada área para cada um desses aspectos. Para realizar essa etapa, eu pedi ajuda ao Gemini fornecendo os seguintes prompts:

```
Quais aspectos de uma pessoa podem ser analisados a fim de determinar em qual área profissional ela se encaixa melhor?
```

```
O que um teste vocacional deve levar em conta em suas perguntas?
```

```
Faça uma tabela que compare as habilidades comportamentais, interesses, perfil e objetivos que uma pessoa precisa ter para
cada uma dessas áreas:
Front-end
Back-end
Mobile
Devops
UX & Design
Data Science
Inovação & Gestão
Inteligência Artificial
```
```
Faça uma tabela com as área e as 5 principais atividades de cada área.
```

Com base nas informações que o Gemini que forneceu, eu criei uma relação desses dados, conforme a imagem abaixo:

[Planilha em PDF - Mapeamento de Características](https://drive.google.com/file/d/1WvVMQOeeBf2gKg_G-zHQdEz4yUaP5etp/view?usp=sharing)

Contudo, eu queria acrescentar uma fluidez às opções de respostas, então pedi ajuda à IA para transformar as características que eu mapeei em sentenças, conforme prompt abaixo:

```
Eu quero que você crie uma sentença para cada uma dessa características, por exemplo:
Criatividade - Gosto de usar minha criatividade e sou... [complete]
Criatividade
Pensamento algorítmico
Adaptabilidade
Melhorar a comunicação e a colaboração entre equipes
Empatia com o Usuário
Pensamento Analítico
Liderança
Curiosidade em solucionar problemas complexos e atuais
```
Eu fiz isso para todas as características que eu relacionei e meu mapeamento de perguntas e opções ficou assim:
[Planilha em PDF - Mapeamento de Sentenças](https://drive.google.com/file/d/1OeRvr6f7uwFO5pkg-U00RQ3LMSw3ogQH/view?usp=sharing)

### ⚙️ Desenvolvimento da Solução
Eu comecei separando os arquivos em index.html, style.css, site.js e dados.js (para seguir a orientação dos instrutores do curso de separar o arquivo de JavaScriot em dois: um para os dados e outro para a lógica). 

No dados.js, eu delcarei uma variável 'dados' que é uma lista de dicionários. Cada dicionário corresponde a uma pergunta e suas opções de resposta (valores), cada resposta está associada a uma área (chave). Além disso, há um outro dicionário (fora de dados) chamado 'mensagens' que armazena as áreas (chaves) e as mensagens correspondentes que serão exibidas quando o resultado do teste for mostrado.

No site.js, há três funções: 
01. mostrarPerguntas(): Vai percorrer a lista 'dados' (do dados.js) e vai mostrar na tela as perguntas e opções. Como eu já tive contato com outras linguagens de programação, eu sabia que eu precisava dar várias opções ao usuário e que ele só poderia selecionar uma delas, ou seja, eu necessitava implementar Radio Buttons. Porém, eu não sabia, até então, como implementá-los em HTML, então eu solicitei ajuda ao Gemini e fui pedindo adaptações de acordo com o contexto do meu projeto.
02. contabilizarRespostas(): Depois que o usuário seleciona as opções, é necessário contabilizá-las para realizar o cálculo do resultado. Novamente, pedi ajuda ao Gemini e perguntei como eu poderia guardar as respostas. Ele me indicou o querySelectorAll, um método disponível no objeto document. A função (contabilizarRespostas()) retorna o total de respostas identificadas e a chave (área) do maior valor.
03. mostrarResultado(): Recebe o retorno da função anterior, verifica se ele respondeu todas as questões e exibe o resultado com a mensagem, além de um botão que leva o usuário à parte do site da Alura que fala sobre a área, o mercado e os cursos que são oferecidos.

Depois de tudo pronto e testado, pedi à IA para me ajudar com os comentários.

## 📦 Pontos de Melhoria

01. O CSS pode ser melhorado para fique esteticamente mais agradável e dinâmico.
02. Ainda não há um tratamento para caso dê empate para duas áreas.

## 📌 Minha experiência com o curso e com o projeto

Apesar de ser apaixonada por dados, resolvi me aventurar no desenvolvimento web com a imersão e me surpreendi muito com a qualidade da formação e a didática impecável dos instrutores. Eu nunca tinha tido qualquer tipo de contato com HTML, CSS e JavaScript antes e senti o conteúdo foi muito valioso para mim.

Obrigada, Alura (Rafaella Ballerini e Guilherme Lima) e Gemini (Luciano Martins) <3

