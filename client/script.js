Meteor.startup(function () {
	$("#generate").click(function (event) {
		event.preventDefault();
		console.log("Hello, world!");
	});
});