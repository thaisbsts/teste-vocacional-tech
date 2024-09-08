function mostrarPerguntas() { // Seguindo o padrão camelCase sugerido
    const section = document.getElementById("perguntas"); // Seleciona a seção onde as perguntas serão exibidas
    let resultados = ""; // String que irá armazenar o HTML gerado dinamicamente
    let botao = 0; // Contador para diferenciar os IDs dos inputs

    // Percorre cada objeto em 'dados' (do dados.js)
    for (let dado of dados) {
        // Adiciona a pergunta e abre o formulário
        resultados += `
            <div class="item-resultado">
                <h2>${dado.pergunta}</h2> 
            </div>
            <form>
        `;

        // Percorre as chaves de cada pergunta
        for (let key in dado) {
            if (key !== 'pergunta') { // Exclui a chave 'pergunta' (pois já foi usada no título)
                // Adiciona uma opção de resposta (radio button) para cada alternativa
                resultados += `
                    <div class="item-opcao">
                        <input type="radio" id="${botao}" name="pergunta_${dado.pergunta}" value="${key}">${dado[key]}
                    </div>
                `;
                botao += 1; // Incrementa o ID para diferenciar cada radio button
            }
        }

        resultados += `
            </form>
        `; // Fecha o formulário
    }

    section.innerHTML = resultados; // Insere todo o HTML gerado na seção de perguntas
}

function contabilizarRespostas() {
    let contagemEscolhas = {}; // Objeto que armazena a contagem das escolhas
    const opcoesSelecionadas = document.querySelectorAll('input[type="radio"]:checked'); // Seleciona todas as opções marcadas

    // Itera sobre cada opção selecionada
    opcoesSelecionadas.forEach(input => {
        const valor = input.value; // Pega o valor da opção selecionada
        if (contagemEscolhas[valor]) {
            contagemEscolhas[valor]++; // Incrementa a contagem se já houver uma escolha registrada
        } else {
            contagemEscolhas[valor] = 1; // Caso contrário, inicia a contagem com 1
        }
    });

    total = 0; // Inicializa o total de respostas
    for (const contagem of Object.values(contagemEscolhas)) {
        total += contagem; // Soma todas as contagens de respostas
    }

    maiorValor = 0; // Variável para armazenar o valor máximo de respostas
    maiorChave = 0; // Variável para armazenar a chave com maior contagem

    // Percorre o objeto de contagem para encontrar a resposta mais escolhida
    for (const [chave, valor] of Object.entries(contagemEscolhas)) {
        if (valor > maiorValor) {
            maiorValor = valor; // Atualiza o maior valor se encontrar um maior
            maiorChave = chave; // Armazena a chave correspondente ao maior valor
        }
    }

    return { total, maiorChave }; // Retorna o total de respostas e a chave (área) mais escolhida
}

function mostrarResultado() {
    const { total, maiorChave } = contabilizarRespostas(); // Chama a função para contabilizar respostas
    const resultadoTotal = document.getElementById("resultadoTotal"); // Seleciona o elemento onde o resultado será exibido

    if (total < 8) { // Verifica se o usuário respondeu menos que 8 questões
        resultadoTotal.innerHTML = '<p id="mensagemErro"> Você não respondeu todas as questões. </p>'; // Mostra uma mensagem de erro
    } else {
        resultadoTotal.innerHTML = `<p>${mensagens[maiorChave]}</p>`; // Exibe a mensagem correspondente à resposta mais escolhida
    }
}

mostrarPerguntas(); // Chama a função para exibir as perguntas ao carregar a página
