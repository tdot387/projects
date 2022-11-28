let currentState = [];
let letters = [];

async function getStates() {
    let response =  await fetch("bundesland.json");
    currentState =  await response.json();
    render();
}

function render(filter) {
    let content = document.getElementById('stateContainer');
    content.innerHTML = '';
    for(let i = 0; i < currentState.length; i++){
        let state = currentState[i];
        let population = state['population'].toLocaleString();
        const firstLetter = state['name'].charAt(0);

        if(!filter || filter == firstLetter){
        content.innerHTML += displayStatesHTML(state, population, i);
    }

        if(!letters.includes(firstLetter)){
            letters.push(firstLetter);
        }

    }
    renderLetters();
}


function displayStatesHTML(state, population, i) {
     return `
        <a href="${state['url']}" target="_blank">
        <div class="states" id="states${i}">
        <div><h2>${state['name']}</h2></div>
        <p>${population} Millionen</p>
        </div>
        </a>`
    }


function setFilter(letter){
    render(letter);
}


function renderLetters(){
    let firstLetters = document.getElementById('filter');
    firstLetters.innerHTML = '';

    for(i = 0; i < letters.length; i++){
        let letter = letters[i];
        firstLetters.innerHTML += `<div onclick="setFilter('${letter}')" class="letters">${letter}</div>
    `
    }

}