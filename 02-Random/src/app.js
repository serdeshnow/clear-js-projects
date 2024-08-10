import { getRandomColor } from "./utils/get-random-color";

export default function initApp() {
	const button = document.createElement("button");
	button.className = "button";
	button.textContent = "Change page color";
	document.body.append(button);
	button.addEventListener("click", (event) => {
		const color = getRandomColor();
		document.body.style.backgroundColor = color;
	});
}
