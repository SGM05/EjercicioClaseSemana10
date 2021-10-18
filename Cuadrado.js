class Cuadrado {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.altura = 50;
        this.ancho = 50;
    }

    show() {
        fill (0, 0, 255);
        rectMode(CENTER);
        rect (this.x, this.y, this.altura, this.ancho);
    }

    click(mx, my){
        if(mx >= this.x - this.ancho/2 && mx <= this.x + this.ancho/2 && my >= this.y - this.altura/2 && my <= this.y + this.altura/2){
            return true;
        }
        return false;
    }
}
