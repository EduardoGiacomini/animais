import '../scss/main.scss'
import { animals } from "./constants";

function setup() {
    for (const animal of animals) {
        const element = _createAnimalElementReference(animal);
        _createAnimalElementEventListener(element, animal);
    }
}

function _createAnimalElementReference(animal) {
    return document.getElementById(animal);
}

function _createAnimalElementEventListener(element, animal) {
    element.addEventListener("mouseenter", () => playAudio(animal));
}

function playAudio(animal) {
    const audioPath = _buildAudioPath(animal);
    const audio = new Audio(audioPath);
    audio.play();
}

function _buildAudioPath(audioName) {
    return `./assets/audio/${audioName}.mp3`;
}

setup()
