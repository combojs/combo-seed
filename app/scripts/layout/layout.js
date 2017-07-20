// ## LayoutScene
//
// Represents the page template.
//
var LayoutScene = Combo.Component.extend({
	created: function() {
		this.update({
			scene: HomeScene
		});
	},
	render: function() {
		return `
			<div id="header">${HeaderComponent.render()}</div>
			<div id="content">${this.data.scene.render()}</div>
			<div id="footer">${FooterComponent.render()}</div>
		`;
	}
});
