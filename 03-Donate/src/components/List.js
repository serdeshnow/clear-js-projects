import { Component } from "../core/Component";

export class List extends Component {
	setup() {
		this.$rootElement = document.createElement("div"); // div as root
		this.$rootElement.className = "donates-container";

		const $heading = document.createElement("h2"); // h2
		$heading.className = "donates-container__title";
		$heading.textContent = "Список донатов";

		const $donatesList = document.createElement("ul"); // ul
		$donatesList.className = "donates-container__donates";
		this.$donatesList = $donatesList; // List prop

		this.$rootElement.append($heading, $donatesList); // add h2 and ul into root
	}

	addItem(item) {
		this.$donatesList.append(item.$rootElement);
	}

	deleteItem(id) {
		document.getElementById(id).remove();
	}
}
