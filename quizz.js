const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.querySelector('h2');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

loadQuestion();

function loadQuestion() {
    // Load current question
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    aText.textContent = currentQuestion.a;
    bText.textContent = currentQuestion.b;
    cText.textContent = currentQuestion.c;
    dText.textContent = currentQuestion.d;
}

// Get the selected answer
function getSelected() {
    const answers = document.querySelectorAll('.answer');
    let selectedAnswer;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            selectedAnswer = answers[i].id
        }
    }
    return selectedAnswer;
}

// Reset the selection (uncheck all radio buttons)
function deselectAnswers() {
    const answers = document.querySelectorAll('.answer');
    for(let i = 0; i < answers.length; i++) {
        answers[i].checked = false;
    }
}

// Event listener for the submit button
submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelected();

    if (selectedAnswer) {
        // Check if the answer is correct
        if (selectedAnswer === quizData[currentQuestionIndex].correct) {
            score++;
        }

        // Move to the next question
        currentQuestionIndex++;

        // Check if there are more questions
        if (currentQuestionIndex < quizData.length) {
            deselectAnswers();
            loadQuestion();
        } else {
            document.querySelector('.quiz-header').innerHTML = 
            `
                <h2>You answered ${score}/${quizData.length} questions correctly!</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert('Please select an answer before submitting.');
    }
});

