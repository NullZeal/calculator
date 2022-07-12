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
    currentStoredValue = 0;
    currentDisplay = 0;
}

function printNewNumberOnDisplay(newNumber){
    currentDisplay.textContent += newNumber;
}

let currentDisplay = document.getElementById('screen');
currentDisplay.textContent = '0';

let currentStoredValue = 0;

let ditgitButtons = document.querySelectorAll('.digit');
for(let digit of ditgitButtons)
{
    console.log(`${digit.textContent}`);

    digit.addEventListener('mouseup', function()
        {
            if (currentDisplay.textContent == '0') 
            {
                currentDisplay.textContent = '';
                printNewNumberOnDisplay(`${digit.textContent}`);
            }   
            else 
            {
                printNewNumberOnDisplay(`${digit.textContent}`);
            }
        }
    )
};


