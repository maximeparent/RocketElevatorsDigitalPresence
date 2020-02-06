// When user load the webpage every questions is hidden.

$(document).ready(function () {
	$(".option-res").hide();
	$(".option-com").hide();
	$(".option-cor").hide();
	$(".option-hyb").hide();
});

// When user choose an option show the right elements and hide the rest.
$("#form-answer").change(function () {
	var value = $(this).val();
	if (value === "residential") {
		$(".option-res").show();
		$(".option-com").hide();
		$(".option-cor").hide();
		$(".option-hyb").hide();
	} else if (value === "commercial") {
		$(".option-res").hide();
		$(".option-com").show();
		$(".option-cor").hide();
		$(".option-hyb").hide();
	} else if (value === "corporate") {
		$(".option-res").hide();
		$(".option-com").hide();
		$(".option-cor").show();
		$(".option-hyb").hide();
	} else if (value === "hybrid") {
		$(".option-res").hide();
		$(".option-com").hide();
		$(".option-cor").hide();
		$(".option-hyb").show();
	} else {
		$(".option-res").hide();
		$(".option-com").hide();
		$(".option-cor").hide();
		$(".option-hyb").hide();
	}

});
