var ali = document.querySelectorAll("li");

for (var i = 0; i < ali.length; i++) {
    ali[i].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });
}

for (var i = 0; i < ali.length; i++) {
    ali[i].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });
}

for (var i = 0; i < ali.length; i++) {
    ali[i].addEventListener("click", function() {
        this.classList.toggle("done");
    });
}