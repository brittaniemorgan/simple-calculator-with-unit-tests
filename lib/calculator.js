'use strict';

window.calculator = window.calculator || {};

(function() {
    let memory = '';
    let mPlusClicked = false;
    var calculate = function(event) {
        const display = document.querySelector('.display');
        const clickedButtonValue = event.target.value;
        if(display.value == 'Error'){
          display.value = '';
        }
        switch (clickedButtonValue) {
            case '=':
                if (display.value != '') {
                    try {
                        let result = eval(display.value);
                        if (isNaN(result) || !isFinite(result)) {
                            display.value = 'Error';
                        } else {
                            display.value = result;
                            memory = result;
                        }
                    } catch (error) {
                        display.value = 'Error';
                    }
                }
                mPlusClicked = false;
                break;
            case 'C':
                display.value = '';
                mPlusClicked = false;
                break;
            case '+/-':
                display.value = display.value * -1;
                mPlusClicked = false;
                break;
            case '%':
                display.value = display.value / 100;
                mPlusClicked = false;
                break;
            case '√':
                if (display.value < 0) {
                    display.value = 'Error';
                } else {
                    display.value = Math.sqrt(display.value);
                    mPlusClicked = false;
                }
                break;
            case 'MRC':
                if (!mPlusClicked) {
                    // Display value in memory if button clicked once
                    display.value = memory;
                    mPlusClicked = true;
                } else {
                    // Clear memory if button clicked twice consecutively
                    memory = '';
                    mPlusClicked = false;
                }
                break;
            case 'M-':
                if (display.value != '') {
                    display.value = parseFloat(memory) - parseFloat(display.value);
                  }
                mPlusClicked = false;
                break;
            case 'M+':
                if (display.value != '') {
                    display.value = parseFloat(memory) + parseFloat(display.value);
                }
                mPlusClicked = false;
                break;
            default:
                display.value += clickedButtonValue;
                mPlusClicked = false;
                break;
        }
    };

    window.calculator.init = function() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.addEventListener('click', calculate);
        });
    };
    window.calculator.init();
})();



/*
// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

let memory = '';
let mPlusClicked = false;

// add eventListener to each button
function startUpCalculator(){
	buttons.forEach(function(button) {
	  button.addEventListener('click', calculate);
	});
}

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;
  switch (clickedButtonValue) {
    case '=':
      if (display.value !== '') {
        try{
          let result = eval(display.value);
          if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
          }else{
              display.value = result;
              memory = result
          }
        }catch (error) {
          display.value = 'Error';
        }
      }
      mPlusClicked = false;
      break;
    case 'C':
      display.value = '';
      mPlusClicked = false;
      break;
      case '+/-':
        display.value = display.value * -1;
        mPlusClicked = false;
        break;
      case '%':
        display.value = display.value / 100;
        mPlusClicked = false;
        break;
      case '√':
        if (display.value < 0){
          display.value = 'Error';
        }
        else{
          display.value = Math.sqrt(display.value);
          mPlusClicked = false;
        }
        break;
      case 'MRC':
        if (!mPlusClicked) {
          // Display value in memory if button clicked once
          display.value = memory;
          mPlusClicked = true;
        } else {
          // Clear memory if button clicked twice consecutively
          memory = '';
          mPlusClicked = false;
        }
        break;
      case 'M-':
        display.value = parseFloat(memory) - parseFloat(display.value);
        mPlusClicked = false;
        break;
      case 'M+':
        display.value = parseFloat(memory) + parseFloat(display.value);
        mPlusClicked = false;
        break;
    default:
      display.value += clickedButtonValue;
      mPlusClicked = false;
      break;
  }
}
startUpCalculator();*/