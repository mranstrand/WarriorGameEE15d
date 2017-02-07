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