const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemlpate = todo =>{
const html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>                            
     <i class="far fa-trash-alt delete"></i>
</li>`;

list.innerHTML += html;   //+= used to add list to html , using = would delete existing html

}
addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();       //trim removes any whitespaces
if(todo.length){                               //this checks for some value entered before adding todo 
    generateTemlpate(todo);                   // creates a vew todo

    addForm.reset();                        //clears input field after todo has been added
}

});
//deletes todos
list.addEventListener('click' , e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


const filterTodos = (term) =>{

Array.from(list.children)
.filter(todo => !todo.textContent.includes(term))
.forEach(todo => todo.classList.add('.filtered'));

Array.from(list.children)
.filter(todo => todo.textContent.includes(term)) 
.forEach(todo => todo.classList.remove('.filtered'));
};
// keyup event
// search.addEventListener('keyup', () => {
//     const term = search.value.trim();
//     filterTodos(term);

// });

// filter todos event
search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filterTodos(term);
  
  });