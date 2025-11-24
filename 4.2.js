
let max = 10; // Définir la valeur maximale

function rand10() { // fonction pour générer un nombre aléatoire entre 1 et 10
    return Math.floor(Math.random() * max) + 1; //générer un nombre aléatoire compris dans la valeur définie
}

console.log(rand10()); // renvoie un nombre entier compris entre 1 et 10