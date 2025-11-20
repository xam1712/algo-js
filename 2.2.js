let min = +prompt("Enter the minimum");
let max = +prompt("Enter the maximum");

if (min > max) {
       document.body.innerHTML = "<p>ERROR: YOU ARE STUPID</p>";
} else {
    let current = +prompt("Enter the current");

if ( current >= min && current <= max) {
    console.log("current is between min & max");
} else {
    console.log("current is NOT between min & max");
}
}