

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answer-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const footer = document.querySelector(".footer");


const questionLimit = quiz.length;
let questionContainer = 0;
let currentQuestion;
let availableQuestions = [];
let availableQptions = [];
let correctAnswers = 0;
let attempt = 0;



// push the questions into availableQuestions Array
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i])
    }
}
 
// set questions number and questions and options
function getNewQuestion() {
    // set question number
    questionNumber.innerHTML = "Question " + (questionContainer + 1) + " of " + questionLimit;

    // set questions
    // get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    //set the position of questionIndex from the availableQuestion Array
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the questionIndex from the availableQuestion Array, so that the question does not repeat
    availableQuestions.splice(index1, 1);

    // getImageQuestion
    if (currentQuestion.hasOwnProperty("img")) {
        const img = document.createElement("img");
        img.src = currentQuestion.img;
        questionText.appendChild(img);
    }
    //console.log(questionIndex);
    //console.log(availableQuestions);

    // set options
    // get the length of options
    const optionlen = currentQuestion.options.length
    //console.log(currentQuestion.options)

    // push optiions into availableOptions Array
    for (let i = 0; i < optionlen; i++) {
        availableQptions.push(i)
    }

    optionContainer.innerHTML = '';
    let animationDelay = 0.15;

    //create options in html
    for (let i = 0; i < optionlen; i++) {
        //random option
        const optionIndex = availableQptions[Math.floor(Math.random() * availableQptions.length)];

        const index2 = availableQptions.indexOf(optionIndex);

        availableQptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)");
    }

    questionContainer++
}

function getResult(element) {
    const id = parseInt(element.id);

    if (id === currentQuestion.answer) {
        element.classList.add("correct");
        updateAnswerIndicator("correct");
        correctAnswers++;
    }
    else {
        element.classList.add("wrong");
        updateAnswerIndicator("wrong");
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
}

function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator() {
    answerIndicatorContainer.innerHTML = '';
    const totalQuestion = questionLimit;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}


function updateAnswerIndicator(markType) {
    answerIndicatorContainer.children[questionContainer - 1].classList.add(markType)
}

function next() {
    if (questionContainer === questionLimit) {
        quizOver();
       
    }
    else {
        getNewQuestion();
    }
}





function quizOver() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    footer.classList.remove("hide");
    quizResult();
}

function quizResult() {
    resultBox.querySelector(".total-questions").innerHTML = questionLimit;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / questionLimit) * 100
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit;
}




function resetQuiz() {
    questionContainer = 0;
    correctAnswers = 0;
    attempt = 0;
}


function tryAgainQuiz() {
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    footer.classList.add("hide");
    resetQuiz();
    startQuiz();
}

function goToHome() {
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    footer.classList.add("hide");
    resetQuiz();
}

function startQuiz() {
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    // first set all questions in availableQuestionsArray
    setAvailableQuestions();
    //second we will call getNewQuestion(); function
    getNewQuestion();
    answersIndicator();
}


window.onload = function () {
    homeBox.querySelector(".total-questions").innerHTML = questionLimit;
}