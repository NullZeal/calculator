let display = document.getElementById('screen');
display.textContent = '0';

let storedValue = 0;

const clearButton = document.getElementById('clear');
clearButton.addEventListener('mouseup', () => clear());

function add(a,b) {return a + b;}

function substract(a,b){return a - b;}

function multiply(a,b){return a * b;}

function divide(a,b){return a / b;}

function operate(operator, num1, num2){
    operator === '+' ? add(num1,num2) : 
    operator === '-' ? substract(num1,num2) :
    operator === '*' ? multiply(num1, num2) : 
    operator === '/' ? divide(num1,num2) : null;
}

function clear(){
    storedValue = 0;
    display.textContent = '0';
}

function printNewNumberOnDisplay(newNumber){
    display.textContent += newNumber;
}

let ditgitButtons = document.querySelectorAll('.digit');
for(let digit of ditgitButtons)
{
    console.log(`${digit.textContent}`);

    digit.addEventListener('mouseup', function()
        {
            if (display.textContent == '0') 
            {
                display.textContent = '';
                printNewNumberOnDisplay(`${digit.textContent}`);
            }   
            else 
            {
                printNewNumberOnDisplay(`${digit.textContent}`);
            }
        }
    )
};


