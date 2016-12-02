$(document).ready(function () {

    $.get("/Achievement/GetHighscores", {},
        function (response) {
            console.log(response)
        });
});