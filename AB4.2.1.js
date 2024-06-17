function berechneUndGibQuadratzahlenAus() {
    // Hole das Ausgabeelement
    const outputElement = document.getElementById('output');

for (let i = 1; i < 26; i++) {
    const square = i * i;
    const paragraph = document.createElement('p');
    paragraph.className = 'square';
    paragraph.textContent = `Das Quadrat von ${i} ist ${square}`;
    outputElement.appendChild(paragraph);
}
}

// Funktion aufrufen
berechneUndGibQuadratzahlenAus();

function betrag(a) {
    const outputElement = document.getElementById('output');
    const a1 = a;
    const a2 = a;
    const heading = document.createElement('h1');


}