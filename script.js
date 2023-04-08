// console.log("hello")
const form = document.querySelector(".form-submit")
const inputText=document.querySelector(".input-text")
const addBtn=document.getElementById("add-btn")
const todoList=document.getElementById("todo-list")

var todo =[];

// ADD A TODO
const addTodoList=event=>{
    todoItem={
        id: Date.now(),
        inputValue: inputText.value,
    };
    todo.push(todoItem);
    renderTodos();
    inputText.value=""
}

const renderTodos=()=>{
    todoList.innerHTML=""
    
    todo.forEach(element=>{
        let createLi = document.createElement("li")
        createLi.innerHTML=`
            <div class="flex-text">${element.inputValue}</div>
            <div class="button-flex">
                <button class="btn btn-info edit-todo" data-id="${element.id}">Edit</button>
                <button class="btn btn-danger delete-todo" data-id="${element.id}">Delete</button>
            </div>
        `;
        todoList.appendChild(createLi)
    })
}

addBtn.addEventListener("click",addTodoList)

// DELETE A TODO

const deleteTodoFunction=id=>{
    todo=todo.filter(deleteTodo=> deleteTodo.id !== id)
    renderTodos()
}

// EDIT A TODO
const editTodoFunction=(target)=>{
    const id=Number(target.dataset.id)
    const todoItem = todo.find(editId=>editId.id === id);
    const updateText= prompt("Please enter here: ", todoItem.inputValue);

    if(updateText){
        todoItem.inputValue=updateText;
        renderTodos()
    }
}

todoList.addEventListener("click",event=>{
    if(event.target.classList.contains("delete-todo")){
        deleteTodoFunction(Number(event.target.dataset.id))
    }else if(event.target.classList.contains("edit-todo")){
        editTodoFunction(event.target)
    }
})
