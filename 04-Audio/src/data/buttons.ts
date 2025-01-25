import type {SoundButton} from '../models/sound-button.ts';

import rainSound from '../assets/sounds/rain-03.mp3';
import summerSound from '../assets/sounds/summer.mp3';
import winterSound from '../assets/sounds/winter.mp3';

import rainyBg from '../assets/backgrounds/rainy-bg.jpg';
import summerBg from '../assets/backgrounds/summer-bg.jpg';
import winterBg from '../assets/backgrounds/winter-bg.jpg';

import rainyIcon from '../assets/icons/cloud-rain.svg';
import summerIcon from '../assets/icons/sun.svg';
import winterIcon from '../assets/icons/cloud-snow.svg';

export const buttons: SoundButton[] = [
	{id: 'rain', soundFile: rainSound, background: `url(${rainyBg})`, icon:`url(${rainyIcon})`},
	{id: 'forest', soundFile: summerSound, background: `url(${summerBg})`, icon:`url(${summerIcon})`},
	{id: 'waves', soundFile: winterSound, background: `url(${winterBg})`, icon:`url(${winterIcon})`},
];