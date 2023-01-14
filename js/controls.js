export default function Controls({
  buttonPause,
  buttonPlay,
  buttonRain,
  buttonForest,
  buttonCoffeeShop,
  buttonFireplace
}) {

  function play() {
    buttonPause.classList.remove('hide')
    buttonPlay.classList.add('hide')
  }
  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function buttonForestSelected() {
    if (buttonForest.classList.contains('selected')) {
      buttonForest.classList.remove('selected')
      return
    }

    buttonForest.classList.add('selected')
    buttonRain.classList.remove('selected')
    buttonCoffeeShop.classList.remove('selected')
    buttonFireplace.classList.remove('selected')
  }

  function buttonRainSelected() {
    if (buttonRain.classList.contains('selected')) {
      buttonRain.classList.remove('selected')
      return
    }

    buttonForest.classList.remove('selected')
    buttonRain.classList.add('selected')
    buttonCoffeeShop.classList.remove('selected')
    buttonFireplace.classList.remove('selected')
  }

  function buttonCoffeeShopSelected() {
    if (buttonCoffeeShop.classList.contains('selected')) {
      buttonCoffeeShop.classList.remove('selected')
      return
    }

    buttonForest.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonCoffeeShop.classList.add('selected')
    buttonFireplace.classList.remove('selected')
  }

  function buttonFireplaceSelected() {
    if (buttonFireplace.classList.contains('selected')) {
      buttonFireplace.classList.remove('selected')
      return
    }
    buttonForest.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonCoffeeShop.classList.remove('selected')
    buttonFireplace.classList.add('selected')
  }

  return {
    play,
    pause,
    reset,
    buttonForestSelected,
    buttonRainSelected,
    buttonCoffeeShopSelected,
    buttonFireplaceSelected
  }
}