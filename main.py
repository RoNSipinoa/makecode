def on_button_pressed_a():
    spaceShip.set(LedSpriteProperty.X,
        (spaceShip.get(LedSpriteProperty.X) - 1) % 5)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    spaceShip.set(LedSpriteProperty.X,
        (spaceShip.get(LedSpriteProperty.X) + 1) % 5)
input.on_button_pressed(Button.B, on_button_pressed_b)

spaceShip: game.LedSprite = None
spaceShip = game.create_sprite(2, 4)
