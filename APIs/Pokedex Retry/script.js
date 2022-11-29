let currentPokemon;
let source = `https://pokeapi.co/api/v2/pokemon/`;
let allPokemon = [0];

async function getPokemon() {
    for (let i = 1; i < 31; i++) {
        includeHTML();
        let url = source + i;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        console.log('Hier: ', responseAsJson);
        showPokemon(responseAsJson, i);
        checkBgColor(responseAsJson, i);
        allPokemon.push(responseAsJson);
    }
}

function showPokemon(responseAsJson, i) {

    document.getElementById('pokedex').innerHTML += `
    <div class="pokeCard" id="pokeCard${i}" onclick="openPokemon(${i})">
    <div class="pokemonInfo">
        <p># ${responseAsJson['id']}</p>
        <h2 class="capital-letter" id="names">${responseAsJson['name']}</div>
        <img id="pokemonImg" src="${responseAsJson['sprites']['front_shiny']}">
        <h3 id="type${i}">${responseAsJson['types'][0]['type']['name']}</h3>
    </div>
    </div>`;


}

async function openPokemon(i) {
    let url = source + i;
    let response = await fetch(url);
    let displayPokemon = await response.json();

    document.getElementById('fullscreen').classList.remove('d-none');
    document.body.classList.add('overflow');
    currentPokemon = i;



    document.getElementById('pokeCenter').innerHTML = /*html*/ `
    <div class="cardFullscreen">
        <div id="outerCard" class="outerCard">
        <div id="topInfo${i}" class="topInfo">
        <div># ${displayPokemon['id']}</div>
        <h1 class="capital-letter" id="name${i}">${displayPokemon['name']}</h1>
        </div>
        <div class="imageContainer">
        <img id="images${i}" src="${displayPokemon['sprites']['other']['dream_world']['front_default']}">
        
        <div class="statsTable">
            <div>HP </div>
            <div>${displayPokemon['stats'][0]['base_stat']}</div>
        </div>
        <div class="statsTable">
            <div>Attack</div> 
            <div>${displayPokemon['stats'][1]['base_stat']}</div>
        </div>
        <div class="statsTable">
            <div>Defense</div>
            <div>${displayPokemon['stats'][2]['base_stat']}</div>
        </div>
        <div class="statsTable">
            <div>Special Attack</div>
            <div>${displayPokemon['stats'][3]['base_stat']}</div>
        </div>
        <div class="statsTable">
            <div>Special Defense</div>
            <div>${displayPokemon['stats'][4]['base_stat']}</div>
        </div>
        <div style="margin-bottom: 24px" class="statsTable">
            <div>Speed</div>
            <div>${displayPokemon['stats'][5]['base_stat']}</div>
        </div>  
    </div>

`;
    checkBgColorFs(displayPokemon, i);

    return currentPokemon;


}

function previousPokemon() {
    if (currentPokemon > 1) {
        let before = currentPokemon - 1;
        openPokemon(before);
    } else {
        openPokemon(allPokemon.length - 1)
    }
}

function nextPokemon() {
    if (currentPokemon < allPokemon.length - 1) {
        let after = currentPokemon + 1;
        openPokemon(after);
    } else {
        currentPokemon = 1;
        openPokemon(currentPokemon);
    }
}

function closePokemon() {
    document.getElementById('fullscreen').classList.add('d-none');
    document.body.classList.remove('overflow');

}


function checkBgColor(responseAsJson, i) {
    let typeBackground = responseAsJson['types'][0]['type']['name'];
    document.getElementById(`pokeCard${i}`).classList.add(typeBackground);
}

function checkBgColorFs(displayPokemon, i) {
    let cardBackground = displayPokemon['types'][0]['type']['name'];
    document.getElementById(`topInfo${i}`).classList.add(cardBackground);
}


async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let response = await fetch(file);
        if (response.ok) {
            element.innerHTML = await response.text();
        } else {
            element.innerHTML = 'Page not found.';
        }
    }
}


function searchPokemon() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();

    document.getElementById('pokedex').innerHTML = '';


    for (let i = 1; i < allPokemon.length; i++) {
        let searchResult = allPokemon[i]['name'];

        if (searchResult.toLowerCase().includes(search)) {
            let result = allPokemon[i];
            pokedex.innerHTML += `
            <div class="pokeCard" id="pokeCard${i}" onclick="openPokemon(${i})">
            <div class="pokemonInfo">
                <p># ${result['id']}</p>
                <h2 class="capital-letter" id="names">${result['name']}</div>
                <img id="pokemonImg" src="${result['sprites']['front_shiny']}">
                <h3 id="type${i}">${result['types'][0]['type']['name']}</h3>
            </div>
            </div>`
            checkBgColorSearch(result, i)
        }

    }
}

function checkBgColorSearch(result, i) {
    let typeBackground = result['types'][0]['type']['name'];
    document.getElementById(`pokeCard${i}`).classList.add(typeBackground);
}