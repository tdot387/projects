let categories = ['Politik', 'Welt', 'Kunst', 'Fiktion', 'Geschichte'];
let currentQuestion;

async function init() {
    let url = "questions-answers.json";
    let response = await fetch(url);
    responseAsJson = await response.json();
    render(responseAsJson);
}

function render(responseAsJson){
    let content = document.getElementById('content');
    content.innerHTML = '';

    for(let i = 0; i < responseAsJson.length; i++){
        let questionFields = responseAsJson[i];
        content.innerHTML += `<div class="boxes" id="box${i}" onclick="openQuestion(${i})">${questionFields['money']}</div>`;
        currentQuestion = i;
    }
}

async function openQuestion(i) {
    let questionResponse = await fetch("questions-answers.json");
    let questionsResponseJson = await questionResponse.json();
    console.log(questionsResponseJson);

    
    document.getElementById('questionBackground').classList.remove('d-none');

    for(let j = 0; j < questionsResponseJson[i]['question'].length; j++){
        let theQuestions = questionsResponseJson[j]['question'];
        let question = document.getElementById(`question`);
        question.innerHTML += `<div>${theQuestions}</div>`
        
        
    }

}

function close() {
    document.getElementById('questionBackground').classList.add('d-none');
    
}