input.onGesture(Gesture.TiltLeft, function () {
    snake.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoDown, function () {
    snake.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    snake.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    snake.change(LedSpriteProperty.X, 1)
})
let snake: game.LedSprite = null
snake = game.createSprite(2, 2)
let snack = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (snake.isTouching(snack)) {
        game.addScore(1)
        snack.delete()
        basic.pause(50)
        snack = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (game.score() == 15) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        game.gameOver()
    }
})
