var drums = document.querySelectorAll(".drum")

// Loop through all the drums
for (var i = 0; i < drums.length; i++){
    // Add a click event listener to each drum
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // Call the drumHit function with the inner text of the drum
        drumHit(this.innerText);
        buttonAnimation(this.innerText);
    });
};

// Add a keydown event listener to the window
addEventListener("keydown", function(event) {
    // Call the drumHit function with the key that was pressed
    drumHit(event.key);
    buttonAnimation(event.key);
});

// Plays a specific audio file based on the input key.
function drumHit(input) {
    switch (input) {
        case "w":
            var tom1 = new Audio(`./assets/sounds/tom-1.mp3`);
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio(`./assets/sounds/tom-2.mp3`);
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio(`./assets/sounds/tom-3.mp3`);
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio(`./assets/sounds/tom-4.mp3`);
            tom4.play();
            break;

        case "j":
            var snare = new Audio(`./assets/sounds/snare.mp3`);
            snare.play();
            break;

        case "k":
            var crash = new Audio(`./assets/sounds/crash.mp3`);
            crash.play();
            break;

        case "l":
            var kick = new Audio(`./assets/sounds/kick-bass.mp3`);
            kick.play();
            break;

        default:
            console.log(input);
    }
}

function buttonAnimation(currentKey) {
    // Pull specific element that called function and place into variable
    var activeButton = document.querySelector(`.${currentKey}`)
    // Add transparency class to element
    activeButton.classList.add("pressed");
    // Remove transparency after delay
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}