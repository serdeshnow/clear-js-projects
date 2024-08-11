import { Component } from "../core/Component";

export class Form extends Component {
	setup(props) {
		this.props = props;
		this.state = {
			amount: "",
		};

		this.$rootElement = document.createElement("form"); // form as root
		this.$rootElement.className = "donate-form";

		const $formLabel = document.createElement("label"); // label
		$formLabel.className = "donate-form__input-label";
		$formLabel.textContent = "Введите сумму в $";

		const $formInput = document.createElement("input"); // input
		$formInput.className = "donate-form__donate-input";
		$formInput.name = "amount";
		$formInput.type = "number";
		$formInput.max = "100";
		$formInput.min = "1";
		$formInput.required = true;
		this.$formInput = $formInput; // Form prop

		$formLabel.appendChild($formInput); // add input into label
		this.$formInput.addEventListener("input", this.handleInput.bind(this)); // eventListener

		const $submitButton = document.createElement("button"); // button
		$submitButton.disabled = true;
		$submitButton.className = "donate-form__submit-button";
		$submitButton.type = "submit";
		$submitButton.textContent = "Задонатить";
		this.$submitButton = $submitButton; // Form prop

		this.$rootElement.append($formLabel, this.$submitButton); // add label and button into root
		this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this)); // eventListener
	}

	isValid() {
		return this.state.amount >= 1 && this.state.amount <= 100;
	}

	handleInput(event) {
		this.state.amount = event.target.value;
		this.isValid()
			? (this.$submitButton.disabled = false)
			: (this.$submitButton.disabled = true);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(Number(this.state.amount));

		if (this.isValid()) {
			this.state.amount = "0";
			this.$formInput.value = "";
		}
	}
}
