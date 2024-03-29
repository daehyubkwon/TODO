// http://127.0.0.1:5500/index.html   LIVE SERVER : OPEN WITH LIVE SERVER 
const list_Selector = document.querySelector(".list-group");

let List , id , todoList;
let gUrl = "http://18.117.136.20:5000";
//let gUrl = "http://localhost:5000";

/* 조회 */
$.ajax({  
    method : "GET",
    //url: "http://18.117.136.20:5000",  //전송
    url: gUrl,  //전송   
    dataType:"JSON", 
})
.done(function(data) { 
    console.log(data);     
    todoList = data; 
    initial();        
});

/* 사용자선언함수 */
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
        addToDo(item._nm, item._id, item.done) 
    });
}

function addToDo(_nm, _id, done) {
    
    const item = `<li class="list-group-item">
                   ${_nm}
                  </li>
                  `;
    const position = "beforeend";
    list_Selector.insertAdjacentHTML(position, item);
}

$('#saveBtn').click(function() {
    var tmpNm = $("#bookName").val();

    $.ajax({  
        method : "GET",
        //url: "http://18.117.136.20:5000",  //전송
        url: gUrl+`/add?_nm=${tmpNm}`,  //전송   
        dataType:"JSON", 
    })
    .done(function(data) { 
        location.reload();
    });
    ;
});
