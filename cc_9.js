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
