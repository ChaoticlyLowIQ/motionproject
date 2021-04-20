namespace SpriteKind {
    export const hero = SpriteKind.create()
    export const money = SpriteKind.create()
    export const ground = SpriteKind.create()
    export const bird = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bird.vy = -100
    bird.vx = 50
})
sprites.onOverlap(SpriteKind.bird, SpriteKind.money, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeScoreBy(1)
    music.baDing.play()
})
let bird: Sprite = null
scene.setBackgroundColor(9)
bird = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.bird)
bird.setPosition(10, 70)
bird.ay = 300
info.setLife(3)
let coin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 4 5 5 5 . . . . . 
    . . . . 5 5 5 4 5 5 5 . . . . . 
    . . . . 5 5 5 4 5 5 5 . . . . . 
    . . . . 5 5 5 4 5 5 5 . . . . . 
    . . . . 5 5 5 4 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.money)
info.setScore(0)
scene.cameraFollowSprite(bird)
tiles.setTilemap(tilemap`level2`)
game.onUpdate(function () {
    if (bird.bottom > 159 || bird.top < 1) {
        game.over(false)
    }
})
