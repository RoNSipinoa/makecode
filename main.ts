function randomOff () {
    while (range2.length != 0) {
        x = range2.removeAt(randint(0, range2.length))
        led.unplot(x % 5, Math.idiv(x, 5))
        basic.pause(100)
    }
}
function oneTimeOn () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
}
input.onGesture(Gesture.Shake, function () {
    rangeReset()
    // 0: oneTime
    // 1: random
    // 2: range
    act = randint(0, 2)
    if (state == 0) {
        if (act == 0) {
            oneTimeOn()
        } else if (act == 1) {
            randomOn()
        } else {
            rangeOn()
        }
    } else {
        if (act == 0) {
            oneTimeOff()
        } else if (act == 1) {
            randomOff()
        } else {
            rangeOff()
        }
    }
    // 0:off
    // 1:on
    state = 1 - state
})
function rangeOn () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.plot(j, i)
            basic.pause(100)
        }
    }
}
function randomOn () {
    while (range2.length != 0) {
        x = range2.removeAt(randint(0, range2.length))
        led.plot(x % 5, Math.idiv(x, 5))
        basic.pause(100)
    }
}
function rangeOff () {
    for (let k = 0; k <= 4; k++) {
        for (let l = 0; l <= 4; l++) {
            led.unplot(l, k)
            basic.pause(100)
        }
    }
}
function rangeReset () {
    range2 = []
    for (let index4 = 0; index4 <= 24; index4++) {
        range2.push(index4)
    }
}
function oneTimeOff () {
    led.stopAnimation()
    basic.pause(1000)
}
let act = 0
let x = 0
let range2: number[] = []
let state = 0
state = 0
