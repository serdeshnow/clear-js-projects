import { Component } from "../core/Component";

export class YourComponent extends Component {
	setup(props) {
		this.state = {
			counter: 0,
		};

		this.$rootElement = document.createElement("div");

		const $heading = document.createElement("h1");
		// Первоначальный заголовок будет — Hello world: 0
		$heading.textContent = `${props.heading}: ${this.state.counter}`;
		// Заносим элемент в поле $heading, чтобы потом смогли к нему обратиться
		this.$heading = $heading;
		this.$rootElement.appendChild($heading);

		// Создаем кнопку
		const $button = document.createElement("button");
		$button.textContent = "Увеличить счетчик";
		// Передаем обработчик с закрепленным контекстом
		$button.addEventListener("click", this.handleClick.bind(this));
		this.$rootElement.appendChild($button);
	}

	// Вызывается каждый раз при клике на кнопку
	handleClick(event) {
		// Увеличиваем счетчик
		this.state.counter++;
		// В методах класса входные параметры доступны через this.props
		const newTitle = `${this.props.heading}: ${this.state.counter}`;
		// Получаем элемент заголовка и обновляем его значение
		this.$heading.textContent = newTitle;
	}
}
