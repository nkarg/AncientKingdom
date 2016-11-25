// Turn on the sound if you want that real deal throwback experience

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var $btnSound = $('.btn-sound'),
    $themeSongEl = $('#theme-song')[0],
    playSoundClass = 'is-playing';
    var livesMax = 0, triesMax = 99;

    $(".button").on({
        mouseenter: function () {
            $(this).css({ "background-color": "blue", "font-weight": "bold" });
        },
        mouseleave: function () {
            $(this).css({ "background-color": "#4A90E2", "font-weight": "normal" });
        }
    });

    $btnSound.click(function (e) {
        e.preventDefault();
        $(this).toggleClass(playSoundClass);
        if ($(this).hasClass(playSoundClass)) {
            $themeSongEl.play();
        } else {
            $themeSongEl.pause();
        }
    });

    $.get("/Achievement/GetAchievements", {},
        function (response) {
            console.log(response)
            $.each(response, function (i, item) {
                if (item.Lives > livesMax) {
                    livesMax = item.Lives;
                }
                if (item.Tries < triesMax) {
                    triesMax = item.Tries;
                }
            });
            $("#thiefLives").text("Lives " + livesMax);
            $("#thiefContinues").text("Continues " + triesMax);
    });
});