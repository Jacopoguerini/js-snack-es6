/*Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.*/

var bicycleList = [
    {
    name: "Trek",
    weight: 11
    },
    {
    name: "Bianchi",
    weight: 7
    },
    {
    name: "Scott",
    weight: 12
    },
    {
    name: "Scott",
    weight: 14
    },
    {
    name: "Merida",
    weight: 9
    }
];

console.log(bicycleList);

// // Il confronto parte dal primo elemento
// var bikeLighter = bicycleList[0];
// for (var i = 1; i < bicycleList.length; i++) {
//     var currentElement = bicycleList[i];
//     if (currentElement.weight < bikeLighter.weight) {
//         bikeLighter = currentElement;
//     }
// }
// console.log(bikeLighter);

var bikeLighter = bicycleList[0];

var {weight} = bikeLighter;
console.log(weight);

for (var i = 1; i < bicycleList.length; i++) {
    var currentElement = bicycleList[i];
    if (currentElement.weight < bikeLighter.weight) {
        bikeLighter = currentElement;
    }
}
console.log(bikeLighter);