let toDo =[];

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    toDo = data;
    toDoCheck()
   
  }); 

        function toDoCheck () {
            for (let i = 0 ; i < toDo.length; i++){
                let todoItem = toDo[i]
                
                console.log(`${todoItem.title} + ${todoItem.completed}`)

                let checkCompleted = document.createElement("input");
                let checkCompletedLabel = document.createElement("label");
                    checkCompletedLabel.setAttribute("for", "completed");
                    checkCompletedLabel.innerText = `Completed`;
                    checkCompleted.setAttribute("type", "checkbox");
                    checkCompleted.setAttribute("name", "completed");
                    checkCompleted.setAttribute("id", "completed");
                if (todoItem.completed == true){
                    checkCompleted.setAttribute('checked', 'true');
                }
                let ulElement = document.createElement("ul");
                ulElement.append(checkCompleted);
                ulElement.append(checkCompletedLabel);
                document.body.appendChild(ulElement);
            }
        }