const prompt = require("prompt-sync")({sigint:true});

   function playGame(){

    const minRange = parseInt(prompt("Enter a bottom limit: "))
    const maxRange = parseInt(prompt("Enter a top limit: "))
    let isCorrect = false;
    let counter = 0;

        console.log("Guess a number between " + minRange + " and " + maxRange + ": ");

        const correctAnswer = Math.floor((Math.random() * maxRange) + minRange);

        while (!isCorrect){

            const guess = parseInt(prompt("Guess the number: "))
            counter++;

            if (guess > correctAnswer) {
                console.log("Your guess is too high, try again");

            } else if (guess < correctAnswer) {
                console.log("Your guess is too low, try again");

            } else {
                console.log("Congratulations, you guessed the number! It took you " + counter + " guesses.");
                isCorrect = true;
            }
        }

        if (counter === 1){
            console.log("Hole in one! You're a true mind reader. 6 stars");
        } else if (counter >= 2 && counter <= 5){
            console.log("Amazing! 5 stars");
        } else if (counter >= 6 && counter <= 10) {
            console.log("Well done sir! 4 stars");
        } else if (counter >= 11 && counter <= 15){
            console.log("That was okay... 3 stars");
        } else if (counter>=16 && counter <= 20){
            console.log("That's just too many guesses... 2 stars");
        } else {
            console.log("Maybe you should try another game... 1 star");
        }
}

playGame();