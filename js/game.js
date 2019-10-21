player = {
    owo: new Decimal(0),
}

function clickowo() {
    player.owo = player.owo.add(1);
}

function update() {

}

function display() {
    document.getElementById("owo").innerHTML = player.owo.toString()
}

function gameLoop() {
    display();
    update();
}

setInterval(gameLoop, 33)