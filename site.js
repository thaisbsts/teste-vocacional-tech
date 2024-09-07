function mostrarPerguntas() {
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
}

function contabilizarRespostas() {
    let contagemEscolhas = {};
    const opcoesSelecionadas = document.querySelectorAll('input[type="radio"]:checked');

    opcoesSelecionadas.forEach(input => {
        const valor = input.value;
        if (contagemEscolhas[valor]) {
            contagemEscolhas[valor]++;
        } else {
            contagemEscolhas[valor] = 1;
        }
    });
    total = 0;
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
    return { total, maiorChave };
    }


    function mostrarResultado() {
        const { total, maiorChave } = contabilizarRespostas();
        const resultadoTotal = document.getElementById("resultadoTotal");
        resultadoTotal.innerHTML = "<h3>Contagem das escolhas:</h3>";
            if (total < 8) {
                resultadoTotal.innerHTML = '<p id="mensagemErro"> Você não respondeu todas as questões. </p>'
            } else {
                resultadoTotal.innerHTML = `<p>${mensagens[maiorChave]}</p>`;
            
            }
    }

mostrarPerguntas();


