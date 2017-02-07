var w1, canv, ctx;

function init() {

    w1 = new Warrior("Hercules", document.getElementById("herculesPic"), 5, 200, 40, 300, 400);

    canv = document.getElementById("c");
    ctx = canv.getContext("2d");

    //Kalla på render
    w1.render(ctx);
}