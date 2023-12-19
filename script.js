const quizData = [
    {
        question: "Was ist Lauras Beruf?",
        a: "Lehrerin",
        b: "Studentin",
        c: "Ärztin",
        d: "Ingenieurin",
        correct: "b",
    },
    {
        question: "Wie viele Brüder hat Laura?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b",
    },
    {
        question: "Was isst Laura zum Frühstück?",
        a: "Toast",
        b: "Eier",
        c: "Müsli mit Joghurt",
        d: "Pfannkuchen",
        correct: "c",
    },
    {
        question: "Was macht Laura nach der Schule?",
        a: "Sie geht ins Kino",
        b: "Sie geht mit ihren Freunden aus",
        c: "Sie geht einkaufen",
        d: "Sie geht nach Hause",
        correct: "b",
    },
    {
        question: "Welche Sportart betreibt Laura?",
        a: "Fußball",
        b: "Schwimmen",
        c: "Gymnastik",
        d: "Laufen",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Máte ${score} z ${quizData.length} správně</h2>

           <button onclick="location.reload()">Zkusit znovu</button>
           `
       }
    }
})