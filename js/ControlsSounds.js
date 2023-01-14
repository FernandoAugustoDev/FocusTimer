import {
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace
} from "./elements.js"

import Sounds from "./sounds.js"

const sounds = Sounds()

export default function ControlSounds() {

  function soundContrlForest() {
    sounds.bgAudioForest.pause()
    sounds.bgAudioRain.pause()
    sounds.bgAudioCoffeShop.pause()
    sounds.bgAudioFireplace.pause()
    if (buttonForest.classList.contains('selected')) {
      sounds.bgAudioForest.play()
      return
    }
  }

  function soundControlRain() {
    sounds.bgAudioForest.pause()
    sounds.bgAudioRain.pause()
    sounds.bgAudioCoffeShop.pause()
    sounds.bgAudioFireplace.pause()
    if (buttonRain.classList.contains('selected')) {
      sounds.bgAudioRain.play()
      return
    }
  }

  function soundControlCoffeeShop() {
    sounds.bgAudioForest.pause()
    sounds.bgAudioRain.pause()
    sounds.bgAudioCoffeShop.pause()
    sounds.bgAudioFireplace.pause()
    if (buttonCoffeeShop.classList.contains('selected')) {
      sounds.bgAudioCoffeShop.play()
      return
    }
  }

  function soundControlFireplace() {
    sounds.bgAudioForest.pause()
    sounds.bgAudioRain.pause()
    sounds.bgAudioCoffeShop.pause()
    sounds.bgAudioFireplace.pause()
    if (buttonFireplace.classList.contains('selected')) {
      sounds.bgAudioFireplace.play()
      return
    }
  }

  return {
    soundContrlForest,
    soundControlRain,
    soundControlCoffeeShop,
    soundControlFireplace
  }
}