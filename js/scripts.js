$(document).ready(function(){
    $("#form").submit(function(){
        event.preventDefault();
        
        // get input value and assign to variables

        var name = $("input#name").val();
        var campus = $("select#campus").val();
        var side = $("select#side").val();
        var company = $("input:radio[name=company]:checked").val();
        var build = $("input:radio[name=build]:checked").val();
        
        var suggest1;
        var suggest2;
        var suggest3;

        if(build === "internal"){
            suggest1 = "C#/.NET"
        } else if(build === "dynamic"){
            suggest1 = "PHP/Drupal"
        } else if (build === "android"){
            suggest1 = "Java/Android"
        } else if (build === "interactive"){
            suggest1 = "Ruby/Rails"
        } 

        if(company === "bigger" && suggest1 != "C#/.NET"){
            suggest2 = "C#/.NET"
        } else if (company === "fast-paced" && suggest1 != "PHP/Drupal"){
            suggest2 = "PHP/Drupal"
        } else if (company === "enterprise" && suggest1 != "Java/Android"){
            suggest2 = "Java/Android"
        } else if (company === "start-up" && suggest1 != "Ruby/Rails"){
            suggest2 = "Ruby/Rails"
        } else {
            suggest2 = "CSS/Design"
        }

        if (side ==="front" && suggest2 != "CSS/Design") {
            suggest3 = "CSS/Design"
        } else if (side === "front" && suggest2 === "CSS/Design" && suggest1 != "C#/.NET") {
            suggest3 = "C#/.NET"
        } else if (side === "front" && suggest2 === "CSS/Design" && suggest1 != "PHP/Drupal") {
            suggest3 = "PHP/Drupal"
        } else if (side === "front" && suggest2 === "CSS/Design" && suggest1 != "Java/Android") {
            suggest3 = "Java/Android"
        } else if (side === "front" && suggest2 === "CSS/Design" && suggest1 != "Ruby/Rails") {
            suggest3 = "Ruby/Rails"
        }

        if (side ==="back" && suggest2 != "CSS/Design") {
            suggest3 = "CSS/Design"
        } else if (side === "back" && suggest2 === "CSS/Design" && suggest1 != "C#/.NET") {
            suggest3 = "C#/.NET"
        } else if (side === "back" && suggest2 === "CSS/Design" && suggest1 != "PHP/Drupal") {
            suggest3 = "PHP/Drupal"
        } else if (side === "back" && suggest2 === "CSS/Design" && suggest1 != "Java/Android") {
            suggest3 = "Java/Android"
        } else if (side === "back" && suggest2 === "CSS/Design" && suggest1 != "Ruby/Rails") {
            suggest3 = "Ruby/Rails"
        }

            console.log(build);

        $("div#output").hide();
        if (name) {
        $("span#nameOutput").text(name + ", ");
        }
        $("span#suggest1").text(suggest1);
        $("span#suggest2").text(suggest2);
        $("span#suggest3").text(suggest3);
        $("div#output").fadeIn(2000);
        
    })
})