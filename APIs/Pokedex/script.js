let currentPokemon;
let allPokemon = ['bulbasaur', 'charmander'];

async function loadPokemon(){
    let url = `https://pokeapi.co/api/v2/pokemon/${allPokemon[0]}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokemon', currentPokemon);

    renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'].toUpperCase();
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['other']['official-artwork']['front_default']; 
    document.getElementById('itemNr').innerHTML = `# ${currentPokemon['id']}`;
    document.getElementById('stats').innerHTML = `<table>
    <div class="statsTable">
        <div>HP</div>
        <div>${currentPokemon['stats'][0]['base_stat']}</div>
    </div>
    <div class="statsTable">
        <div>Attack</div>
        <div>${currentPokemon['stats'][1]['base_stat']}</div>
    </div>
    <div class="statsTable">
        <div>Defense</div>
        <div>${currentPokemon['stats'][2]['base_stat']}</div>
    </div>
    <div class="statsTable">
        <div>Special Attack</div>
        <div>${currentPokemon['stats'][3]['base_stat']}</div>
    </div>
    <div class="statsTable">
        <div>Special Defense</div>
        <div>${currentPokemon['stats'][4]['base_stat']}</div>
    </div>
    <div class="statsTable">
        <div>Speed</div>
        <div>${currentPokemon['stats'][5]['base_stat']}</div>
    </div>
</table>`;
}

function getAllPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/`;

}