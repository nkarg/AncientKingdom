﻿$(document).ready(function () {

    var $success = $('.success'),
    $successMsg = $('.success-message'),
    $btnContinue = $('.btn-continue'),
    $successIcon = $('.success-icon'),
    visibleClass = 'is-visible',
    dataType = 'data-type',
    gameID = 3,
    counter = 0,
    msg,
    save = true,
    count;

    var $btnSound = $('.btn-sound'),
    $themeSongEl = $('#theme-song')[0],
    playSoundClass = 'is-playing';

    var timer = setInterval(function() {

        count = parseInt($('#theTarget').html());
        if (count !== 0) {
            $('#theTarget').html(count - 1);
        } else {
            clearInterval(timer);
        }
    }, 1000);


    $(".board label").on('click', checkIsComplete);

    function checkIsComplete() {
        counter = counter + 1;
        $("#movesCount").text(counter);
        setTimeout(function () {
            var isChecked = true

            $(".correctRadio").each(function () {
                if (!$(this).prop("checked")) {
                    isChecked = false
                };
            })
            if (isChecked) {
                //esta completo 
                debugger;
                $("#successMoves").text(counter);
                $("#successTime").text(count);
                $success.addClass(visibleClass);
                switch (true) {
                    case (counter <= 30):
                        msg = "Asi se hace!!!";
                        $successIcon.attr(dataType, "sword");
                        break;
                    case (counter > 30 && counter <= 40):
                        msg = "Estuvo bien, lo logramos!";
                        $successIcon.attr(dataType, "escudo");
                        break;
                    case (counter > 40 && counter <= 50):
                        msg = "Podria haber sido mejor!";
                        $successIcon.attr(dataType, "rayo");
                        break;
                    case (attemptsCount > tooManyAttempts):
                        msg = "Esto no fue del todo bien...";
                        $successIcon.attr(dataType, "oscuro");
                        break;
                }
                $successMsg.text(msg);
                if (save) {
                    $.post("/Achievement/CreateAchievement",
                   {
                       "ThiefTries": count,
                       "ThiefLives": counter,
                       "NewAchievementID": gameID,
                   }, function (response) {
                       console.log("TodoTranca")
                   }, function (error) {
                       console.log("ExplotoTodo")
                   });
                    save = false;
                }
            }
        }, 1000);
    }

    $btnContinue.on('click', function () {
        $success.removeClass(visibleClass);
        setTimeout(function () {
             window.location = "/Map/Index"
        }, 300);
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