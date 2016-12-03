$(document).ready(function () {
    $.get("/Achievement/GetHighscores", {},
        function (response) {
            //console.log(response)
            //var warriorContainer = $("#warrior-container");
            //var wizardContainer = $("#wizard-container");
            //var thiefContainer = $("#thief-container");
            var thief2Container = $("#thief2-container");
            var wizard2Container = $("#wizard2-container");
            var warrior2Container = $("#warrior2-container");

            $.each(response, function (i, item) {
                var game = item.GameName;
                var table = '<tr>' +
                    '<td>' + item.UserName + '</td>' +
                    '<td>' + item.Lives + '</td>' +
                    '<td>' + item.Tries + '</td>' + '</tr>';

                //var element = '<div class="col-md-12">' +
                //    '<div class="col-md-4">' + item.UserName + '</div>' +
                //    '<div class="col-md-4">' + item.Lives + '</div>' +
                //    '<div class="col-md-4">' + item.Tries + '</div>' +
                //    '</div>';
                
                if (game == "Thief") {
                    //thiefContainer.append(element);
                    thief2Container.append(table);
                } else if (game == "Warrior") {
                    //warriorContainer.append(element);
                    warrior2Container.append(table);
                } else {
                    //wizardContainer.append(element);
                    wizard2Container.append(table);
                }
            });
        });
});