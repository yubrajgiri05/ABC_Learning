let box1 = document.getElementsByClassName("box1");
console.log(box1);
   
    for(let i = 0; i<box1.length ; i++){
       box1[i].addEventListener("click",()=>{
        window.open("./details.html", "_self");
       })
    }
    
    let box5 = document.getElementsByClassName("box5");
console.log(box5);
   
    for(let i = 0; i<box5.length ; i++){
       box5[i].addEventListener("click",()=>{
        window.open("./book.html", "_self");
       })
    }
   