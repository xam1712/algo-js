// let number = Number(prompt("Entrez un nombre entre 1 et 7 :"));

// if (number === 1) {
//     alert("Lundi");
// }
// else if (number === 2) {
//     alert("Mardi");
// }
// else if (number === 3) {
//     alert("Mercredi");
// }
// else if (number === 4) {
//     alert("Jeudi");
// }
// else if (number === 5) {
//     alert("Vendredi");
// }
// else if (number === 6) {
//     alert("Samedi");
// }
// else if (number === 7) {
//     alert("Dimanche");
// }
// else {
//     alert("T'es biesse ou quoi?! Entre 1 et 7...");
// }


let number = Number(prompt("Entrez un nombre entre 1 et 7 :"));

let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

if (number >= 1 && number <= 7) {
    alert(days[number - 1]);
} else {
    alert("T'es biesse ou quoi?! Entre 1 et 7...");
}

