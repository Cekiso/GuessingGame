describe('guessingGame function', function() {
    describe('', function() {

        it('should display a message if your guess is too high', function() {
            let testingGame = guessingGame();
            testingGame.bttnClicked(100);
            assert.equal(testingGame.bttnClicked('Your guess is to high'))
        });
        it('should display a message if your guess is too low', function() {
            let testingGame = guessingGame();
            testingGame.bttnClicked(0);
            assert.equal(testingGame.bttnClicked('Your guess is to low'))
        });
        it('should return an error if your guess has exceeded the required number', function() {
            let testingGame = guessingGame();
            testingGame.bttnClicked(500);
            assert.equal(testingGame.bttnClicked('you have exceeded the range enter a number between 1 & 100'))
        });
        it('should return an error if the number is too low or a negative number', function() {
            let testingGame = guessingGame();
            testingGame.bttnClicked(-1);
            assert.equal(testingGame.bttnClicked('you have exceeded the range enter a number between 1 & 100'))
        });

    });

})