const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./Develop/test/Employee.test')

// containers to hold all user inputs
let emailContainer = [];
let idContainer = [];
let allUsers = [];
let users = {};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email',
    },
    {
      type: 'list',
      name: 'department',
      message: 'Select an option',
      choices: ['Manager', 'Employee', 'Engineer', 'Intern'],
    },
    // {
    //   when: function(response) {
    //     console.log(response);
    //     return response.department;
    //   }
    // }
  ])
  .then(response => {
    console.log(response);

    
    if (response.department === 'Manager') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'manage',
          message: 'Which department do you manage',
        },
        {
          type: 'input',
          name: 'size',
          message: 'How any team members do you manage?',
        }
      ]).catch(err => {
        if (err) throw err;
      });
    } else if (response.department === 'Employee'){
      inquirer.prompt({
        type: "input",
        name: 'role',
        message: 'Enter your role'
      },{
        type: "input",
        name: 'github',
        message: 'Enter your github link'
      })
    }
  });

// .then(data => {
//   console.log(data);

//   for (let user in data) {
//     allUsers.push(data[user]);
//   }
//   console.log()
// });
