const InternTest = require('../test/Intern.test');
const EmployeeTest = require('../test/Employee.test');

class Intern extends EmployeeTest {
    constructor(school) {
        this.school = school;
    }

    getSchool(){

    }
    getRole() {
        return Intern
    }
}