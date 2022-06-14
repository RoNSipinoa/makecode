def on_button_pressed_a():
    global count
    count += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global count
    count += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def toBin(num: number):
    for index in range(25):
        if num % 2 ** index == 0:
            led.plot(index % 5, int(index / 5))
        else:
            led.unplot(index % 5, index / 5)
count = 0

def on_forever():
    basic.show_number(count, 500)
    toBin(count)
    basic.pause(2000)
basic.forever(on_forever)