let prBarFirst = document.getElementById("prBarFirst");

let i = 0;
function move(element) {
    if (i === 0) {
        i = 1;
        let width = 1;
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                element.style.width = width + "%";
            }
        }
    }
}

let progressBarOffset = document.getElementById("progressBarBlock").offsetTop;

window.addEventListener('scroll', function() {
    if(window.pageYOffset >= progressBarOffset){
        move(prBarFirst);
    }
});