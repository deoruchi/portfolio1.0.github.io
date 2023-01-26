const btn_close=document.getElementById("close1")
const menu_item = document.getElementsByClassName("navi")
btn_close.addEventListener('click',()=>{
    menu_item[0].classList.add('show')
})

const menu_btn = document.getElementsByClassName('menu_close')
menu_btn[0].addEventListener('click',()=>{
    menu_item[0].classList.remove('show')
})

const clickclick=document.getElementsByClassName("menu_item")

clickclick[0].addEventListener('click',()=>{
    menu_item[0].classList.add('show')
    // console.log("here i am clickeds")
})
clickclick[1].addEventListener('click',()=>{
    menu_item[0].classList.add('show')
})
clickclick[2].addEventListener('click',()=>{
    menu_item[0].classList.add('show')
})
clickclick[3].addEventListener('click',()=>{
    menu_item[0].classList.add('show')
})