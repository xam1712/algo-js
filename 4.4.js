let arr = ["thelichekinge",
  "ethan",
  "Hetaska",
  "Enrique2802",
  "Trollman341",
  "Kisame25021990",
  "Léandre Mpore-Ghozzo",
  "Abdoul",
  "Aucouturier Jason",
  "xam1712",
  "Dodo-31",
  "MattWare",
  "Thomas",
  "lalbecade",
  "Gaetan",
  "Dimitri Gillain",
  "TyberCusa",
  "Johan"];

  function pickLearner(inputAr, n) {

    
    if (n <= 0 || n > inputAr.length) { // Vérification : n doit être valide
        return "Error: n must be between 1 and " + inputAr.length;
    }

    let result = [];          // tableau final
    let copy = [...inputAr];  // copie pour éviter de modifier inputAr

    for (let i = 0; i < n; i++) {
        let randomIndex = Math.floor(Math.random() * copy.length); // index aléatoire
        let picked = copy.splice(randomIndex, 1)[0];               // retire + récupère un élément
        result.push(picked);                                       // range dans la liste finale
    }

    return result;
}

console.log(pickLearner(arr, 3));