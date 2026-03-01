let f1 = document.querySelector('.f1');
let p1 = document.querySelector('.f1 p')
let f2 = document.querySelector('.f2')
let p2 = document.querySelector('.f2 p')
let f3 = document.querySelector('.f3')
let p3 = document.querySelector('.f3 p')
let f4 = document.querySelector('.f4')
let p4 = document.querySelector('.f4 p')

let count = 0;
f1.addEventListener('click', () => {
    if(count === 0){
        p1.style.display = "flex"
        count = 1;
    }
    else{
        p1.style.display = "none" 
        count = 0;
    }
})
f2.addEventListener('click', () => {
    if(count === 0){
        p2.style.display = "flex"
        count = 1;
    }
    else{
        p2.style.display = "none" 
        count = 0;
    }
})
f3.addEventListener('click', () => {
    if(count === 0){
        p3.style.display = "flex"
        count = 1;
    }
    else{
        p3.style.display = "none" 
        count = 0;
    }
})
f4.addEventListener('click', () => {
    if(count === 0){
        p4.style.display = "flex"
        count = 1;
    }
    else{
        p4.style.display = "none" 
        count = 0;
    }
})




