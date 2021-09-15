"use strict"
const semaforo = document.getElementById("semaforo")
let idVerde
let idAmarelo
let idVermelho

function semaphoreGreen() {
    const semaforo = document.getElementById("semaforo")
    semaforo.src = "img/verde.png"
  //  const botaoLigar = document.getElementById("ligar")
    //const botaoDesligar = document.getElementById("desligar")
}
function semaphoreYellow(){
    const semaforo = document.getElementById("semaforo")
    semaforo.src = "img/amarelo.png"
  //  const botaoLigar = document.getElementById("ligar")
    //const botaoDesligar = document.getElementById("desligar")
}
function semaphoreRed(){
    const semaforo = document.getElementById("semaforo")
    semaforo.src = "img/vermelho.png"
  //  const botaoLigar = document.getElementById("ligar")
    //const botaoDesligar = document.getElementById("desligar")
}
function parar(){
    clearInterval(idVerde)
    clearInterval(idAmarelo)
    clearInterval(idVermelho)
}
function mudarCor(){
    if(semaforo.src = "img/vermelho.png"){
        //semaforo.src = "img/amarelo.png"
        idAmarelo = setInterval(semaphoreYellow, 600)
    }else if(semaforo.src = "img/amarelo.png");{
            //semaforo.src = "img/verde.png"
            idVerde = setInterval(semaphoreGreen, 500)
        if(semaforo.src = "img/verde.png")
            //semaforo.src = "img/vermelho.png"
            idVermelho = setInterval(semaphoreRed, 1000)
    }

}
function automatico(){
    const botaoAutomatico = document.getElementById("automatico")
    if(botaoAutomatico.textContent == "Automático"){
        mudarCor();
        //idVerde = setTimeout(semaphoreGreen, 500)
        //idAmarelo = setTimeout(semaphoreYellow, 700)
        //idVermelho = setTimeout(semaphoreRed, 800)

       // botaoAutomatico.textContent = "Parar"
    }else{
        parar()
        botaoAutomatico.textContent = "Automatico"
    }
}

   // eventos
document.getElementById('verde')
   .addEventListener("click", semaphoreGreen)
document.getElementById('amarelo')
   .addEventListener("click", semaphoreYellow)    
document.getElementById('vermelho')
   .addEventListener("click", semaphoreRed)    


document.getElementById("automatico")
   .addEventListener("click", automatico)