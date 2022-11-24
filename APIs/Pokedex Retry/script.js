let currentPokemon;
let source = `https://pokeapi.co/api/v2/pokemon/`;
let allPokemon = [0];

async function getPokemon() {
    for (let i = 1; i < 31; i++) {

        let url = source + i;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        console.log('Hier: ', responseAsJson);
        showPokemon(responseAsJson, i);
        checkBgColor(responseAsJson, i);
        allPokemon.push(responseAsJson['sprites']['other']['dream_world']['front_default']);
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

function openPokemon(i) {
    document.getElementById('fullscreen').classList.remove('d-none');
    document.body.classList.add('overflow');
    currentPokemon = i;
    let showHighRes = allPokemon[i];
    document.getElementById('pokeCenter').innerHTML = `
    <div class="cardFullscreen">
        <div class="topInfo">
        <h1>Name</h1>
        </div>
        <div class="imageContainer">
        <img src="${showHighRes}">
        </div>
    </div> `;
    return currentPokemon;

}

function previousPokemon() {
    if(currentPokemon > 1){
        let before = currentPokemon -1;
        openPokemon(before);
    } else {
        openPokemon(allPokemon.length -1)
    }
}

function nextPokemon() {
    if(currentPokemon < allPokemon.length -1){
        let after = currentPokemon +1;
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
    if (typeBackground == 'grass') {
        document.getElementById(`pokeCard${i}`).classList.add('grass');
    }

    if (typeBackground == 'fire') {
        document.getElementById(`pokeCard${i}`).classList.add('fire');
    }

    if (typeBackground == 'bug') {
        document.getElementById(`pokeCard${i}`).classList.add('bug');
    }

    if (typeBackground == 'water') {
        document.getElementById(`pokeCard${i}`).classList.add('water');
    }

    if (typeBackground == 'normal') {
        document.getElementById(`pokeCard${i}`).classList.add('normal');
    }

    if (typeBackground == 'poison') {
        document.getElementById(`pokeCard${i}`).classList.add('poison');
    }

    if (typeBackground == 'electric') {
        document.getElementById(`pokeCard${i}`).classList.add('electric');
    }

    if (typeBackground == 'ground') {
        document.getElementById(`pokeCard${i}`).classList.add('ground');
    }
}