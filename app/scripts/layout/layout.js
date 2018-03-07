import {Component} from "combo-js";

const Layout = new class extends Component {
	mounted() {
		this.data.page.mount(document.getElementById("content"));
	}
	render() {
		return `
			<div id="header"></div>
			<div id="content"></div>
			<div id="footer"></div>
		`;
	}
}();

export { Layout };