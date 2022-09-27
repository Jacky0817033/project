let btn = document.querySelector('button')
let list = document.querySelector('section');

btn.addEventListener('click',(e) => {
    e.preventDefault();

    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDate = form.children[2].value;

    if(todoText === "") return alert('it should not be empty');

    //create todo
    let todo = document.createElement('div');
    todo.classList.add('todo');
    let text = document.createElement('p');
    text.classList.add('todo-text');
    text.innerText = todoText;

    let time = document.createElement('p');
    time.classList.add('todo-time');
    time.innerText = todoMonth + '/' + todoDate;

    todo.appendChild(text);
    todo.appendChild(time);

    form.children[0].value = '';

    //create check and cancel
    let completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    todo.appendChild(completeBtn);

    let cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.innerHTML = '<i class="fas fa-trash"></i>'
    todo.appendChild(cancel);

    todo.style.animation = "scaleUp 0.3s forwards";
    list.appendChild(todo);

    //complete event
    completeBtn.addEventListener('click', e => {
        let todoItem = e.target.parentElement;
        todoItem.classList.toggle('done');

    })

    //add cancel event
    cancel.addEventListener('click', (e) => {
        let todoItem = e.target.parentElement;
        todoItem.remove();
    })

})

