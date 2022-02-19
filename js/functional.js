// A method for get input value
function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const valueText = inputField.value;
    const value = parseFloat(valueText);
    inputField.value = '';
    return value;
}
// get Inner Text
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldTagInText = fieldTag.innerText;
    const value = parseFloat(fieldTagInText);
    return value;
}

// function for update total 
function updateValue(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}
// function for upadate Balance
function updateBalance() {
    const depositBalance = getInnerTextValue('deposit-total');
    const withdrawBalance = getInnerTextValue('withdraw-total');
    const newBalance = depositBalance - withdrawBalance + 1240;
    document.getElementById('balance-total').innerText = newBalance;
}

// handle Deposit Button
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateValue('deposit-total', amount);
        updateBalance();
    }

})

// handle withdraw Button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateValue('withdraw-total', amount);
        updateBalance();
    }

})