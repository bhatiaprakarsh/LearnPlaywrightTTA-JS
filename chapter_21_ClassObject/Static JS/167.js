class Student {
    static clgName = "ABC College";

    constructor(name) {
        this.name = name;
    }
}

let prak = new Student("Prak");
console.log(prak.name);

console.log(Student.clgName); // Accessing static property using class name