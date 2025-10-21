const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Qual é a principal vantagem da diversidade cultural em uma sociedade?",
        alternativas: [
            {
                texto: "Promove o respeito e a compreensão entre diferentes grupos.",
                afirmacao: "A diversidade cultural enriquece a convivência ao estimular o diálogo e a troca de experiências.",
            },
            {
                texto: "Pode causar conflitos por diferenças de costumes.",
                afirmacao: "Diferenças culturais podem gerar desafios, mas são oportunidades para aprendizado e crescimento.",
            }
        ]
    },
    {
        enunciado: "O que a diversidade cultural pode contribuir para a economia de um país?",
        alternativas: [
            {
                texto: "Estimula a inovação e a criatividade nos negócios.",
                afirmacao: "Ambientes culturalmente diversos tendem a gerar ideias mais inovadoras e soluções criativas.",
            },
            {
                texto: "Pode dificultar a comunicação entre trabalhadores.",
                afirmacao: "A diversidade exige adaptação, mas também promove novas formas de colaboração.",
            }
        ]
    },
    {
        enunciado: "Como a diversidade cultural influencia a educação?",
        alternativas: [
            {
                texto: "Enriquece o currículo com diferentes perspectivas e histórias.",
                afirmacao: "Incluir culturas diversas amplia o entendimento e valoriza a pluralidade social.",
            },
            {
                texto: "Pode causar dificuldades na padronização dos conteúdos.",
                afirmacao: "A diversidade apresenta desafios que podem ser superados com metodologias inclusivas.",
            }
        ]
    },
    {
        enunciado: "Qual o impacto da diversidade cultural nas artes?",
        alternativas: [
            {
                texto: "Gera uma maior variedade de expressões artísticas.",
                afirmacao: "A diversidade cultural amplia a riqueza artística ao trazer novas influências e técnicas.",
            },
            {
                texto: "Pode criar dificuldades para definir estilos artísticos tradicionais.",
                afirmacao: "A mistura de culturas pode transformar e renovar estilos, ampliando seu alcance.",
            }
        ]
    },
    {
        enunciado: "Qual é um desafio comum enfrentado em sociedades culturalmente diversas?",
        alternativas: [
            {
                texto: "Preconceito e discriminação entre grupos.",
                afirmacao: "O preconceito é um obstáculo que pode ser combatido com educação e diálogo intercultural.",
            },
            {
                texto: "Maior resistência a mudanças sociais.",
                afirmacao: "A diversidade também pode incentivar adaptações positivas nas estruturas sociais.",
            }
        ]
    },

];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    } 
}


mostraPergunta();