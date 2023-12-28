// shapeSvg = `<polygon points="100,10 40,290 160,290" fill="${answers.color}" />`;

class Triangle {
  
    constructor(color, points= 100,10 40,290 160,290) {
        this.color = color;
        this.points = points;


    }
    
    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="${points}" fill="${this.color}" />`
    }
    


};

module.exports = Triangle;