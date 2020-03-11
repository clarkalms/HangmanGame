$(document).ready(function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // var categories = ["Movies", "Music", "Television", "Celebrities"];
    // var movieWords = ["Intersteller", "The Dark Knight", "Jaws", "The Lego Movie"];
    // var musicWords = ["Rolling In The Deep", "Let It Be", "Smells Like Teen Spirit", "Bohemian Rhapsody"];
    // var tvWords = ["Breaking Bad", "Game of Thrones", "Sherlock", "Baywatch"];
    // var celebWords = ["George Clooney", "Kim Kardashian", "Dwayne Johnson", "Michael Jordan"];
    // var guesses = [];
    // var counter;
    // var wrongGuesses = [];
    // var letterGuessed = [];
    // var wins = 0;
    // var losses = 0;
    // var lives = 6;

    var wordList;
    var randomCategories;
    var word;
    var userGuess ;
    var guesses = [];
    var wrongLetters = [];
    var lives;
    var counter;
    var spaces;

    // Elements
    var triesCol = document.getElementById("tries");
    var numOfTries = document.getElementById('num-of-tries-remaining');
    var displayCategory = document.getElementById('category');
    var letterBtn = document.getElementById('letter-btns');
    var lettersGuessed = document.getElementById("letters-guessed");
    var incorrectLettersGuessed = document.getElementById('wrong-letters');
    var playBtn = document.getElementById('play');

    // Generate Keyboard
    buttons = function() {
        var letters = document.createElement('ul');
        for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        userClick();
        letterBtn.appendChild(letters);
        letters.appendChild(list);
    }
  }
    
      // OnClick Function
   userClick = function () {
        list.onclick = function () {
        var guess = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                guesses[i].innerHTML = guess;
                counter += 1;
            } 
        } 

        var j = (word.indexOf(guess));
        console.log(guess);
        if (j === -1) {
        wrongLetters.push(guess)
        incorrectLettersGuessed.innerHTML = wrongLetters;  
        lives -= 1;
        tries();

        } else {
            tries();
        }
    }
  }
  
    

    // Choose a Category
    function pickCat() {
        if (randomCategories === wordList[0]) {
            displayCategory.innerHTML = "The Category is: Movies";
        } else if (randomCategories === wordList[1]) {
            displayCategory.innerHTML = "The Category is: Music";
        } else if (randomCategories === wordList[2]) {
            displayCategory.innerHTML = "The Category is: TV Shows";
        } else if (randomCategories === wordList[3]) {
            displayCategory.innerHTML = "The Category is: Celebrities";
        }
    }

    // User Guess
    function letterGuess() {
        hiddenWord = document.getElementById("hidden-word");
        var correct = document.createElement("span");
        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            userGuess = document.createElement('span');
            userGuess.setAttribute('class', 'user-guess');
            if (word[i] === " ") {
                userGuess.setAttribute('class', 'user-guess space');
                userGuess.innerHTML = word[i];
                spaces = 1;    
            } else {
                userGuess.innerHTML = "_";
            }
            guesses.push(userGuess);
            
            hiddenWord.appendChild(correct);
            correct.appendChild(userGuess);
        }
    }


    // User Lives
    function tries() {
        numOfTries.innerHTML = lives;
        if (lives < 1) {
            gameOver();
            // triesCol.setAttribute('class', 'col-6 game-over')
            // numOfTries.innerHTML = "Game Over!";
        }
        for (i = 0; i < guesses.length; i++) {
            if (counter + spaces === guesses.length) {
                winner();
                // triesCol.setAttribute('class', 'col-6 winner')
                // numOfTries.innerHTML = "And the Oscar goes to... YOU!";
            }
        }
    }


    // Lose Game Function
    function gameOver() {
        lettersGuessed.setAttribute('class', 'col-12');
        triesCol.setAttribute('class', 'col-12');
        numOfTries.setAttribute('class', 'game-over')
        numOfTries.innerHTML = "Game Over!";
        playBtn.innerHTML = "Play Again";
    }


    // Win Game Function
    function winner(){
        lettersGuessed.setAttribute('class', 'col-12');
        triesCol.setAttribute('class', 'col-12');
        numOfTries.setAttribute('class', 'winner')
        numOfTries.innerHTML = "WINNER! WINNER! WINNER!";
        playBtn.innerHTML = "Play Again";
    }
    // Play the Game
    function play() {
        
        wordList = [
            ["Intersteller", "The Dark Knight", "Jaws", "The Lego Movie"],
            ["Rolling In The Deep", "Let It Be", "Smells Like Teen Spirit", "Bohemian Rhapsody"],
            ["Breaking Bad", "Game of Thrones", "Sherlock", "Baywatch"],
            ["George Clooney", "Kim Kardashian", "Dwayne Johnson", "Michael Jordan"]
        ];
        randomCategories = wordList[Math.floor(Math.random() * wordList.length)];
        word = randomCategories[Math.floor(Math.random() * randomCategories.length)].toLowerCase();
        console.log(word);
        numOfTries.innerHTML = tries;
        guesses = [ ];
        wrongLetters = [ ];
        lives = 6;
        counter = 0;
        spaces = 0;
        buttons();
        tries();
        letterGuess()
        pickCat();
    }
    play();
    // playBtn.onclick = function(){
    // play();
    // playBtn.innerHTML = "Play Again";
    // document.getElementById("play").id = "reset";
    // }

    playBtn.onclick = function() {
    var correct = document.getElementById('my-word');
    var letters = document.getElementById('alphabet');
    lettersGuessed.setAttribute('class', 'col-6');
    triesCol.setAttribute('class', 'col-6');
    numOfTries.id = "num-of-tries-remaining";
    numOfTries.className = 'number';
    playBtn.innerHTML = "Play";
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    incorrectLettersGuessed.innerHTML = "";
    randomCategories;
    word;
    play();
    }

})