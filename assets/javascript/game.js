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
    var tries = 6;
    var counter;
    var spaces;

    // Elements
    var myLives = document.getElementById('num-of-tires-remaining');
    var displayCategory = document.getElementById('category');
    var letterBtn = document.getElementById('letter-btns');

    //Letter Buttons
    function letterButtons() {
        for (var i = 0; i < alphabet.length; i++) {
            var letterBtn = $("<button>");
            letterBtn.addClass("letter-button letter letter-button-color");
            letterBtn.attr("active", alphabet[i]);
            letterBtn.text(alphabet[i]);
            $("#letter-btns").append(letterBtn);
            
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
            console.log();
            if (word[i] === "-") {
                console.log("space");
                // word[i] = word[i].replace("-", ' ');
                userGuess.innerHTML = word[i];
                spaces = 1;
                append(userGuess);
            } else {
                userGuess.innerHTML = "_";
            }
            guesses.push(userGuess);
            hiddenWord.appendChild(correct);
            correct.appendChild(userGuess);
        }
    }

    // User Click
    function userClick() {
        letterBtn.onclick = function () {
            var userGuess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === userGuess) {
                    guesses[i].innerHTML = userGuess;
                    counter += 1;
                }
            }
            var a = (word.indexOf(userGuess));
            if (a === -1) {
                tries -= 1;
                letterGuess();
            } else {
                letterGuess();
            }
        }
    }

    // User Lives
    function tries() {
        myLives.innerHTML = "Tries: " + tries;
        if (tries < 1) {
            myLives.innerHTML = "Game Over!"
        }
        for (i = 0; i < guesses.length; i++) {
            if (counter + spaces === guesses.length) {
                myLives.innerHTML = "And the Oscar goes to... YOU!";
            }
        }
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
        word = randomCategories[Math.floor(Math.random() * randomCategories.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        myLives.innerHTML = "Tries: " + tries;
        letterButtons();
        userClick();
        guesses = [ ];
        tries = 6;
        counter = 0;
        spaces = 0;
        letterGuess()
        pickCat();
    }


    play();



})