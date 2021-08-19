 const input = document.querySelectorAll('.input');

 function focusFunc(){
     let parent = this.parentNode.parentNode;
     parent.classList.add('focus')
 }

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value ==""){
        parent.classList.remove('focus');
    }
}
 


inputs.forEach(input=> {
     input.addEventListerner('focus',focusFunc);
     input.addEventListerner('blur',blurFunc);
     
 });