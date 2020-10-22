const calculator = document.querySelector('#calculator');
const button     = document.querySelector('#calculator .button');
const display    = document.querySelector('#calculator #display');

const displayValue = () => display.textContent;

const sendToDisplay = (text) => {
    display.textContent = display.textContent + text;
}

const clearDisplay = (text) => {
    display.textContent = '';
}

const backspace = () => {
    let value = displayValue();
    clearDisplay();
    sendToDisplay(value.substring(0, value.length - 1));
}

const enter = () => {
    let result = eval(displayValue());
    clearDisplay();
    sendToDisplay(result);
}

function processKey(e) {
    e.preventDefault();

    switch(e.code) {
        case 'Enter':
            enter();
            break;
        case 'Backspace':
            backspace();
            break;
        default:
    }
}

calculator.addEventListener('click', event => {
    if (event.target.className !== 'button') {
        return;
    }

    if (event.target.textContent === '=') {
        enter();
        return;
    }

    sendToDisplay(event.target.textContent);
})

document.addEventListener('keydown', processKey);
