
let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul')


btn.addEventListener('click', function(){
    
    let list = document.createElement('li')
    list.innerText = inp.value;
    
    
    let delBtn = document.createElement('button');
    delBtn.classList.add('del')
    delBtn.innerText = "Delete"
    
    ul.appendChild(list);
    list.appendChild(delBtn);    
    inp.value=''
    
});



ul.addEventListener('click', function(event){
    // console.log(event.target.nodeName);

    if(event.target.nodeName=="BUTTON"){
        let delItem = event.target.parentElement;
        delItem.remove();
        console.log("Deleted");
        
    }
    
    
    
})



// for(let del  of dels){
//     del.addEventListener('click', function(){
//         let parent = this.parentElement; //let creates blocked socpe variable    
//         parent.remove();
        
        
//     })
    
//}

