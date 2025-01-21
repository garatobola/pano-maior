controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        gegui,
        assets.animation`nasatuipa`,
        200,
        true
        )
    } else if (controller.left.isPressed()) {
        animation.runImageAnimation(
        gegui,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 9 9 9 9 c c . c . . . . 
            . c 9 9 9 9 9 9 9 9 c . . c . . 
            c 9 9 9 9 9 1 f 9 9 9 c c . c c 
            c 9 9 9 9 9 f f 9 9 9 9 c c c . 
            c 9 9 9 9 9 9 9 9 9 9 9 c c . . 
            c c b b 1 b 9 9 9 9 9 9 d c . c 
            c 9 3 3 3 9 9 9 9 9 d d d c c c 
            . b 9 9 9 9 9 9 9 9 d d d c . . 
            . . c b b c 9 9 b d d d d c c . 
            . c b b c 9 9 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 9 9 b d d d c . 
            . . c c c c c b 9 9 b c c c . . 
            . . c b b b c d 9 9 b c . . . . 
            `,img`
            . . . . c c c c c . . c . . . . 
            . . c c 9 9 9 9 9 c c . . c . . 
            . c 9 9 9 9 1 f 9 9 c . c . . . 
            c 9 9 9 9 9 f f 9 9 9 c . c . . 
            c 9 9 9 9 9 9 9 9 9 9 9 c . c . 
            c c b b 1 b 9 9 9 9 9 9 c c . . 
            c 9 3 3 3 9 9 9 9 9 9 9 d c c c 
            c 9 3 3 3 9 9 9 9 9 d d d c . . 
            . c 9 9 9 9 b 9 9 9 d d d c . . 
            . . c b b c 9 9 b d d d d c . . 
            . c b b c 9 9 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c c b 9 9 b d d d c . 
            . . . . . c d 9 9 b b c c c . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c c . . . . . . 
            . . c c 9 9 9 9 9 c . c . . . . 
            . c 9 9 9 9 1 f 9 9 c . c . . . 
            c 9 9 9 9 9 f f 9 9 9 c . . c . 
            c 9 9 9 9 9 9 9 9 9 9 9 c c . . 
            c c b b 1 b 9 9 9 9 9 9 c c . c 
            c 9 3 3 3 9 9 9 9 9 9 9 d c c . 
            c 9 9 9 9 9 9 9 9 9 d d d c . . 
            . c 9 9 9 9 b 9 9 9 d d d c . . 
            . . c b b c 9 9 b d d d d c . . 
            . c b b c 9 9 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c b 9 9 b d d d c c . 
            . . . . c d 9 9 b b c c c . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c c . c . . . . 
            . . c c 9 9 9 9 9 c c . c . . c 
            . c 9 9 9 9 1 f 9 9 c . c . c . 
            c 9 9 9 9 9 f f 9 9 9 c . c . . 
            c 9 9 9 9 9 9 9 9 9 9 9 c . . c 
            c c b b 1 b 9 9 9 9 9 9 c . c . 
            c 9 3 3 3 9 9 9 9 9 9 9 d c . . 
            c 9 9 9 9 9 9 9 9 9 d d d c . . 
            . c 9 9 9 9 b 9 9 9 d d d c . . 
            . . c b b c 9 9 b d d d d c . . 
            . c b b c 9 9 b b d d d d c c . 
            . c c c c c b b d d d d d d c c 
            . . . c c 9 9 b 9 9 d d d d d c 
            . . . . c b 9 9 b b c c c c c c 
            . . . . c c c c c c . . . . . . 
            . . . . . c b b b c . . . . . . 
            `,img`
            . . . . . . . . c . . c . . . . 
            . . . . c c c c . . c . . . . . 
            . . c c 9 9 9 9 c c c . c c . . 
            . c 9 9 9 9 9 9 9 9 c . c . . . 
            c 9 9 9 9 9 1 f 9 9 9 c . . c c 
            c 9 9 9 9 9 f f 9 9 9 9 c . c . 
            c c b b 1 b 9 9 9 9 9 9 c c c . 
            c c 3 3 b b 9 9 9 9 9 9 d c . . 
            c 9 3 3 3 9 9 9 9 9 d d d c . . 
            . b 9 9 9 9 9 9 9 9 d d d c . . 
            . . c b b c 9 9 b d d d d c . . 
            . c b b c 9 9 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 9 9 b d d d c c 
            . . . c b c c b 9 9 b c c c . . 
            . . . c c c d 9 9 b c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c . . . . . . 
            . . . . 9 9 9 9 . . c . c . . . 
            . . 9 9 9 9 9 9 9 9 . c . . . . 
            . 9 9 9 9 9 1 f 9 9 9 . . c c . 
            . 9 9 9 9 9 f f 9 9 9 9 . c . . 
            . 9 9 9 9 9 9 9 9 9 9 9 c . . . 
            . . b b 1 b 9 9 9 9 9 9 d . . . 
            . 9 3 3 3 9 9 9 9 9 d d d . . . 
            . b 9 9 9 9 9 9 9 9 d d d . . . 
            . . c b b c 9 9 b d d d d . . . 
            . c b b c 9 9 b b d d d d . . . 
            . c c c c c c d d d d d d d d . 
            . . . c c c c d 9 9 b d d c c . 
            . . c b b c c c 9 9 b c c . . . 
            . . c c c c c d 9 9 c . . . . . 
            `],
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(gegui)
    maaaaaaaaaaa.setVelocity(100, 0)
})
let maaaaaaaaaaa: Sprite = null
let gegui: Sprite = null
scene.setBackgroundImage(assets.image`myImage1`)
gegui = sprites.create(assets.image`myImage2`, SpriteKind.Player)
maaaaaaaaaaa = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
maaaaaaaaaaa.scale = 4
maaaaaaaaaaa.setPosition(117, 100)
gegui.scale = 2
gegui.setPosition(16, 103)
controller.moveSprite(gegui, 100, 90)
