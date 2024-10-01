const textBox = document.getElementById('textBox')
const toFar = document.getElementById('toFar')
const toCelc = document.getElementById('toCelc')
const result = document.getElementById("result")
let temp
function convertion(){
    if (toFar.checked){
        temp = Number(textBox.value)
        temp = temp*9/5 +32;
        result.textContent = temp+ "°F"
    }
    else if(toCelc.checked){
        temp = Number(textBox.value)
        temp =  (temp-32)* 5/9
        result.textContent = temp+ "°C"
    }
    else{
        result.textContent = 'Select unit'
    }
}