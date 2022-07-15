let mustClearMainDisplay = false;

let stored = {
    value: '0',
    operator: '',
}

const operationsDisplay = document.getElementById('operationScreen');
operationsDisplay.textContent = '';

const mainDisplay = document.getElementById('mainScreen');
mainDisplay.textContent = '0';

const clearButton = document.getElementById('clear');
clearButton.addEventListener('mouseup', () => clear());

const delButton = document.getElementById('deleteButton');
delButton.addEventListener('mouseup', () => deleteButton());

function deleteButton(){
    if(mainDisplay.textContent.length <= 1){
        mainDisplay.textContent = 0;
        return;
    }
    mainDisplay.textContent = mainDisplay.textContent.substring(0,mainDisplay.textContent.length-1);
}

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('mouseup', function(){

    if(stored.value == '' && mainDisplay.textContent == '0'
    || mainDisplay.textContent == '0' && stored.operator == ''){
        return;
    } 

    let operationResult = operate(stored.operator, stored.value, mainDisplay.textContent);
    mainDisplay.textContent = operationResult;
    operationsDisplay.textContent = '';
    stored.operator = '';
    mustClearMainDisplay = true;
})

let operatorButtons = document.querySelectorAll('.operator');
for(let operator of operatorButtons)
{
    operator.addEventListener('mouseup', () =>
        {
            if(mainDisplay.textContent == 'Undefined'){
                mainDisplay.textContent = '0';
            }

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
            if(mainDisplay.textContent == NaN){
                mainDisplay.textContent == '';
            }
            if (mainDisplay.textContent == '0')
                mainDisplay.textContent = '';

            if (this.textContent == '.' && mainDisplay.textContent.indexOf('.') > -1){
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

function divide(a,b){return(b == 0 ? 'Undefined' : a/b);}

function operate(operator, num1, num2){
    if (operator == '+') {return add(Number(num1),Number(num2))}
    else if (operator == '-') {return substract(Number(num1),Number(num2))}
    else if (operator == '*') {return multiply(Number(num1),Number(num2))}
    else if (operator == '/') {return divide(Number(num1),Number(num2))}
}