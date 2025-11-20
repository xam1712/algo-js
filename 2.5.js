
// while (true) {

//     let number = Number(prompt("Quel est ton numéro préféré ?"));

//     if (number === 42) {
//         alert("SURPRIIIIISE MOTH...ER !");
//         break
//     }

//         alert("Ce n'est pas le numéro magique !");
// }
// test 
 

let number = Number(prompt("Quel est ton numéro préféré ?"));
while (number !== 42) {
        alert("Ce n'est pas le numéro magique !");
        number = Number(prompt("Quel est ton numéro préféré ?"));
}

alert("SURPRIIIIISE MOTH...ER !");