
function calcDistance(x1, y1, x2, y2) { // calcule la distance entre deux points
    let dx = x2 - x1; // diff en x
    let dy = y2 - y1; // diff en y
    return Math.sqrt(dx*dx + dy*dy); // formule équivalente à pythagore
}
console.log(calcDistance(2,2,3,6));
