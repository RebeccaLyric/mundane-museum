
//Change navigation button color on mouseover and mouseout
popups = document.getElementsByClassName("btn");

for (let i=0; i < popups.length; i++) {
    popups[i].addEventListener("mouseover", function (event) {
        event.target.style.background = "blanchedalmond";
        event.target.style.color = "saddlebrown";
    });

    popups[i].addEventListener("mouseout", function (event) {
        event.target.style.background = "";
        event.target.style.color = "";
    });

}

