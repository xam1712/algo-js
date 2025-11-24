

let max = 10; // Définir la valeur maximale

function rand10() { // Fonction pour générer un nombre aléatoire entre 1 et 10
    return Math.floor(Math.random() * max) + 1;
}

function multiRand(num) { // Fonction pour générer n nombres aléatoires
    let tableau = []; // tableau qui contiendra les n nombres

    for (let i = 0; i < num; i++) {
        tableau.push(rand10()); // ajoute un nombre aléatoire
    }

    return tableau;
}

console.log(multiRand(5)); // Affiche 5 nombres aléatoires entre 1 et 10
