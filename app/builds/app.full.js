"use strict";

// ## HomeScene
//
// Represents the Home page.
//
var HomePage = new Combo.Component({
	render: function render() {
		return "\n\t\t\t<h1>Home Page</h1>\n\t\t";
	}
});

// ## FooterComponent
//
// Represents the page footer.
//
var FooterComponent = new Combo.Component({
	render: function render() {
		return "\n\t\t\t<footer>\n\t\t\t\tFooter\n\t\t\t</footer>\n\t\t";
	}
});

// ## HeaderComponent
//
// Represents the page header.
//
var HeaderComponent = new Combo.Component({
	render: function render() {
		return "\n\t\t\t<header>\n\t\t\t\tHeader\n\t\t\t</header>\n\t\t";
	}
});

// ## LayoutScene
//
// Represents the page template.
//
var LayoutPage = new Combo.Component({
	created: function created() {
		this.update({
			page: HomePage
		});
	},
	render: function render() {
		return "\n\t\t\t<div id=\"header\">" + HeaderComponent.render() + "</div>\n\t\t\t<div id=\"content\">" + this.data.page.render() + "</div>\n\t\t\t<div id=\"footer\">" + FooterComponent.render() + "</div>\n\t\t";
	}
});

// ## app
//
// Define application-level variables and methods below.
//

// Render the LayoutPage.
//
LayoutPage.mount(document.getElementById("root"));
