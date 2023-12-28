// shapeSvg = `<rect x="25" y="75" width="150" height="150" fill="${answers.color}" />`

class Square {
  
    constructor(color, x = 25, y = 75, width = 150, height = 150) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }
    
    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`
    }
    


};

module.exports = Square;