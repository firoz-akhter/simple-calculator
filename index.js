// fetch every single element from html

// fetch input-div, ans-div 
let input = document.querySelector(".input")
let ansDiv = document.querySelector(".ans-div")
let buttons = document.querySelectorAll('button')

console.log(buttons);




// add event listener on every button
// then DRY your code

function calculate(string) {
    let ans;
    try {
        ans = eval(string);
        return ans;
    }
    catch (error) {
        console.log(error);
        alert("There an error in input values")
    }
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.value === 'cut') {
            console.log('cutBtn clicked....')
            // empty ans-div and input
            input.value = '';
            ansDiv.innerText = '';
        }
        else if(button.value === 'backspace') {
            console.log('backspace button is clicked...')
            input.value = input.value.slice(0, input.value.length-1);
            ansDiv.innerText = '';
        }

        else if(button.value === 'equal') {
            console.log('equality button clicked...')
            // do the calculation and push value in ansDiv
            let calculatedValue = calculate(input.value);
            ansDiv.innerText = calculatedValue;
        }
        else {
            console.log("number and symbols are clicked....")
            // add to input
            input.value = input.value + button.value;
        }
        
    })
})

