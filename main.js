array = [1,2,3,4,5]
const forEach = document.querySelector("#forE")
const map = document.querySelector("#map")
const filter = document.querySelector("#filter")
const reduce = document.querySelector("#reduce")
const display = document.querySelector("#display")
let i = 0;

forEach.addEventListener('click', function(){
    array.forEach(element => {
        i++;

        display.innerHTML += `<li> element nr${i} to ${element} </li>`
    })
})

map.addEventListener('click', function(){
    array.map(element =>{
        i++;

        display.innerHTML += `<li> element:${element} pomnożony przez dwa to:${element * 2} </li>`
    })
})

filter.addEventListener('click', function(){
    array.filter(element =>{
        i++;

        if(array.filter(element => element % 2 === 0)){
            display.innerHTML += `<li> elementy parzyste to: ${element} </li>`
        }
    })




















