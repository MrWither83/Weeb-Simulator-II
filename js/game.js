player = {
    owo: new Decimal(0),
    lastowoCycle: Date.now(),
    owoCycleTime: new Decimal(2000),
    owoProgress: 0,

    // Bulk owo production reward
    rewardThreshold: new Decimal(10),
    rewardMultiplier: new Decimal(10),
    rewardCount: new Decimal(0),
    rewardProgress: new Decimal(0)
}

function getowoGain() {
    r = new Decimal(1);
    return r;
}

function getRewardThresholdIncrease() {
    r = new Decimal(10);
    return r;
}

function gameLoop() {
    display();
    update();
}

setInterval(gameLoop, 33)