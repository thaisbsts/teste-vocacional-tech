// Inicialize a contagem de escolhas
let contagemEscolhas = {};


    const section = document.getElementById("perguntas");
    let resultados = "";
    let botao = 0;

    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <h2>${dado.pergunta}</h2>
            </div>
            <form>
        `;
        
        for (let key in dado) {
            if (key !== 'pergunta') {
                resultados += `
                    <div class="item-opcao">
                        <input type="radio" id="${botao}" name="pergunta_${dado.pergunta}" value="${key}">${dado[key]}
                    </div>
                `;
                botao += 1;
            }
        }

        resultados += `
            </form>
        `;
    }

    section.innerHTML = resultados;


// Função para gravar e contar escolhas
function gravarEscolhas() {
    // Resetar a contagem
    contagemEscolhas = {};

    // Obter todos os inputs de rádio selecionados
    const opcoesSelecionadas = document.querySelectorAll('input[type="radio"]:checked');

    // Contar as escolhas
    opcoesSelecionadas.forEach(input => {
        const valor = input.value;
        if (contagemEscolhas[valor]) {
            contagemEscolhas[valor]++;
        } else {
            contagemEscolhas[valor] = 1;
        }
    });
    total = 0;
    // Exibir resultados
    for (const contagem of Object.values(contagemEscolhas)) {
        total += contagem;
    }
    maiorValor = 0;
    maiorChave = 0;
    for (const [chave, valor] of Object.entries(contagemEscolhas)) {
        if (valor > maiorValor) {
            maiorValor = valor;
            maiorChave = chave;
        }
    }

    const resultadoTotal = document.getElementById("resultadoTotal");
    resultadoTotal.innerHTML = "<h3>Contagem das escolhas:</h3>";
        if (total < 7) {
            resultadoTotal.innerHTML = '<p id="mensagemErro"> Você não respondeu todas as questões. </p>'
        } else {
            resultadoTotal.innerHTML = `<p>${mensagens[maiorChave]}</p>`;
           
        
    }
}



