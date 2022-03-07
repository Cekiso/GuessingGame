let randomNumber = Math.ceil((Math.random() * 100));
const guessnumber = document.querySelector('.guessnumber');
const bttn = document.querySelector('.bttn');
const message = document.querySelector('.message');

function newGame() {


    setTimeout(function() {
        message.innerHTML = ""
    }, 2000)

}

function outRange() {

}

function bttnClicked() {
    const guessNo = Number(guessnumber.value);

    if (guessNo > 100 || guessNo < 1) {
        message.innerHTML = 'you have exceeded the range enter a number between 1 & 100';

        setTimeout(function() {
            location.reload()
        }, 3000);


    } else if (guessNo < randomNumber) {
        message.innerHTML = 'Your guess is too low';
        setTimeout(function() {
            message.innerHTML = ""
        }, 3000)

    } else if (guessNo > randomNumber) {
        message.innerHTML = 'Your guess is too High';
        setTimeout(function() {
            message.innerHTML = ""
        }, 3000)



    } else {
        message.innerHTML = `correct, the secret number is ${guessNo}`

        newGame()
        setTimeout(function() {
            message.innerHTML = ""
            location.reload();
            message.innerHTML = '...new game has started';
        }, 3000)
    }


}

bttn.addEventListener('click', bttnClicked)