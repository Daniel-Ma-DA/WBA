$(document).ready(function() {
    // Diese Funktion wird ausgeführt, wenn das gesamte HTML-Dokument vollständig geladen ist.

    function updateWeather() {
        // Sende eine GET-Anfrage an die /data-Route des Servers
        $.getJSON('/data', function(a) {
            // Wenn die Antwort empfangen wird, aktualisiere die HTML-Elemente mit den Wetterdaten

                $('#time').text(a.measured);
                $('#temperature').text(a.temperature );
                $('#humidity').text(a.humidity);
                $('#pressure').text(a.pressure);

        });
    }

    // Initiales Update der Wetterdaten
    updateWeather();

    // Alle 5 Minuten (300000 Millisekunden) die Wetterdaten aktualisieren
    setInterval(updateWeather, 300000);
});
