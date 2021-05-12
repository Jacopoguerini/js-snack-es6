/*Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const teams = [
    {
    name: "Inter",
    points: 0,
    fs: 0
    },
    {
    name: "Atalanta",
    points: 0,
    fs: 0
    },
    {
    name: "Milan",
    points: 0,
    fs: 0
    },
    {
    name: "Napoli",
    points: 0,
    fs: 0
    },
    {
    name: "Juventus",
    points: 0,
    fs: 0
    },
];
console.log(teams);

// funzione che genera numeri random
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// generazione casuale di punti nell'array
// Creazione nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

let arrayFinal = [];

for (let i = 0; i < teams.length; i++) {
    teams[i].points = getRandomNumber(69, 85);
    teams[i].fs = getRandomNumber(400, 550);

    let teamsNameFs = {};
    // teamsNameFs.name = teams[i].name;
    // teamsNameFs.fs = teams[i].fs;
    // arrayFinal.push(teamsNameFs);
    let {name, fs} = teams[i];

    arrayFinal.push({name, fs});
};
console.log(arrayFinal);