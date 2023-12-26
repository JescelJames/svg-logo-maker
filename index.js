//DEPENDENCIES/REQUIRES
const inquirer = require('inquirer');
require('fs');

//FUNCTIONS

function generateSvgContent(answers) {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="${answers.radius}" fill="${answers.color}" />
    </svg>`;
  }
  
function init () {
    inquirer.prompt([
            {
                type: 'input',
                name: 'radius',
                message: 'Enter the radius of the circle: ',
                default: 50
            }
    ])

            .then( function(answers) {
                const svgContent = generateSvgContent(answers);

            })
}








//INITIALIZE

init();