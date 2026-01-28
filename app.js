var ul =document.getElementById('ul');

var inp =document.getElementById('inp');

var todos =JSON.pars(elocalStorage.getItem('todos')) || []



function todo() {
    // ul.innerHTML = '';
 
   if(inp.value.treim() !== '' )return
    
console.log(inp.value)

var obj = {
    id : Date.now(),
    text : inp.value,
    completed :false,
}

   todos.push(obj);

   localStorage.setItem('todos', todos);

   renderTodos()
   
}

function renderTodos() {
//    ul.innerHTML='';
    for(let i = 0;i < todo.length;i++ ){
    //  console.log(todo[i])
    var li =document.createElement('li')
    li.innerText= todos[i].text;
    ul.appendChild(li);
    }
   
    // var li =
}


