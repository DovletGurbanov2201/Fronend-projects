const minNumber = 1
const maxNumber = 100
const number = Math.floor(Math.random()* (maxNumber - minNumber +1 )) + minNumber
let attempsCount = 0;
let guess
while(true){
    guess = +prompt('Guess a number from 1 to 100')
    if (isNaN(guess)) {
        window.alert("Please, enter a valid number")
    }
    else if(guess < minNumber || guess > maxNumber){
        window.alert("Please, enter a valid number")
    }
    else{
        attempsCount++;
        if (guess < number) window.alert("too low number")
        else if(guess> number) window.alert("too high number")
        else if (guess = number){
            window.alert(`You have guessed the number!! It took you ${attempsCount} attemps`)
            break
        }
    }
    
}