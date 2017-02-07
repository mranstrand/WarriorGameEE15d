var w1, canv, ctx;

function init() {

    w1 = new Warrior("Hercules", document.getElementById("herculesPic"), 5, 200, 40, 300, 400);

    canv = document.getElementById("c");
    ctx = canv.getContext("2d");

    window.setInterval(update, 20);


}

function update() {
    ctx.clearRect(0, 0, 800, 600);
    w1.updatePosition();
    w1.render(ctx);
}

function keyDown(e) {
    console.log(e.keyCode);
    if (e.keyCode == 37) {
        //Vänster
        w1.vx = -2;
    }
    if (e.keyCode == 38) {
        //Upp
        w1.vy = -2;
    }
    if (e.keyCode == 39) {
        //Höger
        w1.vx = 2;
    }
    if (e.keyCode == 40) {
        //Ner
        w1.vy = 2;
    }

}

function keyUp(e) {
    console.log(e.keyCode);
    if (e.keyCode == 37) {
        //Vänster
        w1.vx = 0;
    }
    if (e.keyCode == 38) {
        //Upp
        w1.vy = 0;
    }
    if (e.keyCode == 39) {
        //Höger
        w1.vx = 0;
    }
    if (e.keyCode == 40) {
        //Ner
        w1.vy = 0;
    }

}