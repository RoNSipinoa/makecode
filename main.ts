input.onButtonPressed(Button.A, function () {
    radio.sendString(rsp_mine)
})
// rsp
// 
// 0 = rock
// 
// 1 = scissor
// 
// 2 = paper
input.onGesture(Gesture.Shake, function () {
    rsp_mine = ["R", "S", "P"][randint(0, 2)]
    basic.showString(rsp_mine)
})
radio.onReceivedString(function (receivedString) {
    radio.sendString(rsp_mine)
    if (rsp_mine == "R") {
        if (receivedString == "R") {
            basic.showString("D")
        } else if (receivedString == "S") {
            basic.showString("W")
        } else {
            basic.showString("L")
        }
    } else if (rsp_mine == "S") {
        if (receivedString == "R") {
            basic.showString("L")
        } else if (receivedString == "S") {
            basic.showString("D")
        } else {
            basic.showString("W")
        }
    } else if (receivedString == "R") {
        basic.showString("W")
    } else if (receivedString == "S") {
        basic.showString("L")
    } else {
        basic.showString("D")
    }
})
let rsp_mine = ""
radio.setGroup(7)
