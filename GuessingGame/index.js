function guessingGame() {
    let randomNumber = Math.ceil((Math.random() * 100));

    // function newGame() {


    //     setTimeout(function() {
    //         message.innerHTML = ""
    //     }, 2000)

    // }

    function outRange() {

    }

    function bttnClicked() {
        const guessNo = Number;
        const message = "";

        if (guessNo > 100 || guessNo < 1) {
            message.innerHTML = 'you have exceeded the range enter a number between 1 & 100';




        } else if (guessNo < randomNumber) {
            message.innerHTML = 'Your guess is too low';


        } else if (guessNo > randomNumber) {
            message.innerHTML = 'Your guess is too High';




        } else {
            message.innerHTML = `correct, the secret number is ${guessNo}`

            // newGame()
            // setTimeout(function() {
            //     message.innerHTML = ""
            //     location.reload();
            //     message.innerHTML = '...new game has started';
            // }, 3000)
        }


    }
    return {
        // newGame,
        bttnClicked,
        outRange
    }

}




// now i have to to start a game without reloading the game
//- adding an error message if a user enters a number out of range, e.g 101, 500 or -2