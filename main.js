document.querySelector('.hamburguer').addEventListener('click', ()=>{
    console.log("click!!!");
    document.querySelector('.navbar').classList.toggle('show');
})
document.querySelector('.close').addEventListener('click', ()=>{
    console.log("click!")
    document.querySelector('.navbar').classList.toggle('show');
})