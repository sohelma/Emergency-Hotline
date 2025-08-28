//Love icon count ---------
const loveCount = document.getElementById("love-count");
let count = 0;

const loveButtons = document.getElementsByClassName("love"); 
for (let i = 0; i < loveButtons.length; i++) {
    loveButtons[i].addEventListener("click", function() {
        count++;
        loveCount.innerText = count;
    });
}


//call btn and history ---------
const coinCountEl = document.getElementById("coin-count");
const historyList = document.getElementById("history-list");

const callButtons = document.getElementsByClassName("call-btn"); 

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function() {
        let coin = parseInt(coinCountEl.textContent);

        if (coin < 20) {
            alert("You have not enough coin,needed atleast 20 coin ");
            return;
        }
        const name = this.getAttribute("data-name");
        const number = this.getAttribute("data-number");

        alert(`📞 Calling ${name}, ${number}`);

        coin=coin-20;
        coinCountEl.textContent = coin;

        const now = new Date();
        const time = now.toLocaleTimeString();

        const li = document.createElement("li");
        li.textContent = `${name}, ${number} ${time}`;
        historyList.appendChild(li);
    });
}

