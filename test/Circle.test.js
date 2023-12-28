const { default: test } = require('node:test');
const Circle = require('../lib/Circle');

describe('Create a Circle class', () => {
    it('should create a Circle class', () => {
        
        const circle = new Circle();

        expect (circle).toBeInstanceOf(Circle)
    })
})

describe('Circle class test shape', () => {
    it('should render the correct color', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="100" cy="150" r="80" fill="blue" />');
    })
})