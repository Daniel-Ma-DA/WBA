function calculateVectorLength() {
    let iN1,iN2,iN3,solution;
    iN1 = document.getElementById('iN1').value;
    iN2 = document.getElementById('iN2').value;
    iN3 = document.getElementById('iN3').value;

    solution = Math.sqrt(Math.pow(Number(iN1), 2)+Math.pow(Number(iN2), 2)+Math.pow(Number(iN3),2))
    document.getElementById('solution').value= solution;
}


let input3 = document.getElementById('button');

input3.addEventListener('click',calculateVectorLength,false)