//Task 1: Creating an Employee Class
console.log("Task 1: Creating an Employee Class")
class Employee {                                //Declared a new class "Employee"
    constructor(name, id, department, salary) { //initialized the class properties
    this.name = name;
    this.id = id;
    this.department = department;
    this.salary = salary;
    }

    getDetails() {              //Just a function that console.logs all the properties of a class object
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, 
        Salary: ${this.salary}`;
    }

    calculateAnnualSalary(){        //Created a function that calculates annual salary.
        return this.salary * 12;
    }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000)     //created employee class object

console.log(emp1.getDetails());         //console logged
console.log(emp1.calculateAnnualSalary());


//Task 2: Creating a Manager Class
console.log("Task 2: Creating a Manager Class")

class Manager extends Employee {    //Created a new class that inherits the Employee class structure
    constructor (name, id, department, salary, teamSize) { //initialized the properties
        super(name, id, department, salary);        //call the parents class constructor using super
        this.teamSize = teamSize;
    }

    getDetails() {          //Overrided the getDetails to include team size
        return `Manager: ${this.name}, ID: ${this.ID}, Department: ${this.department}, Salary:
        $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus(){       //Method that calculated bonus
        return this.calculateAnnualSalary() * 0.1;
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); //Created manager class object

console.log(mgr1.getDetails()); //console logged
console.log(mgr1.calculateBonus());
