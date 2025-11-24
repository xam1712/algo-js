
let longueur = +prompt ("Longueur?"); // demande la longueur à l'utilisateur
let largeur = +prompt ("Largeur?"); // demande la largeur à l'utilisateur

function calcSurface (longueur, largeur) { // fonction permettant de calculer la surface
    return longueur * largeur; // calcule et renvoie la surface
}

let surface = calcSurface(longueur, largeur); // appel de la fonction et stockage de la valeur

alert (" la surface est de : " + surface); // affiche la suface à l'utilisateur
