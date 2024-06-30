// Wartet, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    // Fügt einen Event-Listener zum Formular hinzu, um das Submit-Event abzufangen
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Verhindert das tatsächliche Absenden des Formulars
        getNumber();
    });

    function getNumber() {
        var number = parseInt(document.getElementById('numberInput').value);
        console.log(number); // Ausgabe: 42
    }
});