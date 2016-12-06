function muro() { window.location = "/Highscores/Index"; }
function jugar() { window.location = "/Map/Index"; }
function libro() { window.location = "/Map/Index"; }
function heroes() { window.location = "/Highscores/Index"; }

$(document).ready(function () {
    var num = 350;
    var X, Y, Z, RX, RY;

    for (var i = 0; i < num; i++) {
        var star = $('<div>').addClass('star');
        $('.space').append(star);
    };

    function newX() {
        return Math.floor(Math.random() * 1500 + 1);
    }

    function newY() {
        return Math.random() * 1500 + 1;
    }

    function newZ() {
        return Math.random() * 1500 - 750;
    }

    function newRX() {
        return Math.random() * 360 + 1;
    }

    function newRY() {
        return Math.random() * 360 + 1;
    }

    $('.star').each(function () {
        X = 'translateX(' + newX() + 'px)';
        Y = 'translateY(' + newY() + 'px)';
        Z = 'translateZ(' + newZ() + 'px)';
        RX = 'rotateX(' + newRX() + 'deg)';
        RY = 'rotateY(' + newRY() + 'deg)';

        $(this).css('transform', X + Y + Z + RX + RY)
    });

    setTimeout(function () {
        $('body').css('background-image', 'url(../Images/Home/MapWorld07.jpg)');
    }, 5000);
});