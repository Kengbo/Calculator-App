let body = document.body;
// const btns = document.getElementsByClassName('btns');
const screenTop = document.getElementById('screenTop');
const screenBottom = document.getElementById('screenBottom');

let firstNum = '';
let secondNum = '';
let operator = '';

const operatorSymbols = {
    '+': '+',
    '-': '−',
    '*': '×',
    '/': '÷'
};




const addition = (a, b) => {
    return a + b;
}
const subtraction = (a, b) => {
    return a - b;
}
const multiplication = (a, b) => {
    return a * b;
}
const division = (a, b) => {
    return a / b;
}


body.addEventListener('click', (e)=>{
   
    if(e.target.classList.contains('operator')){

        if (screenBottom.value === '') {
            screenTop.value = 'Enter a number first';
            return;
        }
        else if (screenBottom.value === '0' || screenBottom.value === '00') {
            screenTop.value = 'Cannot use zero here';

            return;
        }
        firstNum = parseFloat(screenBottom.value);
        operator = e.target.value;
        screenTop.value = firstNum + ' ' + e.target.textContent;
        screenBottom.value = '';
        
      
    }
      
      else if(e.target.classList.contains('clear')) {
        screenBottom.value = '';
        screenTop.value = '';
    }  
     else if(e.target.classList.contains('delete')) {
        
        screenBottom.value = screenBottom.value.slice(0, -1);
    }  
     else if(e.target.classList.contains('submit')) {
        
    
    
    
    if (!operator || screenBottom.value === '') {
        return;
    }
    
    secondNum = parseFloat(screenBottom.value);

    let result = '';

   

    switch(operator){
        case '+':
            result = addition(firstNum, secondNum);
            break;

        case '-':
            result = subtraction(firstNum, secondNum);
            break;

        case '*':
            result = multiplication(firstNum, secondNum);
            break;

        case '/':
            if(secondNum === 0){
                screenTop.value = 'Cannot divide by Zero';
                
                screenBottom.value = '';
                firstNum = '';
                secondNum = '';
                operator = '';
                return;
            }
           result = division(firstNum, secondNum);
            break;
    }
    
    screenTop.value = `${firstNum} ${operatorSymbols[operator]} ${secondNum} =`;
    screenBottom.value =parseFloat(result.toFixed(3)) ;

    firstNum = result;
    secondNum = '';
    operator = '';
}

// period button
 else if(e.target.classList.contains('period')) {
       if(screenBottom.value == ''){
        screenBottom.value = '0.';
        return;
       }
       else if (screenBottom.value.includes('.')){
        return;
        }
       else{
        screenBottom.value += e.target.value;
       }
    } 
// end of period logic

   else if(e.target.classList.contains('btns')){
        screenBottom.value += e.target.value;
        
    }
       
  
})