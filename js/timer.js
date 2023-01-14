import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDiplay,
  resetControls
}) {
  
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  //Funnçao que atualiza o display e quando o numero for menor que 10 ele acrescenta o 0
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDiplay.textContent = String(seconds).padStart(2, "0")

  }
  //Funçao para o Contador que esta dentro da funçao countDown
  function hold() {
    clearTimeout(timerTimeOut)
  }

  //Reseta e atualiza o timer 
  function reset() {
    clearTimeout(timerTimeOut)
    updateDisplay(minutes, 0)
  }
  //Aumenta 5 minutos no display 
  function plus() {
    minutes += 5
    updateDisplay(minutes, 0)
  }
  //Diminui 5 minutos no display 
  function decrease() {
    if (minutes > 5) {
      minutes -= 5
      updateDisplay(minutes, 0)
    }
  }
  function countDown() {
    //timerTimeOut variavel que armazena funçao setTimeout que atulizar no timer a cada 1 segundo
    timerTimeOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDiplay.textContent)

      //verificando os minutos e segundos zerados para resetar o timer display 
      if (minutes <= 0 && seconds <= 0) {
        reset()
        resetControls()
        Sounds().timerEnd()

        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      
      //Atualizar o timer com menos 1 segundo 
      updateDisplay(minutes, String(seconds - 1))
      countDown()
    }, 1000);
  }
  return {
    updateDisplay,
    hold,
    reset,
    plus,
    decrease,
    countDown
  }
}