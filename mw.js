let text =document.getElementById('text')
let btn =document.getElementById('btn')
if(localStorage.length > 0){
    text.value = localStorage.text
}

text.onkeyup=function(){
    localStorage.text=text.value
    
}


btn.onclick=function(){console.log("i++")}
let i=0;





