import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
	setup(props) {
		this.state = {
			total: 0,
			donates: [],
		};

		this.$rootElement = document.createElement("div"); // div as root
		this.$rootElement.className = "app";

		const $heading = document.createElement("h1"); // h1
		$heading.className = "total-amount";
		$heading.textContent = `Итого: $`;

		const $headingSpan = document.createElement("span"); // span
		$headingSpan.textContent = this.state.total;
		this.$headingSpan = $headingSpan; // prop

		$heading.appendChild($headingSpan); // add span into h1
		this.$rootElement.appendChild($heading); // add h1 into root

		const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
		this.$rootElement.appendChild(donateForm.$rootElement);
		const donateList = new List();
		this.$rootElement.appendChild(donateList.$rootElement);
		this.donateList = donateList;
	}

	onItemCreate(amount) {
		const $listItem = new ListItem({
			amount: amount,
			onClick: this.handleDelete.bind(this),
		});
		this.state.donates.push($listItem);
		this.state.total += amount;
		this.$headingSpan.textContent = this.state.total;

		this.donateList.addItem($listItem);

		// console.log("App state donates", this.state.donates);
		// console.log("App state total", this.state.total);
	}

	handleDelete(event) {
		const itemId = Number(event.target.id);
		// console.log(itemId);

		this.state.donates.forEach((donateObj, index) => {
			if (donateObj.state.id === itemId) {
				// console.log("Found! ", donateObj.state);
				this.state.total -= donateObj.state.amount;
				this.state.donates = [
					...this.state.donates.slice(0, index),
					...this.state.donates.slice(index + 1),
				];

				this.$headingSpan.textContent = this.state.total;
				this.donateList.deleteItem(itemId);

				// console.log("donates: ", this.state.donates);
			}
		});
	}
}
