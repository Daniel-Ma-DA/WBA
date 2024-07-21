const wein = [
    ["Marienthaler Stiftsberg Roweincuvee", 3.60],
    ["Rieslin Classic", 3.20],
    ["Silvaner Selection Rheinhessen",6.90],
    ["Domäne Avelbach Riesling Sekt",6.15],
    ["Daniels Schnaos", 100.00]

];
document.addEventListener('DOMContentLoaded', function (){
    //Array of all wines with respective prices

    const table = document.getElementById('Weine');
    const tbody = table.querySelector('tbody');

    //Automatic creation of Table Rows for every wine
    wein.forEach(function (rowArray) {
        const tableRow = document.createElement('tr');
        let input = document.createElement('input');
        input.type = 'text'; input.className = 'quantity'; input.min = '0'; input.oninput = function() { validateNumberInput(this); }; input.onchange = function() { checkAmountBottles(); }; input.placeholder = '0';
        tableRow.appendChild(input)
        rowArray.forEach(function (arrayCell) {
            const tableCell = document.createElement('td');
            tableCell.innerText= arrayCell;
            tableRow.appendChild(tableCell);
        });
        let sumPriceForOneWine = document.createElement('td');
        sumPriceForOneWine.className = 'total-price'
        //let spanPrice =document.createElement('span');
        //spanPrice.className = 'total-price'
        //sumPriceForOneWine.appendChild(spanPrice);
        tableRow.appendChild(sumPriceForOneWine);
        tbody.appendChild(tableRow);

    });




});

function validateNumberInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    updateTotalPrice(input);
}
function updateTotalPrice(input) {
    const totalPrices =document.querySelectorAll('.total-price');
    console.log(totalPrices)
    const inputAmounts = document.querySelectorAll('.quantity')
    console.log(inputAmounts)
    const winePrices = wein.map(prices => prices[1])
    console.log(winePrices)
    for (let i = 0; i < inputAmounts.length-1; i++) {
        console.log(totalPrices[i].textContent);
    }
    
}
/*
function updateTotalPrice(input) {
    const row = input.parentElement.parentElement; // Holt die aktuelle Zeile (tr)
    const quantity = parseFloat(input.value);
    const pricePerBottle = parseFloat(row.children[2].innerText); // Holt den Preis pro Flasche aus dem dritten td
    const totalPriceElement = row.children[3]; // Die vierte td für den Gesamtpreis

    if (!isNaN(quantity) && !isNaN(pricePerBottle)) {
        const totalPrice = quantity * pricePerBottle;
        totalPriceElement.innerText = totalPrice.toFixed(2); // Zeigt den Gesamtpreis auf zwei Dezimalstellen an
    } else {
        totalPriceElement.innerText = '0.00'; // Setzt den Gesamtpreis auf Null, wenn Eingaben ungültig sind
    }

    updateSum(); // Aktualisiert die Zwischensumme und die Gesamtsumme
}

 */

function updateSum() {
    //Summe von Weinen
    let sumWines =0;

    const totalPrices = document.querySelectorAll('.total-price');
    console.log(sumWines)
    // Loop through each total price element
    totalPrices.forEach(td => {
        const value = parseFloat(td.innerHTML);
        if (!isNaN(value)) {
            sumWines += value;
        }
        console.log(sumWines)
    });
    //Addiert mit


    if (document.getElementById('DHL').checked === true) {
        sumWines += parseFloat(document.getElementById('DHLCost').innerText);
    } else if (document.getElementById('Spedition').checked === true) {
        sumWines +=parseFloat(document.getElementById('SpeditionCost').innerText);
    }


    console.log(sumWines)

    document.getElementById('Zwsichensumme').innerText=sumWines.toFixed(2);
    document.getElementById('MwSt').innerText=(sumWines*0.19).toFixed(2);
    document.getElementById('Summe').innerText=(sumWines*1.19).toFixed(2);

}

function checkAmountBottles() {
    let amountBottles = document.querySelectorAll('.quantity')
    let total = 0;
    amountBottles.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            total += value;
        }
    });
    console.log(total)
    if (total>12) {
        document.getElementById('Spedition').checked = true;
    }

}