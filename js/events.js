import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonDecrease,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace
} from "./elements.js";

export default function Events({sounds, controlSound, controls, timer}) {
    
    buttonPlay.addEventListener('click', () => {
        controls.play()
        timer.countDown()
        sounds.pressButton()
    })

    buttonPause.addEventListener('click', () => {
        controls.pause()
        timer.hold()
        sounds.pressButton()
    })

    buttonStop.addEventListener('click', () => {
        controls.reset()
        timer.reset()
        sounds.pressButton()
    })

    buttonPlus.addEventListener('click', () => {
        timer.plus()
        sounds.pressButton()
    })

    buttonDecrease.addEventListener('click', () => {
        timer.decrease()
        sounds.pressButton()
    })

    buttonForest.addEventListener('click', () => {
        controls.buttonForestSelected()
        controlSound.soundContrlForest()
        
    })

    buttonRain.addEventListener('click', () => {
        controls.buttonRainSelected()
        controlSound.soundControlRain()
    })

    buttonCoffeeShop.addEventListener('click', () => {
        controls.buttonCoffeeShopSelected()
        controlSound.soundControlCoffeeShop()
    })

    buttonFireplace.addEventListener('click', () => {
        controls.buttonFireplaceSelected()
        controlSound.soundControlFireplace()
    })
}