console.log('hello world')

const counterText = document.querySelector('#counter')

const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const plusBtn = document.querySelector('#plus-btn')

let count = 0;

function increase() {
    count++
    counterText.textContent = count
    // console.log(count)
}

function decrease() {
    count--
    counterText.textContent = count
    // console.log(count)
}

function reset() {
    count = 0
    counterText.textContent = count
    // console.log(count)
}


minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)






//----------------------------themes------------//

let themeBtns = document.querySelectorAll('.theme-buttons');
//above looks for all the theme-buttons 

console.log(themeBtns);
//-----------callback for loop below

//----below is an action of what to do when theme-buttons are found-------//
let selectTheme = (event) => {
    //console.log(event);
    const theme = event.target.textContent;
    //theme looks at the event target and looks for the text in the button
    document.querySelector("body").className = theme;
    //looks at the body for the class names to assign the respective theme in the theme css
    document.querySelector("main").className = theme;
    //looks at the main for the class names to assign the respective theme in the theme css

    let buttons = document.querySelectorAll('button')
    for (let i =0; i < buttons.length; i++){
        buttons[i].className = theme
    }
}

for (let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', selectTheme) // this loop assigns eventListeners for when a user clicks each button on the html page.  Then runs the callback loop selectTheme
}
