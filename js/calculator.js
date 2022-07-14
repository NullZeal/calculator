let mustClearMainDisplay = false;

let stored = {
    value: '0',
    operator: '',
}

const operationsDisplay = document.getElementById('operationsScreen');
operationsDisplay.textContent = '';

const mainDisplay = document.getElementById('screen');
mainDisplay.textContent = '0';

const clearButton = document.getElementById('clear');
clearButton.addEventListener('mouseup', () => clear());

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('mouseup', function(){
    let operationResult = operate(stored.operator, stored.value, mainDisplay.textContent);
    mainDisplay.textContent = operationResult;
    operationsDisplay.textContent = '';
    stored.operator = '';
})

let operatorButtons = document.querySelectorAll('.operator');
for(let operator of operatorButtons)
{
    operator.addEventListener('mouseup', () =>
        {
            if(operationsDisplay.textContent == '')
            {
                stored.operator = operator.textContent;
                stored.value = mainDisplay.textContent;
                operationsDisplay.textContent = `${stored.value} ${stored.operator}`;
                mustClearMainDisplay = true;
            }
            else
            {
                stored.value = operate(stored.operator, stored.value, mainDisplay.textContent);
                operationsDisplay.textContent = `${stored.value} ${operator.textContent}`;
                stored.operator = operator.textContent;
                mainDisplay.textContent = `${stored.value}`;            
                mustClearMainDisplay = true;
            }
        })}

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

            if (mustClearMainDisplay){
                mainDisplay.textContent = '';
                mustClearMainDisplay = false;
            }
            printNewNumberOnDisplay(`${digit.textContent}`)
        }
    )
};

function printNewNumberOnDisplay(newNumber){
    mainDisplay.textContent += newNumber;
}

function clear(){
    stored.value = 0;
    mainDisplay.textContent = '0';
    operationsDisplay.textContent = '';
}

function add(a,b) {return a + b;}

function substract(a,b){return a - b;}

function multiply(a,b){return a * b;}

function divide(a,b){return a / b;}

function operate(operator, num1, num2){
    if (operator == '+') {return add(Number(num1),Number(num2))}
    else if (operator == '-') {return substract(Number(num1),Number(num2))}
    else if (operator == '*') {return multiply(Number(num1),Number(num2))}
    else if (operator == '/') {return divide(Number(num1),Number(num2))}
}


