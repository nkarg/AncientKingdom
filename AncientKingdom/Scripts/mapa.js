$(document).ready(function() {
    $(".button").on({
        mouseenter: function () {
            $(this).css({ "background-color": "blue", "font-weight": "bold" });
        },
        mouseleave: function () {
            $(this).css({ "background-color": "#4A90E2", "font-weight": "normal" });
        }
    });
});