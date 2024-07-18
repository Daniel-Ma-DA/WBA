class Kegelstumpf{
    constructor(R,r,h) {
        if (R < 0 || r < 0 || h < 0) {
            throw new Error("Die Radien und die Höhe müssen größer oder gleich 0 sein.");
        }
        this.R = R;
        this.r = r;
        this.h = h;
    }

    volumen() {
        document.getElementById('volumen').value = (Math.PI * this.h) / 3 * (Math.pow(this.R, 2) + this.r * this.R + Math.pow(this.r,2));
    }

    mantelflaeche() {
        let m = Math.sqrt(Math.pow(this.R-this.r,2)+Math.pow(this.h,2));
        document.getElementById('mantelflaeche').value= Math.PI*m*(this.R+this.r);

    }

    oberflaeche() {
        let m = Math.sqrt(Math.pow(this.R-this.r,2)+Math.pow(this.h,2));
        let M= Math.PI*m*(this.R+this.r);
        document.getElementById('oberflaeche').value=Math.PI*Math.pow(this.R,2)+Math.PI*Math.pow(this.r,2)+M;
    }

}
class Zylinder extends Kegelstumpf{

    constructor(R, h) {
        super(R,R,h);
    }

}
class Kreiskegel extends Kegelstumpf{

    constructor(R, h) {
        super(R,0,h);
    }

}

function createZylinder() {
    try {
    let radius = parseFloat(document.getElementById('RZ').value);
    let hoehe = parseFloat(document.getElementById('hZ').value);

    if (isNaN(radius) || isNaN(hoehe)) {
        alert('Bitte geben Sie gültige numerische Werte ein.');
        return;
    }

    let zylinder = new Zylinder(radius, hoehe);
    zylinder.volumen();
    zylinder.mantelflaeche();
    zylinder.oberflaeche();
    }catch (e) {
        alert(e.message)
    }
}

function createKegelstumpf() {
    try {
    let radiusBoden =parseFloat(document.getElementById('RG').value)
    let radiusStumpf =parseFloat(document.getElementById('rS').value)
    let hoehe =parseFloat(document.getElementById('h').value)

    if (isNaN(radiusBoden) || isNaN(radiusStumpf) || isNaN(hoehe)) {
        alert('Bitte geben Sie gültige numerische Werte ein.');
        return;
    }
    let Kegel =new Kegelstumpf(radiusBoden,radiusStumpf,hoehe);
    Kegel.volumen();
    Kegel.mantelflaeche();
    Kegel.oberflaeche();
    }catch (e) {
        alert(e.message)
    }
}
function createKreiskegel() {
    try {
        let radiusKegel = parseFloat(document.getElementById('RKK').value);
        let hoeheKegel = parseFloat(document.getElementById('hKK').value);

        if (isNaN(radiusKegel) || isNaN(hoeheKegel)) {
            alert('Bitte geben Sie gültige numerische Werte ein.');
            return;
        }

        let kreiskegel = new Kreiskegel(radiusKegel, hoeheKegel);
        kreiskegel.volumen();
        kreiskegel.mantelflaeche();
        kreiskegel.oberflaeche();
    }catch (e) {
        alert(e.message)
    }
}