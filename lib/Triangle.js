// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

class Triangle {
    constructor() {
        this.color = 'black';
        this.points = '150, 18 244, 182 56, 182';
    }
    
    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="${this.points}" fill="${this.color}" />`;
    }

}





module.exports = {
    Triangle
};