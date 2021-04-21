namespace SpriteKind {
    export const hero = SpriteKind.create()
    export const money = SpriteKind.create()
    export const ground = SpriteKind.create()
    export const bird = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bird.vy = -100
})
scene.onOverlapTile(SpriteKind.bird, assets.tile`myTile0`, function (sprite, location) {
    game.over(true)
})
scene.onHitWall(SpriteKind.bird, function (sprite, location) {
    info.changeLifeBy(-1)
    bird.setPosition(70, 50)
})
let bird: Sprite = null
game.splash("press space to jump")
scene.setBackgroundColor(9)
bird = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.bird)
bird.ay = 300
bird.vx = 35
info.setLife(3)
scene.cameraFollowSprite(bird)
tiles.setTilemap(tilemap`level2`)
game.onUpdate(function () {
    if (bird.bottom > 159 || bird.top < 1) {
        game.over(false)
    }
    if (bird.vx < 35) {
        bird.vx = 35
    }
})
