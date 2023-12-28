// shapeSvg = `<rect x="25" y="75" width="150" height="150" fill="${answers.color}" />`

const Square = require('../lib/Square')


describe('Square class color test', () => {
    it('should render the correct color', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="25" y="75" width="150" height="150" fill="blue" />');
    })
})