basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.SmallDiamond)
        game.addScore(1)
        basic.pause(500)
        basic.showNumber(game.score())
    } else {
        basic.clearScreen()
    }
    basic.pause(1000)
})
