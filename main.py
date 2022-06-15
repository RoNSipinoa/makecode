def on_button_pressed_a():
    if randint(1, 10) <= 5:
        for index in range(5):
            for index2 in range(5):
                led.plot(index, index2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)
