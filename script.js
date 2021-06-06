let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButtom;

function checkGuess(){
    let userGuess = Number(guessField.value);
    
    if(userGuess === randomNumber){
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.getElementsByClassName.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
    
    } else if (guessCount === 10){
        lastResult.textContent = 'Game Over!!!';
    setGameOver();  
    } else {
          lastResult.textContent = 'Wrong!';
          lastResult.style.backgroundColor = 'red';
          if (userGuess < randomNumber){
              lowOrHi.textContent = 'Too Low';
          } else {
              lowOrHi.textContent = 'Too high';
          }
        }
    

      guessCount ++;
      guessField.value = '';
      guessField.focus();
    
}

guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButtom = document.createElement('button');
    resetButtom.textContent = 'Start new game';
    document.body.append(resetButtom);
    resetButtom.addEventListener('click', resetGame);

}

function resetGame(){
    guessCount = 1;
    
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i < resetParas.length; i ++){
     resetParas[i].textContent = '';
    }
    resetButtom.parentNode.removeChild(resetButtom);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
