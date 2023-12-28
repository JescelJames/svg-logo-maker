
// shapeSvg = `<circle cx="100" cy="150" r="80" fill="${answers.color}" />`
class Circle {
  
    constructor(color, cx = 100, cy = 150, radius = 80) {
        this.color = color;
        this.cx = cx;
        this.cy = cy;
        this.radius = radius

    }
    
    setColor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.color}" />`
    }
    


}

module.exports = Circle;