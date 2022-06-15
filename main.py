range2: List[number] = []
x = 0
def randomOff():
    global x
    while len(range2) != 0:
        x = range2.remove_at(randint(0, len(range2)))
        led.unplot(x % 5, Math.idiv(x, 5))
        basic.pause(100)
def oneTimeOn():
    basic.show_leds("""
        # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
    """)
    basic.pause(1000)
def rangeOn():
    for i in range(5):
        for j in range(5):
            led.plot(j, i)
def randomOn():
    global x
    while len(range2) != 0:
        x = range2.remove_at(randint(0, len(range2)))
        led.plot(x % 5, Math.idiv(x, 5))
        basic.pause(100)
def rangeOff():
    for k in range(5):
        for l in range(5):
            led.unplot(l, k)
def rangeReset():
    global range2
    range2 = []
    for index4 in range(25):
        range2.append(index4)
def oneTimeOff():
    led.stop_animation()
    basic.pause(1000)