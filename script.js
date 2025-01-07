
var buttons = document.querySelectorAll(".toggle");
var answers = document.querySelectorAll(".ans");
var image = document.querySelectorAll(".toggle img")

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(index) {
        return function() {
            var ans = answers[index];
            var img = image[index];

            if (ans.style.display === "none" || ans.style.display === "") {
                ans.style.display = "flex";
                img.src = "img/up.png";
            } else {
                ans.style.display = "none";
                img.src = "img/down.png";
            }
        };
    }(i));
}
    