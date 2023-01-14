import Timer from "./timer.js"
import Controls from "./controls.js"
import Events from "./events.js";
import Sounds from "./sounds.js";
import ControlSounds from "./ControlsSounds.js"
import {
  minutesDisplay,
  secondsDiplay,
  buttonPlay,
  buttonPause,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace
} from "./elements.js";

const sounds = Sounds()

const controlSound = ControlSounds()

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonRain,
  buttonForest,
  buttonCoffeeShop,
  buttonFireplace
})

const timer = Timer({
  minutesDisplay,
  secondsDiplay,
  buttonPause,
  buttonPlay,
  resetControls: controls.reset
})

Events({sounds, controlSound, controls, timer});



