//DEPENDENCIES/REQUIRES
const inquirer = require('inquirer');
const fs = require('fs');

//FUNCTIONS

function generateSvgContent(answers) {
    const baseSvg = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">`
    
    let shapeSvg = '';
    switch(answers.shape) {
        

            case 'circle':
                shapeSvg = `<circle cx="100" cy="100" r="${answers.radius}" fill="${answers.color}" />`
                break;

    }
    
    const textSvg = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="${answers.textcolor}">${answers.text}</text>`
        
    return `${baseSvg}${shapeSvg}</svg>`;

}    
    
        
         
        
        
        
    
        
       
   


function writeToFile(filename, data) {
        
    fs.writeFile(filename, data, "utf8", (error) =>  error ? console.error(error) : console.log('Success!'));
}


  
function init() {
    inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up the text to display up to 3 characters: ',
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
                message: 'Select the shape of your logo: ',
                name: 'shape',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'radius',
                message: 'Enter the radius of the circle: ',
                default: 50
            },
            {
                type: 'input',
                name: 'color',
                message: 'Enter the fill color of the circle: ',
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