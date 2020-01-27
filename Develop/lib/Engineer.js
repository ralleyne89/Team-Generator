const EngineerTest = require('../test/Engineer.test')
const EmployeeTest = require('../test/Employee.test')

class Engineer extends EmployeeTest {
    constructor(github){
        this.github = github;
    }

    getGithub(){

    }

    getRole(){
        return Engineer
    }
}

