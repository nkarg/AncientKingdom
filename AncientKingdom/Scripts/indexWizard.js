$(document).ready(function () {
    counter = 0;
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
});