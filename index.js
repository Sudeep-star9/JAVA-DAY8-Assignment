const input=document.createElement('input');
document.body.appendChild(input);
const button=document.createElement('button')
document.body.appendChild(button);
button.innerHTML='add'
const ul=document.createElement('ul')
document.body.appendChild(ul)
button.addEventListener('click', dosomething)

function dosomething(){
    if(input.value!==''){
        const li=document.createElement('li');
        ul.appendChild(li);
        li.innerHTML=input.value;
        li.style.listStyleType=decimal
        input.value=" ";
    }
  
}