// shapeSvg = `<polygon points="100,10 40,290 160,290" fill="${answers.color}" />`;

const { triggerAsyncId } = require('async_hooks');

const Triangle = require('../lib/Triangle');

describe('Triangle class color test', () => {
    it('should render the correct color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="100,10 40,290 160,290" fill="blue" />');
    })
})