export default function Sounds () {
    //alert
    const buttonPressAudio = new Audio("https://github.com/FernandoAugustoDev/my-files/blob/main/button-press.wav?raw=true");
    const kitchenTimer = new Audio("https://github.com/FernandoAugustoDev/my-files/blob/main/kichen-timer.mp3?raw=true");
    //background sound 
    const bgAudioForest = new Audio("https://github.com/FernandoAugustoDev/my-files/blob/main/Forest.wav?raw=true");
    const bgAudioRain = new Audio("https://github.com/FernandoAugustoDev/my-files/blob/main/Rain.wav?raw=true");
    const bgAudioCoffeShop = new Audio("https://github.com/FernandoAugustoDev/my-files/blob/main/CoffeShop.wav?raw=true");
    const bgAudioFireplace = new Audio("https://github.com/FernandoAugustoDev/my-files/blob/main/Fireplace.wav?raw=true");

    // Audio assim que acionados eles ficam em lopp infinito 
    bgAudioForest.loop = true;
    bgAudioRain.loop = true;
    bgAudioCoffeShop.loop = true;
    bgAudioFireplace.loop = true;
    
    function pressButton(){
        buttonPressAudio.play();
    }
    function timerEnd(){
        kitchenTimer.play();
    }

    return{
        pressButton,
        timerEnd,
        bgAudioForest,
        bgAudioRain,
        bgAudioCoffeShop,
        bgAudioFireplace, 
    }
}