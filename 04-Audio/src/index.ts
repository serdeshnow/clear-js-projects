import './index.css';
import { buttons } from './data/buttons';
import type { SoundButton } from './models/sound-button';
import pauseIcon from './assets/icons/pause.svg';

let currentAudio: HTMLAudioElement | null = null;
const volumeControl = document.getElementById('volume') as HTMLInputElement;

function resetIcons(): void {
	buttons.forEach((button) => {
		const buttonHTML = document.getElementById(button.id);
		const icon = buttonHTML?.querySelector('.button-ico') as HTMLElement;
		if (icon) {
			icon.style.backgroundImage = button.icon;
		}
	});
}

function stopCurrentAudio(): void {
	if (currentAudio) {
		currentAudio.pause();
		currentAudio.currentTime = 0;
	}
}

async function handleButtonClick(button: SoundButton, buttonHTML: HTMLElement) {
	if (!currentAudio || currentAudio.src !== `http://localhost:8080${button.soundFile}`) {
		resetIcons();
		stopCurrentAudio();
		currentAudio = new Audio(button.soundFile);
		await currentAudio.play();
		currentAudio.volume = parseFloat(volumeControl.value);
		document.body.style.backgroundImage = button.background;
	} else {
		currentAudio.pause();
		const icon: HTMLElement | null = buttonHTML.querySelector('.button-ico');
		icon!.style.backgroundImage = `url(${pauseIcon})`;
		currentAudio = null;
	}
}

volumeControl.addEventListener('input', () => {
	if (currentAudio) {
		currentAudio.volume = parseFloat(volumeControl.value);
	}
});

window.onload = () => {
	buttons.forEach((button) => {
		const buttonHTML: HTMLElement | null = document.getElementById(button.id);
		if (buttonHTML) {
			const icon: HTMLElement | null = buttonHTML.querySelector('.button-ico');
			buttonHTML.style.backgroundImage = button.background;
			icon!.style.backgroundImage = button.icon;
			buttonHTML.addEventListener('click', () => handleButtonClick(button, buttonHTML));
		}
	});
};
