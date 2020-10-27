const selectableNumbers = document.querySelectorAll('.number');
const selectableBtns = document.querySelectorAll('.number-selector');

const choosedNumber = document.getElementById('selected');
const clearerBtn = document.getElementById('clearer');

let x = choosedNumber.textContent;

clearerBtn.addEventListener('click', () => {
    choosedNumber.textContent = 'x';
});

selectableNumbers.forEach((selectednumber) => {
    selectednumber.addEventListener('click', () => {
        choosedNumber.textContent = selectednumber.textContent
    });
});

selectableBtns.forEach((selectableBtn) => {
    selectableBtn.addEventListener('click', event => {
        choosedNumber.textContent = selectableBtn.previousElementSibling.textContent;
        
    });
});