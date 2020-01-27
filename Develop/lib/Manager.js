const ManagerTest = require('../test/Manager.test');
const EmployeeTest = require('../test/Employee.test');

class Manager extends EmployeeTest {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }

  getRole(Employee) {
    return Manager
  }
}
