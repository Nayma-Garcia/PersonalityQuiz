//Questions

const questions = [
    {
      "question": "What's your favorite fruit ?",
      "answer1": "apple",
      "answer1Total": "1",
      "answer2": "dragonfruit",
      "answer2Total": "2",
      "answer3": "watermelon",
      "answer3Total": "3",
      "answer4": "strawberry",
      "answer4Total": "4",
    },
    {
      "question": "What's your favorite animal?",
      "answer1": "dog",
      "answer1Total": "1",
      "answer2": "giaraffe",
      "answer2Total": "2",
      "answer3": "goat",
      "answer3Total": "3",
      "answer4": "dolphin",
      "answer4Total": "4",
    },
    {
        "question": "Whats favorite hobby?",
        "answer1": "sports",
        "answer1Total": "1",
        "answer2": "arts",
        "answer2Total": "2",
        "answer3": "gaming",
        "answer3Total": "3",
        "answer4": "puzzles",
        "answer4Total": "4",
      },
      {
        "question": "What's your favorite color?",
        "answer1": "blue",
        "answer1Total": "1",
        "answer2": "pink",
        "answer2Total": "2",
        "answer3": "brown",
        "answer3Total": "3",
        "answer4": "red",
        "answer4Total": "4",
      },
      {
        "question": "What's your style?",
        "answer1": "sporty",
        "answer1Total": "1",
        "answer2": "preppy",
        "answer2Total": "2",
        "answer3": "skater",
        "answer3Total": "3",
        "answer4": "trendy",
        "answer4Total": "4",
      },
      {
        "question": "What's your favorite school subject?",
        "answer1": "math",
        "answer1Total": "1",
        "answer2": "science",
        "answer2Total": "2",
        "answer3": "gym",
        "answer3Total": "3",
        "answer4": "english",
        "answer4Total": "4",
      },
      {
        "question": "What's your favorite season?",
        "answer1": "winter",
        "answer1Total": "1",
        "answer2": "spring",
        "answer2Total": "2",
        "answer3": "summer",
        "answer3Total": "3",
        "answer4": "fall",
        "answer4Total": "4",
      },
      {
        "question": "Pick a vacation destination?",
        "answer1": "cruise",
        "answer1Total": "1",
        "answer2": "ski resort",
        "answer2Total": "2",
        "answer3": "hiking",
        "answer3Total": "3",
        "answer4": "regular resort",
        "answer4Total": "4",
      },
      {
        "question": "Pick a drink?",
        "answer1": "coffee",
        "answer1Total": "1",
        "answer2": "energy drink",
        "answer2Total": "2",
        "answer3": "water",
        "answer3Total": "3",
        "answer4": "soda",
        "answer4Total": "4",
      },
      {
        "question": "How do you listen to music?",
        "answer1": "Spotify",
        "answer1Total": "1",
        "answer2": "apple music",
        "answer2Total": "2",
        "answer3": "youtube",
        "answer3Total": "3",
        "answer4": "pandora",
        "answer4Total": "4",
      },
  ]

let currentQuestion = 0,
let score = [],
let seletedDataAnswers = 0;
const totalQuestions = questions.length,
const container = document.querySelector('.quiz-container'),
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next'),
const previousButton = document.querySelector('.previous'),
const restartButton = document.querySelector('restart'),
const result = document.querySelector('result'),


function generateQuestions(index){
    const question = questions[index];
    const question1Total = questions[index].answer1Total;
    const question2Total = questions[index].answer2Total;
    const question3Total = questions[index].answer3Total;
    const question4Total = questions[index].answer4Total;

//html stuff

questionEl.innerHTML = `${index + 1}. ${question.question}`
option1.setAttribute('data-total', `${option1Total}`);
option2.setAttribute('data-total', `${option2Total}`);
option3.setAttribute('data-total', `${option3Total}`);
option4.setAttribute('data-total', `${option4Total}`);
option1.innerHTML = `${question.answer1}`
option2.innerHTML = `${question.answer2}`
option3.innerHTML = `${question.answer3}`
option4.innerHTML = `${question.answer4}`
}

function generateNextQuestion(){
    const clickedOption = document.querySelector('input[type="radio"]:checked');

    if(!clickedOption){
        alert ('SELECT AN ANSWER');
        return;
    }
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
    score.push(answerScore);
    selectedAnswersData.push()
    const totalScore = score.reduce((total, currentNum) => total + currentNum);
    currentQuestion++;

    selectedOption.checked = false;

    //if final question
    if(currentQuestion == totalQuestions-1){
      nextButton.textContent = 'Finish';
    }

    //if quiz is over then hide question and show results
    if(currentQuestion == totalQuestions){
      container.getElementsByClassName.display = 'none';
      result.innerHTML =  `<h1 class="final-score">Your score: ${totalScore}</h1>
      <div class="summary">
         <h1>Summary</h1>
         <p>Possible - Personality Traits, see below for a summary based on your results:</p>
         <p>15 - 21- You Need Help</p>
         <p>10 - 15 - Good Soul</p>
         <p>5 - 10 - Meh </p>
         <p>5 - Are You Even Real</p>
     </div>
     <button class="restart">Restart Quiz</button>
      `;
      return;
    }
    generateQuestions(currentQuestion);
}

//function to load previous question
function loadPreviousQuestion(){
  //decrement questions index
  currentQuestion--;
  //remove last array values
  score.pop();
  //generate the question
  generateQuestions(currentQuestion);
}

//function to reset and restart the quiz
function restartQuiz(e){
  if(e.target.matches('button')){
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //reload quiz to start
    location.reload();
  }
}


generateQuestions(currentQuestion);
nextButton.addEventListener('click',loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
