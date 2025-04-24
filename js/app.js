var toggleButtons = document.querySelectorAll(".button__toggle");
var contents = document.querySelectorAll(".main__section__four--questions--question--content");

function toggleContent(index) {
    if ( window.getComputedStyle(contents[index]).display === "none") {
        contents[index].style.display = "block";

        toggleButtons[index].classList.remove('to-plus')
        void toggleButtons[index].offsetWidth; // 🔄 fuerza reflow para reiniciar animación
        toggleButtons[index].classList.add('to-x');
        
        
    } else {
        contents[index].style.display = "none";

        toggleButtons[index].classList.remove('to-x')
        void toggleButtons[index].offsetWidth; //
        toggleButtons[index].classList.add('to-plus')
        
        
    }
}

for (var i=0; i<toggleButtons.length; i++){
    toggleButtons[i].addEventListener(
        "click",
        (function (index) {
            return function() {
                toggleContent(index);
            };
        })(i)
    );
}