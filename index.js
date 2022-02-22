// const random = document.querySelector('.random');
let randomNumber = Math.ceil((Math.random() * 100));

const guessnumber = document.querySelector('.guessnumber');
const bttn = document.querySelector('.bttn');
const message = document.querySelector('.message');
// const newGame = document.querySelector('.newGame')

function newGame() {
    setTimeout(function() {
        message.innerHTML = ""
    }, 2000)
}


function bttnClicked() {
    const guessNo = Number(guessnumber.value);
    if (guessNo < randomNumber) {
        message.innerHTML = 'Your guess is too low';
    } else if (guessNo > randomNumber) {
        message.innerHTML = 'Your guess is too High'

    } else {
        message.innerHTML = `correct, the secret number is ${guessNo}`

        newGame()
        setTimeout(function() {
            message.innerHTML = ""
            location.reload();
            message.innerHTML = '...new game has started';
        }, 2000)
    }


}

bttn.addEventListener('click', bttnClicked)
    // now i have to to start a game without reloading the game