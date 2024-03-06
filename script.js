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

 {
    question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    answers: [
        {text: 'M', correct: false},
        {text: 'N', correct: false},
        {text: 'O', correct: true},
        {text: 'P', correct: false}
    ],
 }
]


const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerText = answers.text;
        button.classList.add('btn');
        answerButtonsElement.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        
    });
}
