
function myfunction() { display =document.getElementById(display)};

function appendToDisplay(input){
    display.value +=input;
}

function clearDisplay(){
display.value = "";
}

function calculate(){
    try{
    display.value = eval(display.values)
    }
    catch(error){
        Diaplay.value = "Error";
    }
}
