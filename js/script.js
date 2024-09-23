function getInnerValueWithElementById(id) {
    const innerText = document.getElementById(id).innerText;
    return Number(innerText)
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

function makeDonationforNoakhali() {
    const mainBalance = getInnerValueWithElementById("mainBalance");
    const currentAmount = Number(document.getElementById("noakhaliAmount").innerText);
    const donateAmount = document.getElementById("noakhaliDonateInput").value
    const donateAmountNumber = Number(donateAmount)

    const time = Date()

    if (isNaN(donateAmountNumber) || donateAmount.trim() === "") {
        alert("Please input a valid amount!")
    } else {
        const finalAmount = donateAmountNumber + currentAmount;
        const finalBalance = mainBalance - donateAmountNumber;

        document.getElementById("mainBalance").innerText = finalBalance
        document.getElementById("noakhaliAmount").innerText = finalAmount

        document.getElementById("noakhaliDonateInput").value = ""

        const modal = document.getElementById('modal');
        const closeModal = document.getElementById('closeModal');
        modal.classList.remove('hidden');
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Add in the History section
        const history = document.getElementById('history');        
        const newEntry = document.createElement('div');
        newEntry.className = 'p-6 w-full border rounded-lg mb-10 bg-white shadow-md transition-transform transform hover:scale-105 duration-300';
        newEntry.innerHTML = `
        <h1 class="text-xl font-semibold text-gray-800">${donateAmountNumber} Taka Donated for Famine Relief - 2024</h1>
        <p class="text-gray-600 mt-2 bg-slate-50">Date: ${time}</p>
    `;
        const historyDiv = document.getElementById('history');
        historyDiv.appendChild(newEntry);
        flag = 1;
    }    
}

const mainBalance = getInnerValueWithElementById("mainBalance");



// Main Function Call Here
const donateNoakhaliBtn = document.getElementById("donateNoakhaliBtn");

donateNoakhaliBtn.addEventListener("click", function () {
    makeDonationforNoakhali()
    // console.log(noakhaliDonateInput)
})



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
