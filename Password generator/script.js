const passwordlength =16
const lowerChars = "abcdefghijklmnopqrstuvwxyz"
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbersChars = "1234567890"
const symbolsChars = "@#$?/\|~():;{}[]"
const password_p = document.getElementById('final_password')
const question_image = document.getElementById('question_image')
const length_input = document.getElementById('length_input')
function generatePassword() {
    let WholeChars = ""
    let password= ""
    if (document.getElementById('lowercase').checked) WholeChars += lowerChars
    if (document.getElementById('uppercase').checked) WholeChars += upperChars
    if (document.getElementById('numbercase').checked) WholeChars += numbersChars
    if (document.getElementById('symbolcase').checked) WholeChars += symbolsChars
    console.log(WholeChars)
    if (document.getElementById('lowercase').checked || document.getElementById('uppercase').checked
    || document.getElementById('numbercase').checked || document.getElementById('symbolcase').checked) {
        for (let i = 0; i < length_input.value; i++) {
            password += WholeChars[Math.floor(Math.random()*WholeChars.length)]
        }
    password_p.style ="color: black;"
    password_p.textContent = "Your secure password has arrived! Here it is: " + password

    }
    else{
        password_p.textContent = "Choose at least 1 category!"
        password_p.style ="color: red;"
    }
}
question_image.addEventListener('mouseover', () => {
    document.getElementById("security-warning").style.display = 'block';
});
question_image.addEventListener('mouseout', () => {
    document.getElementById("security-warning").style.display = 'none';
});