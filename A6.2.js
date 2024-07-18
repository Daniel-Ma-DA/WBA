function Animal() {
    this.averageAge =0;
    this.age = 0;
}

Animal.prototype.getAverageAge = function ()
    { return this.averageAge;}
Animal.prototype.getAge = function ()
    {return this.age;}
Animal.prototype.setAge = function (newAge) {
    this.age=newAge;
};

function Elephant() {
    Animal.call(this);
    this.averageAge=70;
}
// Vererbung der Methoden von Animal
Elephant.prototype = Object.create(Animal.prototype);
Elephant.prototype.constructor = Elephant;

// Testen der Implementierung
const elephant = new Elephant();
console.log("Durchschnittliches Alter des Elefanten: " + elephant.getAverageAge()); // 70
console.log("Aktuelles Alter des Elefanten: " + elephant.getAge()); // 0

elephant.setAge(15);
console.log("Neues Alter des Elefanten: " + elephant.getAge()); // 15

