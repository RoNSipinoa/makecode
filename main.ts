radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < correct) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        radio.sendString("up")
    } else if (receivedNumber > correct) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        radio.sendString("down")
    } else {
        basic.showIcon(IconNames.Yes)
        radio.sendString("ok")
    }
})
let correct = 0
radio.setGroup(19)
correct = randint(1, 10)
