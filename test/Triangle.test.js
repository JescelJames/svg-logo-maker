const Triangle = require ('../lib/Triangle');

describe ('Triangle class', () => { 
    describe ('create a Triangle class', () => {

        it('should create a Triangle class', () => {

            const triangle = new Triangle();
            
            expect(triangle).toBeInstanceOf(Triangle)
        })

    })
})

 
describe ('Triangle Class', () => { 
    describe ('create a Triangle properties', () => {

        it('should render a blue triangle as SVG', () => {
            
            const triangle = new Triangle();
                  triangle.setColor('blue');

            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        })

    })
})


