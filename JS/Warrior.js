//Klassen Warrior
function Warrior(name, img, speed, hp, strength, startX, startY) {

    //Egenskaper
    this.name = name;
    this.img = img;
    this.speed = speed;
    this.hp = hp;
    this.strength = strength;
    this.x = startX;
    this.y = startY;
    this.vx = 3;
    this.vy = 3;


    //Metod som målar ut krigaren
    this.render = function (ctx) {
        ctx.drawImage(this.img, this.x, this.y, 100, 100);

    }

    this.updatePosition = function () {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
}