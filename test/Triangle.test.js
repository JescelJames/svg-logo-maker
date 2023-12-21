const Triangle = require ('../lib/Triangle');

describe ('Triangle class', () => { 
    describe ('create a Triangle class', () => {

        it('should create a Triangle class', () => {

            const triangle = new Triangle();
            
            expect(triangle).toBeInstanceOf(Triangle)
        })

    })

})