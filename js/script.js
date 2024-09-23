function getInnerValueWithElementById(id) {
    const innerText = document.getElementById(id).innerText;
    return Number(innerText)
}

function getInputValueById(id) {
    return document.getElementById(id).value;
}

function getInputValueByIde(inputId) {
    const InputAmount = document.getElementById(inputId).value;

    const donateAmount = Number(InputAmount)

    if (isNaN(donateAmount) || InputAmount.trim() === "") {
        alert("Please input a valid amount!")
    } else {
        return InputAmount;
    }
}

function checkSufficientBallance(mainBalance, donateAmount) {
    if (donateAmount > mainBalance) {
        return false;
    } else {
        return true;
    }
}

function popUpModal() {
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    modal.classList.remove('hidden');
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

function makeDonationforNoakhali() {
    const mainBalance = getInnerValueWithElementById("mainBalance");
    const currentAmount = Number(document.getElementById("noakhaliAmount").innerText);
    const donateAmount = document.getElementById("noakhaliDonateInput").value
    const donateAmountNumber = Number(donateAmount)

    const time = Date()

    if (isNaN(donateAmountNumber) || donateAmount.trim() === "" || donateAmountNumber < 1) {
        alert("Please input a valid amount!")
    } else {
        const checkBalance = checkSufficientBallance(mainBalance, donateAmountNumber)
        console.log(checkBalance)

        if (checkBalance === false) {
            alert("You do not have sufficient balance to make the donation!");
        } else {
            const finalAmount = donateAmountNumber + currentAmount;
            const finalBalance = mainBalance - donateAmountNumber;

            document.getElementById("mainBalance").innerText = finalBalance
            document.getElementById("noakhaliAmount").innerText = finalAmount

            document.getElementById("noakhaliDonateInput").value = ""

            popUpModal();

            // Add in the History section      
            const newEntry = document.createElement('div');
            newEntry.className = 'p-6 w-full border rounded-lg mb-10 bg-white shadow-md transition-transform transform hover:scale-105 duration-300';
            newEntry.innerHTML = `
            <h1 class="text-xl font-semibold text-gray-800">${donateAmountNumber} Taka Donated for Donate for Flood at Noakhali, Bangladesh</h1>
            <p class="text-gray-600 mt-2 bg-slate-50">Date: ${time}</p>
        `;
            const historyDiv = document.getElementById('history');
            historyDiv.appendChild(newEntry);
        }
    }    
}

// Function for makeDonationforFeni
function makeDonationforFeni(mainBalance, currentAmount, donateInput, donateAmount) {
    const time = Date()

    if (isNaN(donateAmount) || donateInput.trim() === "" || donateAmount < 1) {
        alert("Please input a valid amount!")
    } else {
        const checkBalance = checkSufficientBallance(mainBalance, donateAmount)
        console.log(checkBalance)
        if (checkBalance === false) {
            alert("You do not have sufficient balance to make the donation!");
        } else {
            const finalAmount = donateAmount + currentAmount;
            const finalBalance = mainBalance - donateAmount;

            document.getElementById("mainBalance").innerText = finalBalance
            document.getElementById("feniAmount").innerText = finalAmount

            document.getElementById("feniDonateInput").value = ""

            popUpModal();

            // Add in the History section      
            const newEntry = document.createElement('div');
            newEntry.className = 'p-6 w-full border rounded-lg mb-10 bg-white shadow-md transition-transform transform hover:scale-105 duration-300';
            newEntry.innerHTML = `
            <h1 class="text-xl font-semibold text-gray-800">${donateAmount} Taka Donated for Donate for Flood at Feni, Bangladesh</h1>
            <p class="text-gray-600 mt-2 bg-slate-50">Date: ${time}</p>
        `;
            const historyDiv = document.getElementById('history');
            historyDiv.appendChild(newEntry);
        }
    }
}

// Function for makeDonationforQuota
function makeDonationforQuota(mainBalance, currentAmount, donateInput, donateAmount) {
    const time = Date()

    if (isNaN(donateAmount) || donateInput.trim() === "" || donateAmount < 1) {
        alert("Please input a valid amount!")
    } else {
        const checkBalance = checkSufficientBallance(mainBalance, donateAmount)
        console.log(checkBalance)
        if (checkBalance === false) {
            alert("You do not have sufficient balance to make the donation!");
        } else {
            const finalAmount = donateAmount + currentAmount;
            const finalBalance = mainBalance - donateAmount;

            document.getElementById("mainBalance").innerText = finalBalance
            document.getElementById("qoutaAmount").innerText = finalAmount

            document.getElementById("quotaDonateInput").value = ""

            popUpModal();

            // Add in the History section      
            const newEntry = document.createElement('div');
            newEntry.className = 'p-6 w-full border rounded-lg mb-10 bg-white shadow-md transition-transform transform hover:scale-105 duration-300';
            newEntry.innerHTML = `
            <h1 class="text-xl font-semibold text-gray-800">${donateAmount} Taka Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
            <p class="text-gray-600 mt-2 bg-slate-50">Date: ${time}</p>
        `;
            const historyDiv = document.getElementById('history');
            historyDiv.appendChild(newEntry);
        }
    }
}


const mainBalance = getInnerValueWithElementById("mainBalance");

// Main Function Call Here
const donateNoakhaliBtn = document.getElementById("donateNoakhaliBtn");
const donateFeniBtn = document.getElementById("donateFeniBtn");
const donateQuotaBtn = document.getElementById("donateQuotaBtn");

// Donate for Noakhali
donateNoakhaliBtn.addEventListener("click", function () {
    makeDonationforNoakhali()
    // console.log(noakhaliDonateInput)
})

// Donate for Feni
donateFeniBtn.addEventListener("click", function () {
    const mainBalance = getInnerValueWithElementById("mainBalance");
    const currentAmount = Number(document.getElementById("feniAmount").innerText);
    const donateInput = document.getElementById("feniDonateInput").value
    const donateAmount = Number(donateInput)

    makeDonationforFeni(mainBalance, currentAmount, donateInput, donateAmount)
    // console.log(noakhaliDonateInput)
})

// Donate for Quota
donateQuotaBtn.addEventListener("click", function () {
    const mainBalance = getInnerValueWithElementById("mainBalance");
    const currentAmount = Number(document.getElementById("qoutaAmount").innerText);
    const donateInput = document.getElementById("quotaDonateInput").value
    const donateAmount = Number(donateInput)

    makeDonationforQuota(mainBalance, currentAmount, donateInput, donateAmount)
    // console.log(noakhaliDonateInput)
})



// button toggle option

const historyBtn = document.getElementById("historyBtn");
const donationBtn = document.getElementById("donationBtn");

const donationDiv = document.getElementById("donation");
const historyDiv = document.getElementById("history");

historyBtn.addEventListener("click", function () {
    donationBtn.classList.remove("button-green");
    donationBtn.classList.add("button-white");

    historyBtn.classList.add("button-green");
    historyBtn.classList.remove("button-white");

    donationDiv.classList.add("hidden")
    historyDiv.classList.remove("hidden")
})

donationBtn.addEventListener("click", function () {
    donationBtn.classList.add("button-green");
    donationBtn.classList.remove("button-white");

    historyBtn.classList.remove("button-green");
    historyBtn.classList.add("button-white");

    donationDiv.classList.remove("hidden")
    historyDiv.classList.add("hidden")
})
