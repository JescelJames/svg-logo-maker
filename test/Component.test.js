const Component = require('../lib/Component.js');

describe('Component', () => {
  //
   describe('Create Component Class', () => {
    it('test created a Component class', () => {
      const component = new Component();
      expect(component).toBeInstanceOf(Component);
    });

   });


})