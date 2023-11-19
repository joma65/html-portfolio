const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let active = false;

$(document).on("keypress", function () {
	if (active === false) {
		nextSequence();
		$("#level-title").text(`Level ${level}`);
	}
	active = true;
});

$(".btn").on("click", function (event) {
	userChosenColor = this.id;
	userClickedPattern.push(userChosenColor);
	playSound(userChosenColor);
	animatePress(userChosenColor);
	checkAnswer(userClickedPattern.length);
});

function nextSequence() {
	level++;
	$("#level-title").text(`Level ${level}`);
	randomChosenColor =
		buttonColours[Math.floor(Math.random() * buttonColours.length)];
	gamePattern.push(randomChosenColor);
	$(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
	playSound(randomChosenColor);
}

function animatePress(currentColor) {
	$(`#${currentColor}`).addClass("pressed");
	setTimeout(function () {
		$(`#${currentColor}`).removeClass("pressed");
	}, 100);
}

function playSound(name) {
	var audio = new Audio(`./sounds/${name}.mp3`);
	audio.play();
}

function checkAnswer(currentLevel) {
	console.log(currentLevel);
	console.log(
		`Game Index: ${currentLevel - 1} Game Color: ${
			gamePattern[currentLevel - 1]
		} Player Index: ${currentLevel - 1} Player Color: ${
			userClickedPattern[currentLevel - 1]
		}`
	);
	if (gamePattern[currentLevel - 1] === userClickedPattern[currentLevel - 1]) {
		if (userClickedPattern.length === level) {
			userClickedPattern = [];
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		console.log("Wrong");
		startOver();
	}
}

function startOver() {
	$("body").addClass("game-over");
	setTimeout(function () {
		$("body").removeClass("game-over");
	}, 200);
	$("#level-title").text("Game Over, Press Any Key to Restart");
	active = false;
	gamePattern = [];
	level = 0;
	userClickedPattern = [];
	console.log(
		`Reset Status - Active: ${active} Game State: ${gamePattern} Level: ${level} User State: ${userClickedPattern}`
	);
	playSound("wrong");
}
