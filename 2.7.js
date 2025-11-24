
let n = +prompt("Veuillez entrer un nombre n:");
let sum = 0;

for (let i = 0; i < n; i++) {
    let number = +prompt("Veuillez entrer un nombre :" + (i+1) + ":");
    sum = sum + number;
}

alert("La somme des nombres est : " + sum);