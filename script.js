let counter = 0;

incrementClick = () => {
    updateDisplay(++counter);
}

resetCounter = () => {
    counter = 0;
    updateDisplay(counter);
}

updateDisplay = (val) => {
    document.getElementById("counter-label").innerHTML = val;
} 