const { default: test } = require('node:test');
const Circle = require('../lib/Circle');

describe('Create a Circle class', () => {
    it('should create a Circle class', () => {
        
        const circle = new Circle();

        expect (circle).toBeInstanceOf(Circle)
    })
})

