Meteor.startup(function () {
	$("#generate").click(function (event) {
		event.preventDefault();
		$("#mad-lib-text").css("opacity", "0");
		let exclamation = $("#inputExclamation").val();
		let adverb = $("#inputAdverb").val();
		let noun = $("#inputNoun").val();
		let verb = $("#inputVerb").val();
		let madLib = "'"+exclamation+"' he said, as he " + adverb + " jumped onto his " + noun + " and " + verb + " into the sunset.";
		console.log(madLib);

		$("#mad-lib-text").html(madLib);
		$("#mad-lib-text").css("color", "#0000ff");
		$("#mad-lib-text").animate({
			opacity: 1
		}, 2000, function(){});
	});
});