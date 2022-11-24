let currentPokemon;
let firstPokemon;
let lastPokemon;
let source = `https://pokeapi.co/api/v2/pokemon/`;
let allPokemon = [];

async function getPokemon() {
    for (let i = 1; i < 15; i++) {
 
    let url = source + i;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log('Hier: ', responseAsJson);
    showPokemon(responseAsJson, i);
}
}

function showPokemon(responseAsJson, i) {
    
   
    document.getElementById('pokedex').innerHTML += `
    <div class="pokeCard" id="pokeCard${i}">
    
    
    <div class="pokemonInfo">
        <p># ${responseAsJson['id']}</p>
        <h2 id="names">${responseAsJson['name']}</div>
        <img id="pokemonImg" src="${responseAsJson['sprites']['front_shiny']}">
        <h2></h2>
    </div>
    </div>`;
    
    checkIfGrass(responseAsJson, i);
}

function checkIfGrass(responseAsJson, i){
    let test = responseAsJson['types'][0]['type']['name'];
        
    if( test.value == 'grass') {
        document.getElementById(`pokeCard${i}`).classList.add('background-color: green');
    }
}