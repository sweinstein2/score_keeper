$(document).ready(function(){

	var score=0;
	$("#increase-5").on("click", function(){
		score +=5;
		$("#score").html(score);
	});
	$("#decrease-5").on("click", function(){
		if (score -5>=0) {
			score -=5;
			$("#score").html(score);
		} else {
			score=0;
			$("#score").html(score);
		}
	});
	$("#submit-custom-score").on ("click", function(){
		var num2=parseInt($("#custom-score").val());
		$("#score").html(num2);
		score=num2;
	});
});