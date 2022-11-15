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
        "right_answer": 3
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

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];


}