let text = "Creating Global Leaders in Tech and Sustainability";
let index = 0;

function displayTextWithDelay() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text[index];
        index++;
        setTimeout(displayTextWithDelay, text[index - 1] === " " ? 0 : 100); // No delay for spaces
    }
}

displayTextWithDelay();
