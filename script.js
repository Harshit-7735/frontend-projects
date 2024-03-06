const questions = [
    {
        question: "What is 10/2?",
        answers: [
            {text: '3', correct: false},
            {text: '5', correct: true},
            {text: '8', correct: false},
            {text: '2', correct: false}
        ],
    },
    {
        question: "who is the best cricketer in the world?",
        answers: [
            {text: 'Sachin Tendulkar', correct: false},
            {text: 'Virat Kolli', correct: true},
            {text: 'Jethalal', correct: false},
            {text: 'Jacques Kallis', correct: false}
        ],

    },

    {
        question: "Who is the famous chai wala?",
        answers: [
            {text: 'MBA Chai Wala', correct: false},
            {text: 'Dolly Chai', correct: true},
            {text: 'Rahul', correct: false},
            {text: 'Ramesh', correct: false}
        ],
    },

    {
        question: "Who is the best rapper in the world?",
        answers: [
            {text: 'Gian', correct: true},
            {text: '50 Cent', correct: false},
            {text: 'Lil Wayne', correct: false},
            {text: 'Jay Z', correct: false}
        ],
    },

    {
        question: "What is the capital of India?",
        answers: [
            {text: 'Delhi', correct: true},
            {text: 'Mumbai', correct: false},
            {text: 'Pune', correct: false},
            {text: 'Bangalore', correct: false}
        ],
    },

    {
        question: "What is the famous slogan of McDonald's?",
        answers: [
            {text: 'I am loving it', correct: true},
            {text: 'I am eating it', correct: false},
            {text: 'I am drinking it', correct: false},
            {text: 'I am making it', correct: false}
        ],
    },

 {
    question: "Who is the famous Kachori wala?",
    answers: [
        {text: 'Raju', correct: false},
        {text: 'Ramesh', correct: false},
        {text: 'Rajesh', correct: false},
        {text: 'Chhangani Kachori Wala', correct: true}
    ],
 },
]


const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('Next-button');
let currentQuestionIndex = 0
let score = 0
// to start the quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
// to show the question
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // to show the answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        answerButtonsElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}
// Reset the state of the quiz to show the next question
function resetState(){
    nextButton.style.display = 'none';
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
// select the answer and check if it is correct or not and display the next button
function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if(correct){
selectedButton.classList.add('correct');
score++;  
    }
    else{
        selectedButton.classList.add('wrong');
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
    button.disabled = true;
    });
    // display next button
    nextButton.style.display = 'block';
}

// show the score after the quiz is over and display the restart button to start the quiz again
function showScore(){
  resetState();
    questionElement.innerHTML = "Your Score is " + score + " out of " + questions.length;
    nextButton.innerHTML = 'Restart';
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'block';
}
// handle the next button to show the next question
function handleNext(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
       showScore();
    }
}
// event listener for the next button
nextButton.addEventListener('click', () => {
    if(nextButton.innerHTML === 'Next'){
        handleNext();
    }
    else{
        startQuiz()
    }
})
// function to start the quiz
startQuiz();

