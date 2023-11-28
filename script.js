
let Micon = document.querySelector(".menu-icon")

let menu = document.querySelector(".menu-list")

let closeicon = document.querySelector(".close")


let li = document.querySelector(".listitem")

let li1 = document.querySelector(".listitem1")

let li2 = document.querySelector(".listitem2")

let li3 = document.querySelector(".listitem3")


function abrir(){

menu.style.transform = "translate(0,0)"

    

}

function fechar(){
    menu.style.transform = "translate(0,100%)"
 
    li.style.transform = "translate(0,-90%)"

    li1.style.transform = "translate(0,-90%)"

    li2.style.transform = "translate(0,-90%)"

    li3.style.transform = "translate(0,-90%)"
    
}