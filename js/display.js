function displayowoBar() {
    document.getElementById("owoProgress").style.width = player.owoProgress * 100 + "%"
}

function displayowoRewardBar() {
    document.getElementById("owoRewardProgress").style.width = player.rewardProgress
        .div(player.rewardThreshold).toNumber() * 100 + "%"
}

function display() {
    document.getElementById("owo").innerHTML = player.owo.toString();
    displayowoBar();
    displayowoRewardBar();
}