// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {

    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;

}

// Disables sorting buttons
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// // Disables size slider
// function disableSizeSlider(){
//     document.querySelector("#arr_sz").disabled = true;
// }

// // Enables size slider
// function enableSizeSlider(){
//     document.querySelector("#arr_sz").disabled = false;
// }
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
    document.querySelector("#speed_input").disabled = true;
}

function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
    document.querySelector("#speed_input").disabled = false;
}

// Disables new array button
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables new array button
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}
// Disables custom array button
function disableCustomArrayBtn(){
    document.querySelector("#loadArray").disabled = true;
}
// Enables custom array button
function enableCustomArrayBtn(){
    document.querySelector("#loadArray").disabled = false;
}
// Disables custom array input
function disableCustomArrayInput(){
    document.querySelector("#customArray").disabled = true;
}
// Enables custom array input
function enableCustomArrayInput(){
    document.querySelector("#customArray").disabled = false;
}

// Used for animation delays
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('');
        }, milisec);
    });
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#arr_sz');

// Event listener to update bars
arraySize.addEventListener('input', function(){
    createNewArray(parseInt(arraySize.value));
});

// Default delay
let delay = 260;

// Selecting speed slider
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});

// Array storage
let array = [];

// Display bars on page load
createNewArray();

// Create random array
function createNewArray(noOfBars = 60) {

    deleteChild();

    array = [];

    for(let i = 0; i < noOfBars; i++){

        array.push(
            Math.floor(Math.random() * 250) + 1
        );
    }

    const bars = document.querySelector("#bars");

    for(let i = 0; i < noOfBars; i++){

        const bar = document.createElement("div");

        bar.style.height = `${array[i] * 2}px`;

        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);

        bars.appendChild(bar);
    }
}

// NEW FUNCTION
// Create bars from user input
function createCustomArray(values){

    deleteChild();

    array = [...values];

    const bars = document.querySelector("#bars");

    for(let i = 0; i < values.length; i++){

        const bar = document.createElement("div");

        bar.style.height = `${values[i] * 2}px`;

        bar.classList.add("bar");
        bar.classList.add("flex-item");
        bar.classList.add(`barNo${i}`);

        bars.appendChild(bar);
    }
}

// Delete old bars
function deleteChild(){

    const bar = document.querySelector("#bars");

    bar.innerHTML = '';
}

// Random array button
const newArray = document.querySelector(".newArray");

newArray.addEventListener("click", function(){

    enableSortingBtn();
    enableSizeSlider();

    createNewArray(arraySize.value);
});

// NEW FEATURE
// Load custom array button
const loadArrayBtn =
document.querySelector("#loadArray");

loadArrayBtn.addEventListener("click", function(){

    const input =
    document.querySelector("#customArray").value;

    let values = input
        .split(",")
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num));

    if(values.length === 0){

        alert(
            "Please enter valid numbers separated by commas"
        );

        return;
    }

    createCustomArray(values);
});