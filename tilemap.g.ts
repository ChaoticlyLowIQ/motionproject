// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3200080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
..................................................
..................................................
..................................................
..............................2222222222222.......
...........................222............222.....
222222222222222222222222222..................2....
22222222222222222222222222222222222222222222222222
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`32000a000000000002000000000200000000030000000002000000000002000000000002000000020002000002000000020000000000000000000200000000020000000000000000000200000000000300000000000200000002000200000200000002000000000000000000030000000002000000000000000000020000000000000000000000020000000200020000020000000200000000000000000000000000000200000000010000000003000000000005000000000002000000020002000002000000030000000000000000000000000000030000000002000000000000000000000100000000000200000003000300000200000000000000040000000000010000000000000000000200000000000000000000020000000000020000000000000000030000000000000001000000000002000000000000000000020000000001000000000002000000000003000000000000000000000000010000000200000000000200000000010000000002000000000200000000000200000000000000000001000100000000000002000000020000000000020000000002000000000200000000020000000000020000000000000000000200020000010000000200000002000000000002000000000200000000020000000002000000000002000000000001000000020002000002000000020000000200`, img`
....2....2....2....2.....2.....2...2.2..2...2.....
....2....2.........2.....2.....2...2.2..2...2.....
....2....2.........2...........2...2.2..2...2.....
.........2....2....2...........2...2.2..2...2.....
.........2....2..........2.....2...2.2..2.........
....2.........2..........2.....2........2.......2.
....2.........2....2.....2.....2............2...2.
....2....2....2....2.....2.........2.2......2...2.
....2....2....2....2.....2.........2.2..2...2...2.
....2....2....2....2.....2.....2...2.2..2...2...2.
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile2,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
