const questions = [

    {
        question: "What would you most like to learn about?",
        answers: [
            "Acne and breakouts",
            "Dry or sensitive skin",
            "Sun protection",
            "Skincare ingredients"
        ]
    },

    {
        question: "How would you describe your skin most of the time?",
        answers: [
            "Oily",
            "Dry",
            "A combination of both",
            "I'm not sure"
        ]
    },

    {
        question: "How often do you use sunscreen?",
        answers: [
            "Every day",
            "Most days",
            "Sometimes",
            "Almost never"
        ]
    },

    {
        question: "How complicated is your skincare routine?",
        answers: [
            "Very simple",
            "A few products",
            "Lots of products",
            "I don't have a routine"
        ]
    },

    {
        question: "What is your biggest skincare goal?",
        answers: [
            "Understand breakouts",
            "Keep my skin hydrated",
            "Protect my skin",
            "Understand ingredients"
        ]
    }

];


let currentQuestion = 0;

let selectedAnswer = null;


const startButton =
    document.getElementById("startQuizButton");

const quizContainer =
    document.getElementById("quizContainer");

const questionText =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const nextButton =
    document.getElementById("nextButton");

const questionNumber =
    document.getElementById("questionNumber");

const progressBar =
    document.getElementById("progressBar");

const quizResult =
    document.getElementById("quizResult");


/* START QUIZ */

startButton.addEventListener("click", function () {

    currentQuestion = 0;

    quizResult.style.display = "none";

    quizContainer.style.display = "block";

    startButton.style.display = "none";

    showQuestion();

});


/* SHOW QUESTION */

function showQuestion() {

    const current =
        questions[currentQuestion];

    questionText.textContent =
        current.question;

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;

    const progress =
        ((currentQuestion + 1) /
        questions.length) * 100;

    progressBar.style.width =
        progress + "%";

    answersContainer.innerHTML = "";

    selectedAnswer = null;

    nextButton.disabled = true;


    current.answers.forEach(function (answer, index) {

        const button =
            document.createElement("button");

        button.className =
            "quiz-answer";

        button.textContent =
            answer;


        button.addEventListener("click", function () {

            selectedAnswer = index;


            const buttons =
                document.querySelectorAll(".quiz-answer");


            buttons.forEach(function (btn) {

                btn.classList.remove("selected");

            });


            button.classList.add("selected");

            nextButton.disabled = false;

        });


        answersContainer.appendChild(button);

    });

}


/* NEXT QUESTION */

nextButton.addEventListener("click", function () {

    if (selectedAnswer === null) {
        return;
    }


    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


/* RESULTS */

function showResult() {

    quizContainer.style.display = "none";

    quizResult.style.display = "block";


    let title =
        "You're ready to become SkinSmart!";

    let text =
        "You showed interest in learning more about skin health. Explore the SkinSmart library to keep building your knowledge.";

    let tip =
        "A simple and consistent skincare routine is a great place to start.";


    if (selectedAnswer === 0) {

        title =
            "Let's Learn About Acne";

        text =
            "Acne is one of the most common skin concerns during the teen years. Explore the SkinSmart acne section to learn more about breakouts and skincare.";

        tip =
            "Avoid picking or aggressively scrubbing breakouts because this can irritate your skin.";

    }


    else if (selectedAnswer === 1) {

        title =
            "Let's Focus on Hydration";

        text =
            "Learning about gentle cleansing, moisturizers, and the skin barrier can help you better understand dry or sensitive skin.";

        tip =
            "A gentle cleanser and moisturizer can be a simple foundation for a skincare routine.";

    }


    else if (selectedAnswer === 2) {

        title =
            "Let's Talk Sun Protection";

        text =
            "Sun protection is an important part of long-term skin health. Explore SkinSmart's sun protection section to learn about UV radiation and sunscreen.";

        tip =
            "Look for a broad-spectrum sunscreen with SPF 30 or higher.";

    }


    else {

        title =
            "Become an Ingredient Expert";

        text =
            "Skincare ingredients can sound complicated. SkinSmart can help you understand what common ingredients are designed to do.";

        tip =
            "Introduce new skincare products one at a time so you can see how your skin responds.";

    }


    document.getElementById("resultTitle").textContent =
        title;

    document.getElementById("resultText").textContent =
        text;

    document.getElementById("resultTip").textContent =
        tip;

}


/* RESTART QUIZ */

document.getElementById("restartButton")
    .addEventListener("click", function () {

        currentQuestion = 0;

        quizResult.style.display = "none";

        startButton.style.display = "inline-block";

    });