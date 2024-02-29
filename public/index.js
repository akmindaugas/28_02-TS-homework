"use strict";
console.log('veikia');
// getting HTML element and asigning as Card + completing task7 
const InventorCard = document.getElementById("arrayWrapper");
InventorCard.addEventListener('click', consoleLog);
function consoleLog() {
    console.log(Inventor);
    return;
}
;
// creating variables=====================================
const inputWrapper = document.getElementById('inputWrapper');
const Inventor = [];
const input = document.createElement("input");
input.classList.add("addGameInput");
input.type = 'text';
input.placeholder = 'add game';
inputWrapper.append(input);
const inputSelect = document.createElement("input");
inputSelect.classList.add("addSelectInput");
inputSelect.type = 'text';
inputSelect.placeholder = 'add selected game';
inputWrapper.append(inputSelect);
const buttonWrapper = document.getElementById("buttons");
// task9==============
const buttonBoardGames = document.createElement("button");
buttonBoardGames.classList.add("showBoardGames");
buttonBoardGames.innerText = 'show Boardgames only';
buttonWrapper.append(buttonBoardGames);
// ====selecting given tye games from Inventor array=====
buttonBoardGames.addEventListener('click', selectBoardGames);
function selectBoardGames() {
    const selectBoardGames = Inventor.filter(game => game.type === 'boardgame');
    console.log(selectBoardGames);
}
;
// =================================================================
const buttonGames = document.createElement("button");
buttonGames.classList.add("showGames");
buttonGames.innerText = 'show Games only';
buttonWrapper.append(buttonGames);
const buttonAllResourses = document.createElement("button");
buttonAllResourses.classList.add("showAllResourses");
buttonAllResourses.innerText = 'show all resourses';
buttonWrapper.append(buttonAllResourses);
// let range = [];
// function selectRange (){
//     Inventor.forEach(game => {
//         range.push(game.title);
//     });
// }; 
const button = document.createElement("button");
button.classList.add("addButton");
button.innerText = 'add';
InventorCard.append(button);
// delete function & refresh display task8 ================
button.addEventListener('click', deleteCard);
function deleteCard() {
    console.log('deleteCard clicked');
}
;
// task6 display array===============
function DisplayInventor() {
    if (InventorCard) {
        InventorCard.innerText = JSON.stringify(Inventor);
    }
}
;
// task5 add game to array
function addGameToInventor(game) {
    Inventor.push(game);
    console.log(Inventor);
    DisplayInventor();
}
;
addGameToInventor({
    id: 1,
    title: 'title',
    releaseYear: 2000,
    rate: 2,
    platform: 'PC',
    type: 'game'
});
console.log('last code line');
