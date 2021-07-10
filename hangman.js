var word, tries = 10, charactersFound = 0;
function generateGame() {
    var introducedText = document.getElementById("inputWord").value;
    word = introducedText.toLowerCase();
    var removeElement = document.getElementById("introduceWord");
    removeElement.remove();
    var wordSize = word.length;
    for (var i = 0; i < wordSize; ++i) {
        var unknownCharacter = document.createElement('li');
        unknownCharacter.setAttribute("id", "char" + i);
        unknownCharacter.textContent = '_';
        document.getElementById("listOfCharacters").appendChild(unknownCharacter);
    }
    for (var i = 97; i <= 122; ++i) {
        var createElement = document.createElement('button');
        createElement.setAttribute("class", "btn btn-secondary");
        createElement.setAttribute("id", + i);
        createElement.setAttribute("onclick", "checkCharacter(this.id)");
        createElement.textContent = String.fromCharCode(i);
        var createHere = document.getElementById("guessWord");
        createHere.appendChild(createElement);
    }
    document.getElementById("tries").innerHTML = "<h4> Tries: </h4>" + tries;
}

function checkCharacter(idOfClickedLetter) {
    var clickedLetter = String.fromCharCode(idOfClickedLetter);
    var wordSize = word.length, flag = 1;
    for (var i = 0; i < wordSize; ++i) {
        var wordCharacter = word.charAt(i);
        if (clickedLetter === wordCharacter) {
            document.getElementById("char" + i).textContent = clickedLetter;
            word = word.replace(wordCharacter, '0');
            ++charactersFound;
            flag = 0;
        }
    }
    if (flag == 1) {
        --tries;
        document.getElementById("tries").innerHTML = "<h4> Tries: </h4>" + tries;
    }
    if (charactersFound == wordSize) {
        gameWon();
    }
    if (tries == 0) {
        gameLost();
    }
}

function gameWon() {
    var removeElement = document.getElementById("guessWord");
    removeElement.remove();
    document.getElementById("message").innerHTML = "<h2> Congrats, you won! </h2>";
    var createElement = document.createElement('button');
    var createHere = document.getElementById("message");
    createElement.setAttribute("class", "btn btn-success");
    createElement.setAttribute("onclick", "restartGame()");
    createElement.textContent = "Play again";
    createHere.appendChild(createElement);  
}

function gameLost() {
    var removeElement = document.getElementById("guessWord");
    removeElement.remove();
    document.getElementById("message").innerHTML = "<h2> Oops, you lost. </h2>";
    var createElement = document.createElement('button');
    var createHere = document.getElementById("message");
    createElement.setAttribute("class", "btn btn-danger");
    createElement.setAttribute("onclick", "restartGame()");
    createElement.textContent = "Play again";
    createHere.appendChild(createElement);
}

function restartGame() {
    location.reload();
}