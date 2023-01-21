
const selectBtn = document.getElementsByClassName('playerCardButton');

let count = 0;
for (let select of selectBtn) {
    select.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.firstChild.nextSibling.innerText;
        count++;
        if (count <= 5) {
            addFive(playerName, count);
            event.target.disabled = "disabled";

        } else {
            alert(" can't get more then five");
            count--;
        }
    });


    
}
function addFive(singleOne, count) {
    const fivePlayers = document.getElementById("playerName");
    const ol = document.createElement('ol');
    ol.innerHTML = ` <li>${count}. ${singleOne}</li> `;
    fivePlayers.appendChild(ol);
}




// calculation section
document.getElementById('calculat').addEventListener('click', function () {
    const calculated = document.getElementById('playerCalculation');
    const Amount = calculated.value;
    calculated.value = '';

    // console.log(Amount);
    const playerexpenses = document.getElementById('expenses');
    const totalAmount = Amount * count;
    playerexpenses.innerText = totalAmount
    // console.log(totalAmount);
    // done player section

})
document.getElementById('Total').addEventListener('click', function () {

    const playerexpensesString = document.getElementById('expenses').innerText;
    const playerexpenses = parseFloat(playerexpensesString);



    const manager = document.getElementById('Manager');
    const managerAmountString = manager.value;
    const managerAmount = parseFloat(managerAmountString);
    manager.value = '';
    console.log(managerAmount);

    const coach = document.getElementById('Coach');
    const coachAmountString = coach.value;
    const coachAmount = parseFloat(coachAmountString);
    coach.value = '';
    // console.log(coachAmount)

    const totalCost = document.getElementById('cost');
    const allCost = playerexpenses + managerAmount + coachAmount;
    totalCost.innerText = allCost;



})
