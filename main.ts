input.onButtonPressed(Button.A, function () {
    if (randint(1, 10) <= 5) {
        for (let index = 0; index <= 4; index++) {
            for (let index2 = 0; index2 <= 4; index2++) {
                led.plot(index, index2)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.unplot(index, index2)
        }
    }
})
