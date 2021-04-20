namespace SpriteKind {
    export const hero = SpriteKind.create()
    export const money = SpriteKind.create()
    export const ground = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jeff.vy = -80
    pause(300)
    jeff.vy = 80
    pause(300)
    jeff.vy = 0
})
sprites.onOverlap(SpriteKind.hero, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.x += -10
})
sprites.onOverlap(SpriteKind.hero, SpriteKind.money, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeScoreBy(1)
    music.baDing.play()
})
let jeff: Sprite = null
scene.setBackgroundColor(9)
jeff = sprites.create(img`
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
    `, SpriteKind.hero)
jeff.setPosition(10, 70)
let badguy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
badguy.setPosition(100, 70)
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
game.onUpdate(function () {
    jeff.x += controller.dx()
})
