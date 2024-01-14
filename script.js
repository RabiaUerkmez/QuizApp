let questions = [
    {
        "question": "Wer brachte Harry Potter, seinen Lieblingszauber, Expelliarmus bei?",
        "answer_1": "Albus Dumbledore",
        "answer_2": "Minerva McGonagall",
        "answer_3": "Hermione Granger",
        "answer_4": "Severus Snape",
        "right_answer": 4
    },
    {
        "question": "Ron Weasley's Großmutter war eine geborene:",
        "answer_1": "Black",
        "answer_2": "Potter",
        "answer_3": "Malfoy",
        "answer_4": "Longbottom",
        "right_answer": 1
    },
    {
        "question": "Wer war der erste, den Draco Malfoy umarmte?",
        "answer_1": "Narcissa Malfoy",
        "answer_2": "Voldemort",
        "answer_3": "Severus Snape",
        "answer_4": "Crabbe",
        "right_answer": 2
    },
    {
        "question": "Bellatrix Lestrange:",
        "answer_1": "ist ein Schlammblut",
        "answer_2": "war Schwanger von Voldemort",
        "answer_3": "beherrscht Parsel",
        "answer_4": "die Schwester von Narcissa Malfoy",
        "right_answer": 4
    },
    {
        "question": "Welche Person stellte, als einzige, die Loyalität von Severus Snape, Voldemort gegenüber in Frage?",
        "answer_1": "Lucius Malfoy",
        "answer_2": "Bellatrix Lestrange",
        "answer_3": "Hermione Granger",
        "answer_4": "Pomona Sprout",
        "right_answer": 2
    },
    {
        "question": "Albus Dumbledore",
        "answer_1": "War der einzige der immer im Interesse von Harry gehandelt hat.",
        "answer_2": "ist verschwägert mit Dolores Umbridge",
        "answer_3": "eigentlich noch am Leben",
        "answer_4": "war verliebt in Gellert Grindelwald",
        "right_answer": 4
    },
    {
        "question": "Tom Riddle war:",
        "answer_1": "Ein 1er Schüler und hatte die besten Schulnoten.",
        "answer_2": "Sehr beliebt bei seinen Mitschülern",
        "answer_3": "War insgeheim verliebt in Lilly Potter und konnte es nicht ertragen, dass Sie sich für James Potter entschieden hat.",
        "answer_4": "der Enkel von Salazar Slytherin",
        "right_answer": 1
    },
    {
        "question": "Wer beauftragte Dobby, Harry und seine Freunde zu befreien?",
        "answer_1": "Albus Dumbledore",
        "answer_2": "Draco Malfoy",
        "answer_3": "Rubeus Hagrid",
        "answer_4": "Aberforth Dumbledore",
        "right_answer": 4
    },
    {
        "question": "Nymphadora Tonks war die Cousine von:",
        "answer_1": "Draco Malfoy",
        "answer_2": "Ron Weasley",
        "answer_3": "Dolores Umbridge",
        "answer_4": "Alastor Moody",
        "right_answer": 1
    },
    {
        "question": "Auf welchen Zauberspruch reagiert Siri?",
        "answer_1": "Wingardium Leviosa",
        "answer_2": "Reparo",
        "answer_3": "Alohomora",
        "answer_4": "Lumos",
        "right_answer": 4
    },
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/right.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');

function init() {

    let render = document.getElementById('render-me');
    render.innerHTML = '';
    render.innerHTML = `                
    <div class="start-seite">
    <h2 style="bolder">Welcome to The Awesome<br>Harry Potter Quiz</h2>
    <h6>Ready for the Challenge?</h6>
    <button class="btn btn-warning" onclick="startGame()">START NOW ></button>
    </div>`;
}

function startGame() {
    document.getElementById('start-game').style = '';
    document.getElementById('render-me').style = 'display: none';
    let start = document.getElementById('start-game');
    start.innerHTML = '';
    start.innerHTML = returnHtml();

    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function returnHtml() {
    return `                
    <h5 class="card-title" id="questiontext">Frage</h5>


    <div class="quiz-answer-card mb-2" onclick="answer('answer_1')">
        <div class="my-card-body" id="answer_1">
            Antwort
        </div>
    </div>

    <div class="quiz-answer-card mb-2" onclick="answer('answer_2')">
        <div class="my-card-body" id="answer_2">
            Antwort
        </div>
    </div>

    <div class="quiz-answer-card mb-2" onclick="answer('answer_3')">
        <div class="my-card-body" id="answer_3">
            Antwort
        </div>
    </div>

    <div class="quiz-answer-card mb-2" onclick="answer('answer_4')">
        <div class="my-card-body" id="answer_4">
            Antwort
        </div>
    </div>
    <div class="question-footer">
    <span style="color: white;">
        <b id="actual-question">1</b> von <b id="all-questions">5</b> Fragen
    </span>

    <button onclick="nextQuestion()" class="btn btn-primary" id="next-button" disabled>></button>

    </div>`;
}

function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();

    } else {
        updateProgressBar();
        updateNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {

    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('total-sum').innerHTML = questions.length;
    document.getElementById('win-sum').innerHTML = rightQuestions;
}

function updateProgressBar() {

    let percent = (currentQuestion + 1) / questions.length;

    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;

}

function updateNextQuestion() {


    let question = questions[currentQuestion];

    document.getElementById('actual-question').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {  // Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // zB von 0 auf 1

    document.getElementById('next-button').disabled = true;


    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {

    document.getElementById('render-me').style = '';
    document.getElementById('question-body').style = '';
    document.getElementById('end-screen').style = 'display: none';
    document.getElementById('start-game').style = 'display: none';

    rightQuestions = 0;
    currentQuestion = 0;

    init();

}

function autoCloseOnResize() {
    if (window.innerWidth <= 500) {
        console.log('Viel Spaß beim Resizen ;-)');
        document.getElementById('nav-bar').style = 'display: none';
    } else {
        document.getElementById('nav-bar').style = '';
    }
}

window.onresize = autoCloseOnResize;