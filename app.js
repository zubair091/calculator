function calculate(event) {
    const target = event.target;
    const display = document.getElementById('display');

    if (target.tagName.toLowerCase() === 'button') {
        const value = target.value;

        if (value === '=') {
            display.value = eval(display.value);
        } else if (value === 'C') {
            display.value = '';
        } else {
            display.value += value;
        }
    }
}