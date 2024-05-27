(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var divs = document.querySelectorAll('div');

        // Az első div-be írjuk be az "Első" szót
        divs[0].textContent = "Első";

        // Az utolsó div-be írjuk be az "Utolsó" szót
        divs[divs.length - 1].textContent = "Utolsó";

        // A harmadik div-be írjuk be a "Harmadik" szót
        divs[2].textContent = "Harmadik";

        // A maradék két div-be az indexüket írjuk be
        for (var i = 0; i < divs.length; i++) {
            if (divs[i].textContent === "") {
                divs[i].textContent = "Index: " + i;
            }
        }
    });
})();
