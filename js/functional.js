// A method for get input value
function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const valueText = inputField.value;
    const value = parseFloat(valueText);
    inputField.value = '';
    return value;
}

// function for update total 
function updateValue(fieldId, amount) {
    const totalFiled = document.getElementById(fieldId);
    const totalInText = totalFiled.innerText;
    const previousTotal = parseFloat(totalInText);
    const newTotal = previousTotal + amount;
    totalFiled.innerText = newTotal;
}
// function for upadate Balance
function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalance;
    if (isAdding) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;
}

// handle Deposit Button
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    updateValue('deposit-total', amount);
    updateBalance(amount, true);
})

// handle withdraw Button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    updateValue('withdraw-total', amount);
    updateBalance(amount, false);
})