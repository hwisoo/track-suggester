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

        if(company === "bigger"){
            suggest1 = "C#/.NET"
        } else if (company === "fast-paced"){
            suggest1 = "PHP/Drupal"
        } else if (company === "enterprise") {
            suggest1 = "Java/Android"
        } else if (company === "start-up") {
            suggest1 = "Ruby/Rails"
        }

        if(build === "")
        
        console.log(company);

        $("div#output").hide();
        $("span#nameOutput").text(name);
        $("span#suggest1").text(suggest1);
        $("div#output").fadeIn(2000);
        
    })
})