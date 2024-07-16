document.getElementById('i1').value = '42';
document.getElementById('i1').style.color = '#ff0000';

function textChanged() {
    let s1, s2, s3;
    s1 = document.getElementById('s1').value;
    s2 = document.getElementById('s2').value;
    if (s2.search(/^\d+$/) == -1) {
        window.alert('Bitte nur Zahlen angeben!');
    }
    s3 = Number(s1) + Number(s2);
    document.getElementById('s3').value = s3;
}

let input1 = document.getElementById('s1');
let input2 = document.getElementById('s2');

input1.addEventListener('change', textChanged, false);
input2.addEventListener('change', textChanged, false);

let tab1 = document.getElementById('tab1');
let row2 = tab1.insertRow(1);
let cell1 = row2.insertCell(0);
let text1 = document.createTextNode('C1');
cell1.appendChild(text1);
