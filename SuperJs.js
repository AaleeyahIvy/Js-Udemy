class Person {  
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   
    describe() {
        return `${this.name}, ${this.age} years old`;
    }
}
class Worker extends Person {
    constructor(name, age, position, salary) {
        super(name, age);
        this.position = position;
        this.salary = salary;
    }
    describe() {
        return `${super.describe()}, ${this.position}, $${this.salary}`;
    }
}

class StudentWorker extends Worker {
    constructor(name, age, position, salary, grade) {
        super(name, age, position, salary);
        this.grade = grade;
    }
    describe() {
        return `${super.describe()}, Grade: ${this.grade}`;
    }
}

const aaleeyah = new Worker('Aaleeyah', 21, 'Software Developer', 60000);
console.log(aaleeyah.describe());
const austin = new Worker('Austin', 25, 'Network Engineer', 60000);
console.log(austin.describe());

const Artmeis = new StudentWorker('Artmeis', 17, 'Intern', 25000, 'A');
console.log(Artmeis.describe());
