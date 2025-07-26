/****************** YOUR NAME: Momen Hassan*******************/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
let modelName = "XYZ";
let duration = 1;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element’s innerHTML to this new value
*/
function recalculate() {
  // let costLabel = document.getElementById("calculated-cost");
  let costLabel = document.getElementById("calculated-cost");
  let rate;

  if (modelName === "XYZ") {
    rate = 100;
  } else if (modelName === "CPRG") {
    rate = 213;
  } else {
    rate = 0;
  }

  let totalCost = duration * rate;
  costLabel.innerHTML = totalCost;
}

/****************** model button logic ******************/
/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
// modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE
const modelButton = document.getElementById("model-button");

function changeModel() {
  const modelText = document.getElementById("model-text");

  if (modelName === "XYZ") {
    modelName = "CPRG";
    modelText.innerHTML = "Model CPRG";
  } else {
    modelName = "XYZ";
    modelText.innerHTML = "Model XYZ";
  }

  recalculate();
}

modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
const durationButton = document.getElementById("duration-button");

function changeDuration() {
  const durationText = document.getElementById("duration-text");
  const input = prompt("Enter new duration in months:", duration);
  const newDuration = parseInt(input, 10);

  if (!isNaN(newDuration) && newDuration > 0) {
    duration = newDuration;
    durationText.innerHTML = duration;
    recalculate();
  } else {
    alert("Please enter a valid number greater than zero.");
  }
}

durationButton.addEventListener("click", changeDuration);

// Do an initial calculation on page load
recalculate();
