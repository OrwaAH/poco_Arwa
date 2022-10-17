let fullName = prompt("Please enter your full name:");
let brthYear = prompt("Your birth year:");
let curYear = new Date().getFullYear();
let curAge = curYear - brthYear; 
let retirAge = prompt("Pleas enter your desirable age of retirement:");
let remaiYears = retirAge - curAge;
let retirYear = curYear + remaiYears;

function retirEstimation () {
    if (remaiYears == 0){
        document.write(`Hello ${fullName}, you are now ${curAge} years old, and you will retire this year ${curYear}. As like you prefered to retire at ${retirAge}, we wish a comfortable and peceful one. Good luck!`)
    }
    else {
        document.write(`Hello ${fullName}, it is ${curYear} and you're still ${curAge} years old. As per your choice to retire at ${retirAge}, you still have ${remaiYears} year tilll you retire as estimated in ${retirYear}. Keep it up!`)
    }
}
retirEstimation();