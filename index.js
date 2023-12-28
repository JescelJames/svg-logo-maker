//DEPENDENCIES/REQUIRES
const inquirer = require('inquirer');
const fs = require('fs');

//FUNCTIONS

function generateSvgContent(answers) {
    const baseSvg = `<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">`
    
    let shapeSvg = '';
    switch(answers.shape) {
        

            case 'circle':
                shapeSvg = `<circle cx="100" cy="150" r="80" fill="${answers.color}" />`
                break;
            
            case 'square':
                shapeSvg = `<rect x="25" y="50" width="150" height="150" fill="${answers.color}" />`

            case 'triangle':
                shapeSvg = `<polygon points="100,10 40,290 160,290" fill="${answers.color}" />`;

    }
    
    const textSvg = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${answers.textcolor}">${answers.text}</text>`
        
    return `${baseSvg}${shapeSvg}${textSvg}</svg>`;

}    
    
        
         
        
        
        
    
        
       
   


function writeToFile(filename, data) {
        
    fs.writeFile(filename, data, "utf8", (error) =>  error ? console.error(error) : console.log('Success!'));
}


  
function init() {
    inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter the text to display (3 characters max):',
                validate: input => input.length <= 3 || 'Text must be up to 3 characters only',
                default: ''
            },
            {
                type: 'input',
                name: 'textcolor',
                message: 'Enter the color of the text: ',
               
            },
            {
                type: 'list',
                message: 'Select the shape of the logo: ',
                name: 'shape',
                choices: ['circle', 'square', 'triangle' ],
            },

            {
                type: 'input',
                name: 'color',
                message: 'Enter the fill color of the logo: ',
                default: 'red'
            }
    ])

            .then( function(answers) {
                const svgContent = generateSvgContent(answers);

            
                writeToFile('output.svg', svgContent);   

                console.log(answers);
            })

            
}



//INITIALIZE
init();