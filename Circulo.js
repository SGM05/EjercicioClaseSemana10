class Circulo {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.diametro = 50;
    }

    show() {
        fill(255, 255, 0);
        ellipse (this.x, this.y, this.diametro, this.diametro)
    }

    click(mx, my){
        if(dist(mx, my, this.x, this.y) < this.diametro/2){
            return true;
        }
        return false;
    }
}
