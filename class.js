class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName
        this.school = "cbhs"
    }
}
const student1 = new Student(24, "jim");
const student2 = new Student(34, "noman");
console.log(student1, student2);
