
  let arbLanguage = "ar";
  let frsLanguage = "fr";
  let grnLanguage = "de";
  let sphLanguage = "sp";
  let chosenLan;
function greetingTranslator(chosenLan) {
    if(chosenLan == "ar"){
        console.log("مرحبا بالعالم");
    }
    else if (chosenLan == "fr") {
        console.log("Bonjour le monde");
    }
    else if (chosenLan == "de") {
        console.log("Hallo Welt");
    }
    else if (chosenLan == "sp") {
        console.log("Hola Mundo");
    }
    else{
        console.log("Hello World")
    }
}
greetingTranslator("sp");