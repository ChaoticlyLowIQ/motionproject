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
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    .................fff.fff........
    ................f111f111f.......
    ..........ffff..f11ff11ff.......
    .........f1111f.f11ff11ff.......
    .........f11111ff111f111f.......
    .........f11111f5fff5fff........
    .........f111111f555f444fff.....
    ..........f11111f55f4444444f....
    ...........fffff555f4ffffff.....
    ...........f5555555f444444f.....
    ...........f55555555ffffff......
    ............f5555555555f........
    .............ffffffffff.........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.bird)
bird.ay = 300
bird.vx = 75
info.setLife(3)
scene.cameraFollowSprite(bird)
tiles.setTilemap(tilemap`level2`)
game.onUpdate(function () {
    if (bird.bottom > 159 || bird.top < 1) {
        game.over(false)
    }
    if (bird.vx < 75) {
        bird.vx = 75
    }
})
