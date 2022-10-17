
  let x = prompt("Please enter the first number");
  let f;
  while (!f) {
    checkNumOne();
  }
  
  let y = prompt("Please enter the second number");
  let g;
  while(!g) {
    checkNumTwo();
  }

  

  function checkNumOne() {
        if (isNaN(x)) {
             x = prompt("Please enter a valid number");
             f = false;
    }
    else {f = true;}
} 
  function checkNumTwo() {
        if (isNaN(y)) {
            y = prompt("Please enter a valid number");
            g = false;
   }
   else {g = true;}
}

function numComparison(x,y) {
    if(x > y){
        console.log(`The smallest number of ${x} and ${y} is ${y}`);
    }
    else {
        console.log(`The greater number of ${x} and ${y} is ${y}`);
    }
}

numComparison(x,y);