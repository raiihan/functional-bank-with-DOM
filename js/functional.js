// A method for get input value
function getInputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const valueText = inputField.value;
    const value = parseFloat(valueText);
    inputField.value = '';
    return value;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    console.log(amount);
})