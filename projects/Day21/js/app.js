const h2 = document.querySelector('h2');
const button = document.querySelectorAll('button')[2];
const points = 0;
// const answers = document.querySelectorAll('[data-answer]')
const answers = document.querySelector('.answers')
// const sound = new Audio("../assets/sounds/Correct-answer.mp3");
// const sound = new Audio("./Correct-answer.mp3");
const correctAnswerSound = new Audio("./assets/sounds/correct-answer.mp3");
const wrongAnswerSound = new Audio("./assets/sounds/wrong-answer.mp3");
let questions;
let correctAnswer;


answers.addEventListener('click', function (e) {
    if (e.target.className === 'answer') {
        if (e.target.dataset.answer === correctAnswer.toString()) {
            console.log('Correct Answer');
            correctAnswerSound.play();

        } else {
            console.log('Incorrect Answer');
            wrongAnswerSound.play();
        }

        fetchTrivia();
    }
})


// button.addEventListener('click', fetchTrivia);

function fetchTrivia() {
    fetch(`https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=boolean`)
        .then(res => res.json())
        .then(data => {
            // data.results.for Each(result => {
            //     console.log(result);
            // })
            // questions = data.results;
            h2.innerHTML = data.results[0].question;
            correctAnswer = data.results[0].correct_answer
            console.log('Answer', correctAnswer)
        });
}

fetchTrivia();
//const sound = new Audio("Correct-answer.mp3"); //Doest' work
// const sound = new Audio("./js/Correct-answer.mp3"); //Works
// const button = document.querySelector('button');
// button.addEventListener('click', function () {
//     sound.currentTime = 0;
//     sound.play();
// });