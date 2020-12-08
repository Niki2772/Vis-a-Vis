let prBarFirst = document.getElementById("prBarFirst");
let prBarSecond = document.getElementById("prBarSecond");
let prBarThird = document.getElementById("prBarThird");
let prBarFourth = document.getElementById("prBarFourth");
let progressBarOffset = document.getElementById("progressBarBlock").offsetTop;

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

window.addEventListener('scroll', function () {
    if (window.pageYOffset >= progressBarOffset) {
        setTimeout(move, 1000, prBarFirst);
        setTimeout(move, 2100, prBarSecond);
        setTimeout(move, 3200, prBarThird);
        setTimeout(move, 4500, prBarFourth);
    }
});