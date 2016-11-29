$(document).ready(function () {

    var $success = $('.success'),
    $successMsg = $('.success-message'),
    $btnContinue = $('.btn-continue'),
    visibleClass = 'is-visible',
    dataType = 'data-type',
    turnsCount = 2,
    attemptsCount = 0,
    timeoutLength = 600,
    gameID = 3,
    msg;

    counter = 0;
    var $btnSound = $('.btn-sound'),
    $themeSongEl = $('#theme-song')[0],
    playSoundClass = 'is-playing';

    var timer = setInterval(function() {

        var count = parseInt($('#theTarget').html());
        if (count !== 0) {
            $('#theTarget').html(count - 1);
        } else {
            clearInterval(timer);
        }
    }, 1000);


    $(".board label").on('click', function () {
        counter = counter + 1;
        $("#movesCount").text(counter);
        var isChecked = true
        $(".correctRadio").each(function () {
            if (!$(this).prop("checked")) {
                isChecked = false
            };
        })
        if (isChecked) {
            //esta completo 
        }
        if (counter == 5) {
            $success.addClass(visibleClass);
            
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