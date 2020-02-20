function updateowoProgress() {
    let now = Date.now();
    player.owoProgress = Decimal.div((now - player.lastowoCycle), player.owoCycleTime).toNumber()
    if (player.owoProgress > 1) {
        player.lastowoCycle = now;
        player.owoProgress = player.owoProgress - Math.floor(player.owoProgress);
        player.owo = player.owo.add(getowoGain());
        player.rewardProgress = player.rewardProgress.add(1);
    }
}

function updateRewardProgress() {
    if (player.rewardProgress.gte(player.rewardThreshold)) {
        player.rewardProgress = new Decimal(0);
        player.rewardThreshold = player.rewardThreshold.add(getRewardThresholdIncrease());
        player.owo = player.owo.add(getowoGain().times(player.rewardMultiplier));
    }
}

function update() {
    updateowoProgress();
    updateRewardProgress();
}