//DEPENDENCIES/REQUIRES
const inquirer = require('inquirer');
const fs = require('fs');

//FUNCTIONS

function generateSvgContent(answers) {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="${answers.radius}" fill="${answers.color}" />
    </svg>`;
}

function writeToFile(filename, data) {
        
    fs.writeFile(filename, data, "utf8", (error) =>  error ? console.error(error) : console.log('Success!'));
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

            
                writeToFile('output.svg', svgContent);   

            })

            
}



//INITIALIZE

init();