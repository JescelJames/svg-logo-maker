const inquirer = require('inquirer');
require('fs');


function askUser () {
    return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'radius',
                        message: 'Enter the radius of the circle: ',
                        default: 50
                    }
    ])
}

askUser();