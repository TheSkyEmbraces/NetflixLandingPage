const trailer = document.querySelector('.trailer'),
    play = document.querySelector('.play'),
    close = document.querySelector('.close');


function toggleVideo() {
    play.addEventListener("click", function () {
        trailer.classList.remove('activeOff')
        trailer.classList.add('activeOn');
    })
}

function closeButton(e){
    close.addEventListener("click",function(){
        trailer.classList.replace('activeOn','activeOff');
    })
}

function init() {
    toggleVideo();
    closeButton();
}

init();