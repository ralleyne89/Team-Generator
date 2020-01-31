const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const Employee = require('./Develop/lib/Employee');

let manager;
// containers to hold all user inputs
let engineerContainer = [];
let internContainer = [];

// SIGNUP PROMPT
let signUpPrompt = inquirer
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
      type: 'input',
      name: 'office',
      message: 'Enter your office number',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter your ID #',
    },
  ])
  .then(response => {
    manager = response;
    console.log(manager);

    RolePrompt();
  });

// ENGINEER PROMPT
const EngineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is your Engineer's name`,
      },
      {
        type: 'input',
        name: 'email',
        message: `What is your Engineer's email`,
      },
      {
        type: 'input',
        name: 'id',
        message: `What is your Engineer's id`,
      },
      {
        type: 'input',
        name: 'github',
        message: `What is your Engineer's github`,
      },
    ])
    .then(response => {
      engineerContainer.push(response);
      console.log(engineerContainer);
      RolePrompt()
    })
    .catch(err => {
      if (err) throw err;
    });
};

// ROLE PROMPT
const RolePrompt = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Select your role',
        choices: ['Engineer', 'Intern', 'View All'],
      },
    ])
    .then(response => {
      let role = response.role;

      if (role === 'Engineer') {
        EngineerPrompt();
      } else if (role === 'Intern') {
        InternPrompt();
      } else {
        // write a remove function here
      }
    });
};

// INTERN PROMPT
const InternPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `What is your Intern's name`,
      },
      {
        type: 'input',
        name: 'email',
        message: `What is your Intern's email`,
      },
      {
        type: 'input',
        name: 'id',
        message: `What is your Intern's ID #`,
      },
      {
        type: 'input',
        name: 'school',
        message: `What is your Intern's school`,
      },
    ])
    .then(response => {
      internContainer.push(response);
      console.log(internContainer);
      RolePrompt()
    })
    .catch(err => {
      if (err) throw err;
    });
};

// .then(data => {
//   console.log(data);

//   for (let user in data) {
//     allUsers.push(data[user]);
//   }
//   console.log()
// });

// if (manager === 'Manager') {

// } else if (response.role === 'Engineer') {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'Enter your name',
//         id: 'id',
//       },
//       {
//         type: 'input',
//         name: 'email',
//         message: 'Enter your email',
//       },
//       {
//         type: 'input',
//         name: 'github',
//         message: 'Enter your github link',
//       },
//     ])
//     .then(response => {
//       engineerContainer.push(response);
//       console.log(engineerContainer);
//     })
//     .catch(err => {
//       if (err) throw err;
//     });
// } else {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'Enter your name',
//         id: 'id',
//       },
//       {
//         type: 'input',
//         name: 'email',
//         message: 'Enter your email',
//       },
//       {
//         type: 'input',
//         name: 'school',
//         message: 'Enter your school',
//       },
//     ])
//     .then(response => {
//       internContainer.push(response);
//       console.log(internContainer);
//     })
//     .catch(err => {
//       if (err) throw err;
//     });
// }
