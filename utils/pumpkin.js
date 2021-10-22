/* easter egg */

var modal = document.getElementById("pumpkinModal");

// When the user clicks on the button, open the modal after 900ms
document.getElementById("pumpkin").onclick = function() {
    setTimeout(() => modal.style.display = "block", 900)
}

// When the user clicks the title, the image closes
document.getElementById("pumpkinModalClose").onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// add confetti animation to class
document.querySelector(".confettiClicks").addEventListener("click", function (e) {
    party.confetti(this);
});

/* easter egg end */