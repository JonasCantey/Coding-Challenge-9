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
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
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
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus(){       //Method that calculated bonus
        return super.calculateAnnualSalary() * 0.1;
    }

    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.calculateBonus();
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); //Created manager class object

console.log(mgr1.getDetails()); //console logged
console.log(mgr1.calculateBonus());


//Task 3: Creating a Company Class
console.log("Task 3: Creating a Company Class")

class Company {
    constructor (name) { //constructor that initializes company name and employee array
        this.name = name;
        this.employees = []; //this is the employees array I created
    }

    addEmployee(employee) {     //method to add an employee to the employees array
        this.employees.push(employee); 
    }

    listEmployees(){    //method that says for each employee in array, console log getDetails.
        console.log(`Employees of ${this.name}:`);
        this.employees.forEach(employee => {
            console.log(employee.getDetails());
        });
    }
        //Task 4: Method to calculate total payroll
        calculateTotalPayroll(){
            let totalPayroll = 0
            this.employees.forEach(employee => {
                totalPayroll += employee.calculateAnnualSalary();
            });
            return totalPayroll;
        }

        //Task 5
        promoteToManager (employee, teamSize) { //created method promote to manager
            const index = this.employees.indexOf(employee); //basically looks through the array until employee is found

            if (index !== -1) {     //states that if employee is found then do the following:
                const newManager = new Manager( //add a new manager using all employees old properties and add team size
                    employee.name,
                    employee.id,
                    employee.department,
                    employee.salary,
                    teamSize
                );
                this.employees[index] = newManager; //registers employee as manager in array
                console.log(`${employee.name} has been promoted to Manager.`);
            } else {
                console.log("Employee not found."); //if the employee isnt found console log employee not found
            }
        }
}

const company = new Company("TechCorp");    //named the company
company.addEmployee(emp1);      //added the employee to employees array
company.addEmployee(mgr1);      //added the manager to the employees array

company.listEmployees();        //called the list employees method


//Task 4: Implementing a Payroll System
console.log("Task 4: Implementing a Payroll System")

console.log(`Total Payroll: $${company.calculateTotalPayroll()}`); //Changes are above, here is console log for changes

//Task 5: Implementing Promotions
console.log("Task 5: Implementing Promotions")

company.promoteToManager(emp1, 3); //Called promote to manager method and input values

console.log("After Promotion:");    //console logged all employees in company class.
company.listEmployees();


