// Show surprise (photo + small message + play music)
function revealSurprise() {
    document.getElementById("surprise").style.display = "block";

    let song = document.getElementById("song");
    if (song) {
        song.play();
    }
}
// Open popup (your big letter)
function showMessage() {
    document.getElementById("popup").style.display = "flex";
}

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}