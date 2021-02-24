$("#get").click(function () {
    $.get("https://coderhouse-12410-javascript.github.io/data/data.json",
        function (data, status) {
            console.log("mi data es: " + data + " mi status code es: " + status);
        }
    )
});

$("#ajax").click(function () {
    $.ajax({
        url: "https://coderhouse-12410-javascript.github.io/data/data.json",
        dataType: "json",
        type: "GET", // Por defecto Ajax usa Get
        success: function (data) {
            console.log("mi data es: " + data);
        }
    }
    );
});