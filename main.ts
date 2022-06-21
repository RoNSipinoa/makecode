input.onButtonPressed(Button.A, function () {
    spaceShip.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    spaceShip.change(LedSpriteProperty.X, 1)
})
let spaceShip: game.LedSprite = null
spaceShip = game.createSprite(2, 4)
