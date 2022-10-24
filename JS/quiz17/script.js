let myTitle = document.querySelector("h2");
myTitle.onclick = () => alert("You clicked the title");

let mySec = document.querySelector("section");
mySec.addEventListener("dblclick", () => alert("You double-clicked the paragraph first", true));