$(document).ready(function () {
    counter = 0;
    var $btnSound = $('.btn-sound'),
    $themeSongEl = $('#theme-song')[0],
    playSoundClass = 'is-playing';

    $(".board label").on('click', function () {
        counter = counter + 1;

        var isChecked = true
        $(".correctRadio").each(function () {
            if (!$(this).prop("checked")) {
                isChecked = false
            };
        })
        if (isChecked) {
            //esta completo 
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
});