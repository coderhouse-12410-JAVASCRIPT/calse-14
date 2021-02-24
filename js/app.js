$("#get").click(function () {
    $.get("https://coderhouse-12410-javascript.github.io/data/data.json",
        function (data, status) {
            console.log("mi data es: " + data + " mi status code es: " + status);
        }
    )
});

// Sugerencia, probar con https://api.github.com/orgs/coderhouse-12410-JAVASCRIPT/repos

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

$("#post").click(function () {
    $.post("https://www.w3schools.com/action_page.php",
    {
        fname: "Blabla",
        lnmame: "Bleble"
    },
            function (data, status) {
            console.log("mi data es: " + data + " mi status code es: " + status);
        }
    )
});

