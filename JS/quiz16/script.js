// let topChoice = [
//     ["Green", "Blue","White"], 
//     ["Football", "Basketball", "Tennis"],
//     ["Fish", "Meat", "Salad"]
// ]
// for (let i =0; i < topChoice.length; i++){
//     for (let j= 0; j < topChoice[i].length; j++){
//         var str = "";
//         if (j + 1 == 1) {
//             str = "st";
//         }
//         else if(j+1 == 2){
//             str = "nd";
//         }
//         else if (j+1 == 3){
//             str = "rd";
//         }
//         else
//             str = "th";
//         console.log(`My ${j+1}${str} Choice is ${topChoice[i][j]}`)
//     }

// }
 
let recipe ={
    name: "Soup",
    serves : 2,
    Ingredients: ["cinnamon", "cumin", "cocoa"]
}
console.log(recipe.name);
console.log(recipe.serves);
console.log(recipe.Ingredients.toLocaleString())