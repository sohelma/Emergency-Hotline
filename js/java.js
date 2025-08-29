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
            alert("❌ You have not enough coin,needed atleast 20 coin ");
            return;
        }
        const name = this.getAttribute("data-name");
        const number = this.getAttribute("data-number");

        alert(`📞 Calling ${name}, ${number}`);

        coin=coin-20;
        coinCountEl.textContent = coin;

        const now = new Date();
        const time = now.toLocaleTimeString();

     // -------- -------- li-design------------- ----
        const li = document.createElement("li");
        li.className = "bg-gray-100 p-4 m-2 rounded-md";
        li.innerHTML = `
          <div class="flex justify-between items-center gap-3">
             <div>
                <span class=" text-[18px] font-semibold text-gray-800">${name}</span>
                <div class="text-md text-gray-700 mt-1">${number}</div>
             </div>
                <span class="text-md text-gray-800">${time}</span>
            </div>
        `;
        historyList.appendChild(li);
    });
}


//-------------clear-btn---------------
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
});

//--------copy button------------------

const copyCountEl = document.getElementById("copy-count");
let copyCount = 0;

// select all copy buttons with class .copy-btn
const copyButtons = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function() {
        // find the number inside the same card
        const number = this.parentElement.parentElement.querySelector("h1:nth-of-type(2)").textContent;

        // copy 
        navigator.clipboard.writeText(number).then(() => {
            copyCount++;
            copyCountEl.textContent = `${copyCount} Copy`; 
            alert(`Number copied ${number}`);
        }).catch(() => {
            alert("❌ Failed to copy number.");
        });
    });
}
