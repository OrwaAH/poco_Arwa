function getRandomArbitrary(max, min) {
    return Math.random() * (max - min) + min;
}

let mystery_number = Math.round(getRandomArbitrary(0, 100));
let input;
while (mystery_number != input) {

    input = prompt("Try me!");
    if (mystery_number < input) {
        alert("The mystery number is smaller!");
    }
    else if (mystery_number > input) {
        alert("The mystery number is bigger");
    }
    else {
        alert("Well done!")
    }
}
