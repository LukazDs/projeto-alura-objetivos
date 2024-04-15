function getData() {
    const data = [
        {
            abaName: "Cursos na Alura",
            title: "Estudar 4 cursos na Alura",
            tempo: "2024-10-05T00:00:00"            
        },
        {
            abaName: "Criar projetos em JavaScript",
            title: "Criar 5 projetos em Javascript",  
            tempo: "2024-04-16T00:00:00"            
        },
        {
            abaName: "Criar um portfólio",
            title: "Criar um portfolio com os meus 3 melhores projetos", 
            tempo: "2023-10-05T00:00:00"             
        },
        {
            abaName: "Atualizar meu currículo",
            title: "Atualizar meu curriculo com os certificados da Alura",
            tempo: "2024-11-05T00:00:00"              
        },

    ]

    return data
}

let tempoAba = "2024-10-05T00:00:00" 

function changeAba(element) {
    const buttonActived = document.querySelector(".ativo")

    if(buttonActived) {
        buttonActived.classList.remove("ativo")
    }

    element.classList.add("ativo")

    changeText(element.innerText)

}

function changeText(text) {
    const textos = document.querySelector(".abas-textos")

    textos.innerHTML = ''

    const data = getData()

    for(let i = 0; i < data.length; i ++) {
        if(text === data[i].abaName) {
            textos.innerHTML = `
                <div class="aba-conteudo">
                    <h3 class="aba-conteudo-titulo-principal">${data[i].title}</h3>
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador"></div>
                </div>`

            tempoAba = data[i].tempo
            makeContador(tempoAba)
        }    
    }
}

function makeContador(tempo) {
    const contador = document.querySelector(".contador")
    const tempoObjetivo = new Date(tempo)

    contador.textContent = calcularTempo(tempoObjetivo)
}

 function calcularTempo(tempoObjetivo) {
    const tempoAtual = new Date()
    const tempoFinal = tempoObjetivo - tempoAtual
    let segundos = Math.floor(tempoFinal / 1000)
    let minutos = Math.floor(segundos / 60)
    let horas = Math.floor(minutos / 60)
    const dias = Math.floor(horas / 24)

    segundos %= 60
    minutos %= 60
    horas %= 24

    let intervalo = dias + " d " + horas + " h " + minutos + " m " + segundos + " s "

    if(parseInt(segundos) < 0) {
        intervalo = "Prazo Finalizado!"
    }

    return intervalo
}

function updateContador() {
    setInterval(() => makeContador(tempoAba), 1000)
}

updateContador()
