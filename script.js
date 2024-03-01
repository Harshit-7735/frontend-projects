const inputBox=document.getElementById('input-box'); // input box
const listContainer=document.getElementById('list-container'); // ul

// Add task
function Addtask(){
   if(inputBox.value === ''){
      alert('Please Enter a Task');
   }
   else{
    // create li
    let li=document.createElement('li');
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
let span=document.createElement('span');
span.innerHTML='\u00D7';
li.appendChild(span);

   }
    inputBox.value='';
    saveData()
}

// Remove task
listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    // remove task
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})
// save data in local storage 
function saveData(){
    localStorage.setItem('listContainer',listContainer.innerHTML);
}
// show data from local storage
function showData(){
    listContainer.innerHTML=localStorage.getItem('listContainer');
}
showData();