// ## LayoutScene
//
// Represents the page template.
//
var LayoutPage = new Combo.Component({
	created: function() {
		this.update({
			page: HomePage
		});
	},
	render: function() {
		return `
			<div id="header">${HeaderComponent.render()}</div>
			<div id="content">${this.data.page.render()}</div>
			<div id="footer">${FooterComponent.render()}</div>
		`;
	}
});
