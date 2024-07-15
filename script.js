let open=document.querySelector(".open")
let box1=document.querySelector(".box")
let close=document.querySelector(".close")


open.addEventListener('click' ,()=>
{ box1.classList.add("active")

})

close.addEventListener("click",()=>{
    box1.classList.remove("active")
})