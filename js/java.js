const loveCount = document.getElementById("love-count");
let count = 0;

const loveButtons = document.getElementsByClassName("love"); 
for (let i = 0; i < loveButtons.length; i++) {
    loveButtons[i].addEventListener("click", function() {
        count++;
        loveCount.innerText = count;
    });
}