let firstInput = '';
let secondInput = '';
let operation = '';
let op = ['+', '-', '*', '/'];

function update(value) {
    if(!op.includes(value)){
        if(!operation){
            firstInput = value;
            document.getElementById('screen').value = firstInput;
        }else{
            secondInput = value;
            document.getElementById('screen').value =  firstInput + operation + secondInput;
        }
    }else{
        operation = value;
        document.getElementById('screen').value = firstInput + operation;
    }
    console.log('first', firstInput, 'second', secondInput, 'operation', operation);
}

function result() {
    let result = 0;
    if(operation == '+') result = +firstInput + +secondInput
    else if(operation == '-') result = +firstInput - +secondInput
    else if(operation == '*') result = +firstInput * +secondInput
    else if(operation == '/') result = +firstInput / +secondInput

    document.getElementById('screen').value = result;
    firstInput = '';
    secondInput = '';
    operation = '';
}

function form_reset() {
    firstInput = '';
    secondInput = '';
    operation = '';
    document.getElementById('screen').value = '';
    console.log('first', firstInput, 'second', secondInput, 'operation', operation);
}
