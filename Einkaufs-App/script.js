let shoppinglist = [];
let rosenkohl = ['Rosenkohl', 'Gnocchi', 'Pinienkerne', 'Salbei', 'Getrocknete Tomaten']

function init() {
    renderDishBoxes();
}


function renderDishBoxes() {
    let dishes = document.getElementById('menuSuggestions');
    dishes.innerHTML = '';
    dishes.innerHTML += `<div class="menuBoxes" onclick="addRosenkohl()"><img src="img/rosenkohl.jpg"></div>`;
}


function addRosenkohl() {
    shoppinglist.push(rosenkohl);

    for (let i = 0; i < shoppinglist.length; i++) {
        let list = shoppinglist[i];
        

        let showShoppingList = document.getElementById('yourShoppingList');
        showShoppingList.innerHTML = `<div> 
        Das musst Du heute einkaufen:</div>`;
        showShoppingList.innerHTML += `
        <div>${list}</div>`

    }
    renderDishBoxes();
}