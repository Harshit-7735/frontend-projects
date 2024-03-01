const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
function Addtask(){
   if(inputBox.value === ''){
      alert('Please Enter a Task');
   }
   else{
    let li=document.createElement('li');
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
let span=document.createElement('span');
span.innerHTML='\u00D7';
li.appendChild(span);

   }
    inputBox.value='';
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.style.display='none';
    }
}
)
