$(document).ready(function () {
    $.get("/Achievement/GetHighscores", {},
        function (response) {
        
            var warriorContainer = $("#warrior-container");
            var wizardContainer = $("#wizard-container");
            var thiefContainer = $("#thief-container");

            $.each(response, function (i, item) {
                var game = item.GameName;              
                var element = '<div class="col-md-12">' +
                    '<div class="col-md-4">' + item.UserName + '</div>' +
                    '<div class="col-md-4">' + item.Lives + '</div>' +
                    '<div class="col-md-4">' + item.Tries + '</div>' +
                    '</div>';
                
                if (game == "Thief") {
                    thiefContainer.append(element);
                } else if (game == "Warrior") {
                    warriorContainer.append(element);
                } else {
                    wizardContainer.append(element);
                }
            });
        });
});