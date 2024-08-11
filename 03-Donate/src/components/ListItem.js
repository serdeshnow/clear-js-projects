import { Component } from "../core/Component";
import { getDate } from "../core/utils/date";

export class ListItem extends Component {
	setup(props) {
		this.state = {
			id: Date.now(),
			date: getDate(new Date()),
			amount: props.amount,
		};

		this.$rootElement = document.createElement("li"); // li
		this.$rootElement.className = "donate-item";
		this.$rootElement.textContent = `${this.state.date} -`;
		this.$rootElement.id = this.state.id;

		const $boldAmount = document.createElement("b"); // b
		$boldAmount.textContent = `- $ ${this.state.amount} `;

		const $deleteButton = document.createElement("button"); // button
		$deleteButton.className = "delete-button";
		$deleteButton.textContent = "Удалить";
		$deleteButton.id = this.state.id;

		this.$rootElement.addEventListener("click", props.onClick);
		this.$rootElement.append($boldAmount, $deleteButton);
	}
}
