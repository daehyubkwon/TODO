// http://127.0.0.1:5500/index.html   LIVE SERVER : OPEN WITH LIVE SERVER 
const list_Selector = document.querySelector(".list-group");

let List , id , todoList; 

$.ajax({  
    method : "GET",
    url: "http://localhost:5000",  //전송
    dataType:"JSON", 
})
.done(function(data) { 
    console.log(data);     
    todoList = data; 
    initial();        
});

function initial() {
    console.log(todoList);

    if (todoList) {
        console.log("todoList",todoList);
        id = todoList.length;
        loadList(todoList);
    } else {
        todoList = [];
        id = 0;
    }
     
    console.log("here",todoList);
}

function loadList(array) {
    array.forEach(function (item) {
        addToDo(item.name, item.id, item.done)
    });
}

function addToDo(name, id, done) {
    
    const item = `<li class="list-group-item">
                   ${name}
                  </li>
                  `;
    const position = "beforeend";
    list_Selector.insertAdjacentHTML(position, item);
}