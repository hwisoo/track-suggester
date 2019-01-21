$(document).ready(function () {
    $("#form").submit(function () {
        event.preventDefault();

        // get input value and assign to variables

        var name = $("input#name").val();
        var campus = $("select#campus").val();
        var side = $("select#side").val();
        var company = $("input:radio[name=company]:checked").val();
        var build = $("input:radio[name=build]:checked").val();

        // get audio file
        var clickSound = $("audio#clickSound")[0];

        // declare other global variables

        var suggest1;
        var suggest2;
        var suggest3;
        var address;


        if (name) {
            $("span#nameOutput").text(name + ", ");
        }

        if (campus === "Seattle") {
            $("#campus-link").attr("href", "https://www.epicodus.com/seattle/");
            $("#campus-map").attr("href", "https://www.google.com/maps/place/600+1st+Ave,+Seattle,+WA+98104/");
            address = "600 1st Ave, Seattle, WA "
        } else if (campus === "Portland") {
            $("#campus-link").attr("href", "https://www.epicodus.com/portland/");
            $("#campus-map").attr("href", "https://www.google.com/maps/place/400+SW+Sixth+Avenue,+400+SW+6th+Ave,+Portland,+OR+97204/");
            address = "400 SW 6th Ave, Portland, OR "
        }


        let csharp = 0;
        let php = 0;
        let java = 0;
        let ruby = 0;
        let design = 0;
        let suggestions = [];

        if (build === "internal") {
            csharp++;
        }
        if (company === "bigger") {
            csharp++;
        }
        if (build === "dynamic") {
            php++;
        }
        if (company === "fast-paced") {
            php++;
        }
        if (build === "android") {
            java++;
        }
        if (company === "enterprise") {
            java++;
        }
        if (build === "interactive") {
            ruby++;
        }
        if (company === "start-up") {
            ruby++;
        }
        if (side === "back") {
            csharp++;
            php++;
            java++;
            ruby++;
        }
        if (side === "front") {
            design++;
        }

        if (csharp === 3) {
            suggest1 = "C#/.NET";
        } else if (php === 3) {
            suggest1 = "PHP/Drupal";
        } else if (java === 3) {
            suggest1 = "Java/Android";
        } else if (ruby === 3) {
            suggest1 = "Ruby/Rails"
        } else if (csharp === 2) {
            suggest1 = "C#/.NET";
        } else if (php === 2) {
            suggest1 = "PHP/Drupal";
        } else if (java === 2) {
            suggest1 = "Java/Android";
        } else if (ruby === 2) {
            suggest1 = "Ruby/Rails"
        } else if (csharp === 1) {
            suggest1 = "C#/.NET";
        } else if (php === 1) {
            suggest1 = "PHP/Drupal";
        } else if (java === 1) {
            suggest1 = "Java/Android";
        } else if (ruby === 1) {
            suggest1 = "Ruby/Rails"
        }



        if (ruby = 1 && suggest1 != "Ruby/Rails") {
            suggest2 = "Ruby/Rails";
        } else if (java = 1 && suggest1 != "Java/Android") {
            suggest2 = "Java/Android";
        } else if (php = 1 && suggest1 != "PHP/Drupal") {
            suggest2 = "PHP/Drupal";
        } else if (csharp = 1 && suggest1 != "C#/.NET") {
            suggest2 = "C#/.NET";
        }

        if (design > 0) {
            suggest3 = "CSS/Design";
        } else if (ruby = 1 && suggest1 != "Ruby/Rails" && suggest2 != "Ruby/Rails") {
            suggest3 = "Ruby/Rails";
        } else if (java = 1 && suggest1 != "Java/Android" && suggest2 != "Java/Android") {
            suggest3 = "Java/Android";
        } else if (php = 1 && suggest1 != "PHP/Drupal" && suggest2 != "PHP/Drupal") {
            suggest3 = "PHP/Drupal";
        } else if (csharp = 1 && suggest1 != "C#/.NET" && suggest2 != "C#/.NET") {
            suggest3 = "C#/.NET";
        }


        clickSound.play();


        $("div#output").hide();
        $("h4#message").hide();


        $("span#suggest1").text(suggest1);
        $("span#suggest2").text(suggest2);
        $("span#suggest3").text(suggest3);
        $("span#campusOutput").text(campus);
        $("span#addressOutput").text(address);

        $("h4#message").slideDown(500);
        $("div#output").fadeIn(2000);

    });
});