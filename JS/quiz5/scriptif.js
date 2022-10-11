let myBirthYear = 1980;
let myBirthMont = 5;
let futYear =2030;
let futMonth = 3;
let expecAge = futYear - myBirthYear;
let expecAge2 = expecAge -1;

if (myBirthMont <= futMonth) {
    window.alert("You are " + expecAge + " years old.")
}
else {
    window.alert("You are " + expecAge2 + " years old.")
}