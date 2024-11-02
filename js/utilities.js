// home and history section hide and show 
function showInterfaceById(id){
    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}
// get input filed value 
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
// get text field value
function getTextFieldValueBuId(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function dateTime(){
    const now = new Date();
    const para = document.createElement("p");
    para.innerText = now;
    const paraText = para.innerText;
    return paraText;
}