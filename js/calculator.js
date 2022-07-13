let mainDisplay = document.getElementById('screen');
mainDisplay.textContent = '0';

let storedValue = 0;
let storedOperator = '';

let operationsDisplay = document.getElementById('operationsScreen');
operationsDisplay.textContent = '';

const clearButton = document.getElementById('clear');
clearButton.addEventListener('mouseup', () => clear());

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('mouseup', () => function(){
    
});

let operatorButtons = document.querySelectorAll('.operator');
for(let operator of operatorButtons)
{
    operator.addEventListener('mouseup', function()
        {
            if(operationsDisplay.textContent == '')
            {
                storedOperator = operator.textContent;
                storedValue = mainDisplay.textContent;
                operationsDisplay.textContent = `${storedValue} ${storedOperator}`;
                mainDisplay.textContent = '0';
            }
            else
            {

            }

        })}

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
    mainDisplay.textContent = '0';
    operationsDisplay.textContent = '';
}

function printNewNumberOnDisplay(newNumber){
    mainDisplay.textContent += newNumber;
}

let digitButtons = document.querySelectorAll('.digit');
for(let digit of digitButtons)
{
    digit.addEventListener('mouseup', function()
        {
            if (mainDisplay.textContent == '0')
                mainDisplay.textContent = '';

            if (this.textContent == '.' && mainDisplay.textContent.indexOf('.') > -1 
            || mainDisplay.textContent == '.'){
                return;
            }

            printNewNumberOnDisplay(`${digit.textContent}`)
        }
    )
};


