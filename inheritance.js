class Parent {
    constructor (){
        this.fatherName = "Enamul"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("labiba");
const baby2 = new Child("jawata");

console.log(baby.getFullName());
console.log(baby2.getFullName());
