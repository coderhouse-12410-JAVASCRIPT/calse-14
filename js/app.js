$("button").click(function(){
    $.get("https://coderhouse-12410-javascript.github.io/data/data.json", 
        function(data, status){
            console.log("mi data es: " + data + " mi status code es: " + status);
        }
    )
});