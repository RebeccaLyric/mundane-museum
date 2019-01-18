
// General JS Functions
// Change button color to blue on hover (Edu and Contact views)
let buttons = document.getElementsByClassName("form-button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseenter", function(event) {
        event.target.style.backgroundColor = "cadetblue";
    });

    buttons[i].addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "";
    });
}

