let selector = document.getElementById('box')
let boxTop = 200;
let boxLeft = 200;


document.addEventListener('keydown', function(e){
    if(e.key == 'ArrowDown'){
        boxTop += 10
        selector.style.top = boxTop + "px";
    }

    if(e.key == 'ArrowUp'){
        boxTop -= 10
        selector.style.top = boxTop + "px";
    }

    if(e.key == 'ArrowRight'){
        boxLeft += 10
        selector.style.left = boxLeft + "px";
    }

    if(e.key == 'ArrowLeft'){
        boxLeft -= 10
        selector.style.left = boxLeft + "px";
    }

    if((boxLeft + 90)  > window.innerWidth){
        boxLeft = 1
        selector.style.left = boxLeft + "px";

    }
   
    if(boxLeft < 0){
        boxLeft = window.innerWidth - 150
        selector.style.left = boxLeft + "px";
    }

    if((boxTop + 100 > window.innerHeight)){
        boxTop = 1
        selector.style.top = boxTop + "px";
    }

    if(boxTop < 0){
        boxTop = (window.innerHeight - 90)
        selector.style.top = boxTop + "px";
    }
})


