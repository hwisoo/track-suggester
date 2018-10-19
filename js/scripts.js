$(document).ready(function(){
    $("#form").submit(function(){
        event.preventDefault();
        
        // get input value and assign to variables

        var name = $("input#name").val();
        var campus = $("select#campus").val();
        var side = $("select#side").val();
        var company = $("input:radio[name=company]:checked").val();
        var build = $("input:radio[name=build]:checked").val();

        console.log(build);

        $("span#nameOutput").text(name);
        
    })
})