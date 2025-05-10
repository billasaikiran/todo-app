let todoItemsContainer=document.getElementById("todoItemsContainer");
let addTodoButton=document.getElementById("addTodoButton");

let todolist=[
    {
        text:"play cricket",
        uniqueNo:1
    },
    {
        text:"learn python",
        uniqueNo:2
    },
    {
        text:"Make a project",
        uniqueNo:3
    }
];
let todoCount=todolist.length;

function onTodosStatusChange(checkboxId,labelId){
    let checkboxEl=document.getElementById(checkboxId);
    let labelEl=document.getElementById(labelId);
    labelEl.classList.toggle("checked");
}
function onDeleteTodo(todoId){
    let todoEl=document.getElementById(todoId);
    todoItemsContainer.removeChild(todoEl);
}

function createAndAppendTodo(todo){
    let todoId="todo"+todo.uniqueNo;
    let checkboxId="checkbox"+todo.uniqueNo;
    let labelId="label"+todo.uniqueNo;


    let todoElement=document.createElement("li");
    todoElement.classList.add("todo-items-container","d-flex","flex-row");
    todoElement.id= todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement=document.createElement("input");
    inputElement.type="checkbox";
    inputElement.id=checkboxId;
    inputElement.onclick=function(){
        onTodosStatusChange(checkboxId,labelId);
    }
    inputElement.classList.add("checkbox-input")
    todoElement.appendChild(inputElement);

    let labelContainer=document.createElement("div");
    labelContainer.classList.add("label-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement=document.createElement("label");
    labelElement.classList.add("checkbox-label");
    labelElement.setAttribute("for",checkboxId);
    labelElement.id=labelId;
    labelElement.textContent= todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconcontainer=document.createElement("div");
    deleteIconcontainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconcontainer);

    let deleteIcon=document.createElement("i");
    deleteIcon.classList.add("far","fa-trash-alt","delete-icon");
    deleteIcon.onclick=function(){
        onDeleteTodo(todoId);
    }
    deleteIconcontainer.appendChild(deleteIcon);

}

for(let todo of todolist){
    createAndAppendTodo(todo);
};

function onAddTodo(){
    let userInputElement=document.getElementById("todoUserInput");
    let userInputValue=userInputElement.value;

    if(userInputValue===""){
        alert("Enter a valid input");
        return;
    }
    todoCount=todoCount+1;
    let newTodo={
        text:userInputValue,
        uniqueNo:todoCount,
        isChecked:false
    };
    todolist.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputElement.value="";
}
addTodoButton.onclick = function (){
    onAddTodo();
};