def on_button_pressed_a():
    radio.send_string(rsp_mine)
input.on_button_pressed(Button.A, on_button_pressed_a)

# rsp
# 
# 0 = rock
# 
# 1 = scissor
# 
# 2 = paper

def on_gesture_shake():
    global rsp_mine
    rsp_mine = ["R", "S", "P"][randint(0, 2)]
    basic.show_string(rsp_mine)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_received_string(receivedString):
    radio.send_string(rsp_mine)
    if rsp_mine == "R":
        if receivedString == "R":
            basic.show_string("D")
        elif receivedString == "S":
            basic.show_string("W")
        else:
            basic.show_string("L")
    elif rsp_mine == "S":
        if receivedString == "R":
            basic.show_string("L")
        elif receivedString == "S":
            basic.show_string("D")
        else:
            basic.show_string("W")
    elif receivedString == "R":
        basic.show_string("W")
    elif receivedString == "S":
        basic.show_string("L")
    else:
        basic.show_string("D")
radio.on_received_string(on_received_string)

rsp_mine = ""
rsp = 0
radio.set_group(7)