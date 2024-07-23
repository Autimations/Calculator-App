let currentDisplay = '0';

function display(value){
    if (currentDisplay === '0' && value !== '/' && value !== '*' && value !== '+' && value !== '-') {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    document.getElementById('result').textContent = currentDisplay;



}

function clearDisplay(){


    currentDisplay = "0";
    document.getElementById("result").textContent = currentDisplay;

}

function calculate(){
    try {
        currentDisplay = eval(currentDisplay).toString();
        document.getElementById('result').textContent = currentDisplay;
    } catch (error) {
        currentDisplay = 'Error';
        document.getElementById('result').textContent = currentDisplay;
    }



}