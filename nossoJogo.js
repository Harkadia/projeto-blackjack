/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    console.log("Boas vindas ao jogo de BlackJack!")

    const BlackJack = (confirm ("Quer iniciar uma nova rodada?"))
    if (BlackJack){
     
    const usuariocarta1 = comprarCarta ()
    const usuariocarta2 = comprarCarta ()
    const pccarta1 = comprarCarta ()
    const pccarta2 = comprarCarta ()
    
    const pontosusuario = usuariocarta1.valor + usuariocarta2. valor
    const pontospc = pccarta1.valor + pccarta2. valor
    
    console.log(`Usuário : cartas: ${usuariocarta1.texto} ${usuariocarta2.texto} = ${pontosusuario}`)
    console.log(`Computador : cartas: ${pccarta1.texto} ${pccarta2.texto} = ${pontospc}`)
    
    if (pontosusuario > pontospc) {
        console.log("O usuário ganhou!")
    } else if (pontospc > pontosusuario) {
        console.log("O computador ganhou!")
    } else if (pontosusuario === pontospc) {
        console.log("Empate!")
    }
    
    } else {
    console.log("O jogo acabou")
    }