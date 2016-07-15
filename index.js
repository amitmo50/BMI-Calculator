$(function () {
	getInputsValue = function () {
		values = {
			name: $("#name").val(),
			weight: $("#weight").val(),
			height: $("#height").val()
		};

		return values;
	};

	$(".submit-button").click(function () {
		values = getInputsValue();

		result = values.weight / (Math.pow((values.height / 100), 2));

		resultMessage = values.name + ", You are ";

		$(".image").hide();

		if (result < 18.5) {
			resultMessage += "Underweight! Start Eating!";
			$(".x").show();
		}
		else if (result >= 18.5 && result < 25) {
			resultMessage += "Normal Weight! Nice Work!";
			$(".v").show();
		}
		else if (result >= 25 && result < 30) {
			resultMessage += "Over Weight! Calm Down With The Food Habibi!";
			$(".x").show();
		}
		else {
			resultMessage += "Obese! Shamennnnnnn!!!!!!";
			$(".x").show();
		}

		resultMessage += " (your score is: " + result.toFixed(2) + ").";
		$(".result-message").html(resultMessage);
	});

	$("body").keydown(function (e) {
		if (e.keyCode === 13) {
			$(".submit-button").trigger("click");
		}
	});
});