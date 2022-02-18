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

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    console.log(amount);
    updateValue('deposit-total', amount);
})