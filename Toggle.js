document.addEventListener("DOMContentLoaded", function() {
    var stylesheet1 = "Style1.css";
    var stylesheet2 = "Style2.css";
    var currStylesheet = document.getElementById("stylesheetID");

    var holdStylesheet = localStorage.getItem('stylesheet');
    if (holdStylesheet) {
        currStylesheet.setAttribute("href", holdStylesheet);
    }

    document.getElementById("toggleButton").addEventListener("click", function() {
        if (currStylesheet.getAttribute("href") === stylesheet1) {
            currStylesheet.setAttribute("href", stylesheet2);
            localStorage.setItem('stylesheet', stylesheet2);

        } else {
            currStylesheet.setAttribute("href", stylesheet1);
            localStorage.setItem('stylesheet', stylesheet1);

        }
    });
});