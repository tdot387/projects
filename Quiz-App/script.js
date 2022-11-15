let questions = [
    {
        "question": "Mit welchem Tier identifiziert sich Frenky am meisten?",
        "answer1": "Waldsprecht",
        "answer2": "Saufkuh",
        "answer3": "Fettaal",
        "answer4": "Giraffe",
        "right_answer": 2
    },
    {
        "question": "Wer ist der beste Mensch der Welt?",
        "answer1": "Thomas Wagner",
        "answer2": "Jesus Christus",
        "answer3": "Derjenige, der meinen Code reviewt",
        "answer4": "Gordon Shumway",
        "right_answer": 3
    },
    {
        "question": "Was ist Bier?",
        "answer1": "Schnaps",
        "answer2": "Wein",
        "answer3": "Likör",
        "answer4": "Etwas sehr Nices",
        "right_answer": 4
    },
    {
        "question": "Wer tötet Albus Dumbledore?",
        "answer1": "Sag ich nicht wegen Spoileralarm",
        "answer2": "Severus Snape",
        "answer3": "Harry 'the Killer' Potter",
        "answer4": "Bruce Wayne",
        "right_answer": 2
    },
    {
        "question": "Wie viel Promille hat man nach etwa drei Bier?",
        "answer1": "0,8",
        "answer2": "5,2",
        "answer3": "0,0",
        "answer4": "3,1",
        "right_answer": 1
    },
    {
        "question": "Wo wurde Shakespeare geboren?",
        "answer1": "London at Thames",
        "answer2": "Stratford upon Avon",
        "answer3": "Newcastle upon Tyne",
        "answer4": "Machester by the Sea",
        "right_answer": 2
    },
    {
        "question": "Wer verkörperte Bruce Wayne in 'The Batman'?",
        "answer1": "Christian Bale",
        "answer2": "Jesse Eisenberg",
        "answer3": "Robert Pattinson",
        "answer4": "Colin Farrell",
        "right_answer": 3
    }

];

let currentQuestion = 0;



function init() {
    document.getElementById('amountQuestions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('immediateQuestion').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];


}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer${question['right_answer']}`;



    if (selectedQuestionNumber == question['right_answer']) {
        console.log('isso');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('nä');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();

}

function resetAnswerButtons() {
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
}