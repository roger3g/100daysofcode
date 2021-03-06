
const iniSec = document.getElementById('inicial-section')
const quizSec = document.getElementById('quiz-section')
const resSec = document.getElementById('result-section')

const quiz = document.getElementById('quiz')
const results = document.getElementById('results')

const startBtn = document.getElementById('start')
const submitBtn = document.getElementById('submit')
const refreshBtn = document.getElementById('refresh')
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

var elem = document.getElementById("myBar");



const questions = [
    {
        question: "Dentro de qual elemento HTML colocamos o JavaScript?",
        answers: {
            '0': '&lt;script&gt;',
            '1': '&lt;javascript&gt;',
            '2': '&lt;js&gt;'
        },
        correctAnswer: '0'
    },
    {
        question: "Onde é o local correto para inserir o JavaScript?",
        answers: {
            '0': 'A seção &lt;head&gt;',
            '1': 'A seção &lt;body&gt;',
            '2': 'As duas estão corretas'
        },
        correctAnswer: '2'
    },
    {
        question: "Qual é a sintaxe correta para se referir a um script externo chamado 'xxx.js'?",
        answers: {
            '0': '&ltscript href=&quot;xxx.js&quot;&gt;',
            '1': '&lt;script name=&quot;xxx.js&quot;&gt;',
            '2': '&lt;script src=&quot;xxx.js&quot;&gt;'
        },
        correctAnswer: '2'
    },
    {
        question: "Como você escreve &quot;Hello World&quot; em uma caixa de alerta?",
        answers: {
            '0': 'alertBox(&quot;Hello World&quot;);',
            '1': 'msg(&quot;Hello World&quot;);',
            '2': 'alert(&quot;Hello World&quot;);'
        },
        correctAnswer: '2'
    },
    {
        question: "Como você cria uma função em JavaScript?",
        answers: {
            '0': 'function myFunction()',
            '1': 'function:myFunction()',
            '2': 'function = myFunction()'
        },
        correctAnswer: '0'
    }
];

function showQuestions() {

    iniSec.style.display = 'none'
    quizSec.style.display = 'block'

    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++) {

        answers = [];

        for (option in questions[i].answers) {

            answers.push(
                `<label > 
                    <input type="radio" name="question${i}" value="${option}">
                    ${questions[i].answers[option]} 
                </label>`
            );
        }
        output.push(

            `<div class="slide">
                <div class="question"> ${questions[i].question} </div>
                <div class="answers"> ${answers.join('')} </div>
            </div>`

        );
    }

    quiz.innerHTML = output.join('');
}


function showResults() {
    seconds = 0
    counter.remove()
    
    submitBtn.style.display = 'none'
    resSec.style.display = 'block'

    const htmlAnswers = quiz.querySelectorAll('.answers')

    var userAnswer = ''
    var numCorrect = 0

    for (var i = 0; i < questions.length; i++) {

        userAnswer = (htmlAnswers[i].querySelector(`input[name=question${i}]:checked`) || {}).value;
        lab = htmlAnswers[i].getElementsByTagName('LABEL')
        inp = htmlAnswers[i].getElementsByTagName('INPUT')
        if (userAnswer === questions[i].correctAnswer) {

            numCorrect++;

            lab[userAnswer].style.color = '#379e37'

        } else {
            if (htmlAnswers[i].querySelector(`input[name=question${i}]:checked`)) {
                lab[userAnswer].style.color = '#ff2802'
            } else {
                htmlAnswers[i].style.color = '#1a728d'
            }

        }
    }

    results.innerHTML = `${numCorrect} / ${questions.length}`

}


function refresh() {
    document.location.reload()
}


function showSlide(n) {
    const slides = quiz.querySelectorAll(".slide")

    slides[currentSlide].classList.remove('active-slide')
    slides[n].classList.add('active-slide')

    currentSlide = n

    if (currentSlide === 0) {
        previousBtn.style.display = 'none'
    }
    else {
        previousBtn.style.display = 'inline-block'
    }
    if (currentSlide === slides.length - 1) {
        nextBtn.style.display = 'none'
        submitBtn.style.display = 'inline-block'
    }
    else {
        nextBtn.style.display = 'inline-block'
        submitBtn.style.display = 'none'
    }
}

//progress bar

var width = 100 / questions.length
const progress = 100 / questions.length

let currentSlide = 0


function showNextSlide() {
    showSlide(currentSlide + 1)

    width = width + progress
    elem.style.width = width + "%"

}

function showPreviousSlide() {
    showSlide(currentSlide - 1)

    width = width - progress
    elem.style.width = width + "%"
}
//timer

const counter = document.getElementById('counter')
var seconds = 60
var minutstimer
var secondstimer


function timer() {

    secondstimer = seconds % 60;
    minutstimer = Math.floor(seconds / 60)

    if (secondstimer < 10) {
        secondstimer = "0" + secondstimer
    }

    if (minutstimer < 10) {
        minutstimer = "0" + minutstimer
    }

    counter.innerHTML = minutstimer + " : " + secondstimer
    setInterval(count, 1000);
}

function count() {
    if (seconds > 0) {

        seconds--;
        secondstimer = seconds % 60;
        minutstimer = Math.floor(seconds / 60)

        if (secondstimer < 10) {
            secondstimer = "0" + secondstimer
        }

        if (minutstimer < 10) {
            minutstimer = "0" + minutstimer
        }

        counter.innerHTML = minutstimer + " : " + secondstimer
        if (secondstimer < 10) {
            counter.style.color = '#ff2802'
        }
    }
    else {
        counter.innerHTML = "<p>Time is over!</p>"
        setTimeout(() => counter.remove(), 5000)
        showResults()
    }
}

//EVENTS

previousBtn.onclick = function () {
    showPreviousSlide()
}

nextBtn.onclick = function () {
    showNextSlide()
}

startBtn.onclick = function () {
    showQuestions()
    showSlide(currentSlide)
    timer()
}

refreshBtn.onclick = function () {
    refresh()
}
submitBtn.onclick = function () {
    showResults()
}
