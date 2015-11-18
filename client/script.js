Meteor.startup(function () {
	$("#generate").click(function (event) {
		event.preventDefault();
		let exclamation = $("#inputExclamation").val();
		let adverb = $("#inputAdverb").val();
		let noun = $("#inputNoun").val();
		let verb = $("#inputVerb").val();
		let madLib = "'"+exclamation+"' he said, as he " + adverb + " jumped onto his " + noun + " and " + verb + " into the sunset.";
		console.log(madLib);
	});
});