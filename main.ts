function drink_iced_tea () {
    game.showLongText("You drink iced tea, and suddenly a dinosaur appears ! The dinosaur gives you powers!", DialogLayout.Bottom)
    mySprite = sprites.create(img`
        ........................bbbbbbbbbbbbbbbbbbb..................................
        ......................bbb5555555555555555bbbbb...............................
        .....................bb5555555555555555555555bbb......bbc....................
        ....................bb5555555555555555555555555bbb..cbbcc....................
        ...................bb5555555555555555555555555555bccbbccc....................
        ...................b5555555555555555555555555555555ccccc.....................
        ..................bb555b555555555bd55555555555555555cccc.....................
        ..................b5555b555555555bb555555555555555555ccc.....................
        ..................c555555555555555555555555bccc5555555cc.....ccc.............
        ..................c55555bccccc5555555555555ccc1c5555555ccccccbbc.............
        ..................c5555bccccccccb5555555555dcbbc55555555cccbbbcc.............
        ..................c555bddcccccccccb1555555555555555555555ccbccc..............
        ..................c555bcdcccccccccc11b55555555555555555555ccccc..............
        ...................c55ccbcccccccccc11cc5555555555555555555dcccc..............
        ...................c55ccccccccccccc1bccb1555555bb5555555555dcc...............
        ....................c5cccccccccccccccccb1155555b55555555555dcc...............
        ....................c55ccccccccccccccccc1bccccb555555555555ddc...............
        .....................c55cccccccccccccccccccccc555555555555dddccccbbc.........
        ......................c55ccccccb333cc333bcccc555555555555555ddccbbcc.........
        ......................cc55dccc3333bc333333ccb555555555555555ddcccccc.........
        .......................cc555c33333b3333333cc555555555555555dddccccc..........
        ........................ccb533333b33333333c5555555555555555d55dcccc..........
        .........................cb533333b3333333b55d55555555555555555dcccc..........
        .........................cd533333b33b133b55dd5555555555555555dddccc..........
        .................cccc....c5513333333b11355dd55555555555555ddddddcc...........
        ................c55bcc...c5513333333b1155dd5555555555555555dddddcc...........
        ................c55bbc...c5533333333b555dd55555555555555555ddddddccc.........
        ..............ccc55bddc..cb553133133555dd555555555cccc5555dddddddcccccc......
        .............c55bb5bdddc..c55513313555dd5555555555c55ccccddddddddcccccc......
        .............c55dbbbdddcc..cd5555555dbdd5555555555cb5555ccccdddddccccc.......
        .............c555bddbbb5c..cbbbbbbbbbddd5555555ccccbb55bb5dbcddddbccc........
        ..............bbbbddb555ccccddbbbbbddddd5555555c55ccbbbb5555bcddddcc.........
        .............cdd555b555bdbb5dddddddddddd5555555bb5555db5555555cdddc..........
        ...........ccbbb555bbbb5dbb5ddddddddddd555555555bb55ddbccbb555ccddcc.........
        ...........c555bb5555555bb555dddddddddd5555555555bc5ddddddbb555cdddcc........
        ...........c5555b5555555b5555ddddddddd555555555555c55dddbbbb555cbdddc........
        ............cbbb555555dbb555555dddddd5555555555555cc5ddbb5555555bbbddc.......
        .............cbb55555ddb555555555555555555555555555c55db55555555dbbbdcc......
        ..............cccddddddb555555555555555555555555555cc555bbb555555dddddc......
        ................ccddddb55555555555555555555555555555c55555dd555555ddddc......
        .................cddddb5555555555555555555555555555dcc5555dd5555555dddc......
        ..cc.............ccddbd555555555555555555555555555d5dc555dd55555555dddc......
        ..c5bb............ccdbd5555555555555555555555555555ddcc555555555555dddc......
        ..c55b.............ccbd555555555555555555555555555ddddc555555555555ddcc......
        ..cb5bb.............cbdd5555555555555555555555555d5dddcc5555555555dddcc......
        ..cb55b..............cdd555555555555555555555555d55ddddccc5555555dddcc.......
        ..cb55b..............cddd555555555555555555d555d55dddddddccc555ddddcc........
        ..c555b..............cdd55555dd555555555555555dddddddddddddcccccccccc........
        .cb555bb.............cbdd5555dd5555555555555dddddddddddddddddddddddccc.......
        .cb555bb............ccbddd5d55555555dd55555555dddddddddddddddddddddcccc......
        .c55555b...........cccbbddddddd555555555ddd55dddddddddddddddddddddbccc.......
        cb55555b..........cccbbbbdddd55ddd5555ddddddddddddddddddddddddddddbcc........
        cb55555b........bccbbbd5555dd555dd5555d55ddddddddddddddddd55ddddbbbc.........
        c5555555bb....bbbddbb5555555ddddddddddd55dddddddddddddddd55ddddddbbc.........
        c55555555bbbbbbddddc555555555dddddddddddddddddddddddddddd5dd5555ddbc.........
        cd5555555555ddddddc5555555555ddddddddddddddddddddddddddddd55555555dc.........
        cd5555555555dddddcc5555555555dddddddddddddddddddddddddd55d555555555cc........
        cdd55555555ddddddc55555555555dddddddddddddddddddddddddd5555555555555c........
        cddd555555ddddddcc5555555555ddddddddddddddddddddddddddddd55555555555cc.......
        ccddddddddddddddc55555555555ddddddddddddddddddddddddddddd555555555555c.......
        .cddddddddddddddc555555555555dddddddddddddddddddddddddddd555555555555c.......
        .ccddddddddddddcc555555555555ddddddddddddddddddbddddddddd555555555555cc......
        ..ccdddddddddddcc5555555dd55dddddddddddddddddddbdddddddd5d555555555555c......
        ...ccddddddddddccd5555dddddddddddddbbddddddddddbddddddddd5555555555555c......
        ....cccddddddddcddddddddddddddddddbbddddddddddbbbdddddddddd55555555555c......
        ......cccdddddccdddddddddddddddddccccccccccccbbbbddddddddddd555555555dc......
        ........cccccccdddddddddddddddddccc........ccccbbbdddddddddddd5555555dcc.....
        ............ccc555555dddddddddccc.............cccbddddddddddddd55555ddccc....
        .............c55555555ddddddccc..................ccdddddddddddddddddddccc....
        ...........ccdddccd555dddccccc....................ccdddddddddddd5555555dc....
        ..........ccdddccdddddcddcc........................cccddddddddd55555555dcc...
        ..........ccdddcdddccccddc...........................ccccccdddd555ddddccddcc.
        ..........ccccccddcccccdcc...............................ccddddddccddddccddcc
        ...............cdc.....ccc................................cccccdddccddddcddcc
        ...............cc...........................................ccccdddccccdccccc
        ...............................................................ccccc..ccc....
        `, SpriteKind.Player)
    story.showPlayerChoices("You get flying powers", "you get laser eye power", "you become spider man")
    if (story.checkLastAnswer("you get flying power")) {
        mySprite.destroy()
        get_flying_power()
    } else if (story.checkLastAnswer("you get  laser eye power")) {
        mySprite.destroy()
        get_laser_eye_power()
    } else {
        mySprite.destroy()
        become_spider_man()
    }
}
function kiss_her () {
    game.showLongText("good end", DialogLayout.Bottom)
}
function starstory () {
    scene.setBackgroundImage(img`
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333353333333333333333333333333333333333333333333333333333333333333333333333333333333533333333333
        3333333333333333333333353333333333333333333333333333333333333333333555333333333333333333333333333333333533333333333333333333333333333333333333333335553333333333
        3333333333333333333333555333333333333333333333333333333333333333335555533333333333333333333333333333335553333333333333333333333333333333333333333355555333333333
        3333333333333333333333353333333333333333333333333333333333333333333555333333333333333333333333333333333533333333333333333333333333333333333333333335553333333333
        3333333333333333333333333333333333333333333333333111333333333333333535333333333333333333333333333333333333333333333333333333333331113333333333333335353333333333
        33333d11d3333333333333333333333333333333333333331111133333333333333333333333333333333d11d33333333333333333333333333333333333333311111333333333333333333333333333
        33331111113333333333333333333333333333333331133111111d3333333333333333333333333333331111113333333333333333333333333333333331133111111d33333333333333333333333333
        3331111111d33333333333333333333333333333331111d1111111133333333333333333333333333331111111d33333333333333333333333333333331111d111111113333333333333333333333333
        33311111111d11333333333333333333333333333d1111111111111d33333333333333333333333333311111111d11333333333333333333333333333d1111111111111d333333333333333333333333
        331111111111111333333333333333333333333d11111111111111111d3333333333333333333333331111111111111333333333333333333333333d11111111111111111d3333333333333333333333
        1d1111111111111d31113333333333333333333333333333333333333333333366633333333333311d1111111111111d3111333333333333333333333333333333333333333333336663333333333331
        1111111111111111111113333333333333333333333333333333333333333336776633333333331111111111111111111111133333333333333333333333333333333333333333367766333333333311
        1111111111166666111113333333333333533333333333333333333333333366777633333333331111111111111666661111133333333333335333333333333333333333333333667776333333333311
        111111111166777661111111d333333335553333333333333333333333333367777663333333d111111111111166777661111111d333333335553333333333333333333333333367777663333333d111
        3333333336677777663333333333333355555333333333333333333333333367777763333333333333333333366777776633333333333333555553333333333333333333333333677777633333333333
        3333333336777777763333333333333335553333333333333333333333333367777763333333333333333333367777777633333333333333355533333333333333333333333333677777633333333333
        3333333366777777766333333333333335353333333333333333333333333367777763333333333333333333667777777663333333333333353533333333333333333333333333677777633333333333
        3333333367777777776333333333333333333333333333333335333333333367777763333333333333333333677777777763333333333333333333333333333333353333333333677777633333333333
        3333333367777777776333366333333333333333333333333355533333333367777763333333333333333333677777777763333663333333333333333333333333555333333333677777633333333333
        3333333367777777776333677633333333333333333333333335333336633367777763333333333333333333677777777763336776333333333333333333333333353333366333677777633333333333
        3333333367777777776336677663333333333333333333333333333367763367777763333333333333333333677777777763366776633333333333333333333333333333677633677777633333333333
        3333333367777777776336777763333333333333333333333333333367763367777763333333333333333333677777777763367777633333333333333333333333333333677633677777633333333333
        3333333367777777776336777763333333333333333333333333333367763367777763333333333333333333677777777763367777633333333333333333333333333333677633677777633333333333
        6666333367777777776666777763333333333666666333333333333367763367777763333333333666663333677777777766667777633333333336666663333333333333677633677777633333333336
        7776633367777777777777777763333333336666666633333333333367763367777763336633336677766333677777777777777777633333333366666666333333333333677633677777633366333366
        7777633367777777777777777633333333366666666663333333333367763367777763367663366777776333677777777777777776333333333666666666633333333333677633677777633676633667
        7777763367777777777777776633333333366666666663333333333367763367777763367763367777777633677777777777777766333333333666666666633333333333677633677777633677633677
        7777763367777777776666666333333333666666666663333333333367763367777763367763367777777633677777777766666663333333336666666666633333333333677633677777633677633677
        7777776367777777776333333333333333666666666663333333333367776667777763677763367777777763677777777763333333333333336666666666633333333333677766677777636777633677
        7777776367777777776333333333333333666666666666333333333366777777777766677766667777777763677777777763333333333333336666666666663333333333667777777777666777666677
        7777776367777777776333666666666333666666666666333333333336677777777776677666677777777763677777777763336666666663336666666666663333333333366777777777766776666777
        7777776667777777776366677777776663666666666666333333333333666677777777777666677777777766677777777763666777777766636666666666663333333333336666777777777776666777
        7777776667777777776667777777777766666666666666333366666633333677777777777666677777777766677777777766677777777777666666666666663333666666333336777777777776666777
        7777776667777777776677777777777776666666666666366677777666333677777777776666677777777766677777777766777777777777766666666666663666777776663336777777777766666777
        7777777667777777776777777777777777666666666666667777777776633677777766666666677777777776677777777767777777777777776666666666666677777777766336777777666666666777
        7777777667777777766777777777777777666666666666677777777777663677777766666666677777777776677777777667777777777777776666666666666777777777776636777777666666666777
        7777777667777777767777777777777777766666666666777777777777766677777766666666677777777776677777777677777777777777777666666666667777777777777666777777666666666777
        7777777667777777667777777777777777766666666666777777777777766677777766666666677777777776677777776677777777777777777666666666667777777777777666777777666666666777
        7777777667777777677777777777777777776666666666777777777777766677777766666666677777777776677777776777777777777777777766666666667777777777777666777777666666666777
        7777777667777733333333777777777777776666666666777777773333333377777766666666677777777776677777333333337777777777777766666666667777777733333333777777666666666777
        777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777
        7777777666333ddddddddddd33377777777766666666667777333ddddddddddd33376666666667777777777666333ddddddddddd33377777777766666666667777333ddddddddddd3337666666666777
        77777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd3336666666677777777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd33366666666777
        7777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd3333666667777777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd333366666777
        33777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd33333333333777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd333333333
        d33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33ddddd
        ddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333ddddddd
        ddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33dddddddddd
        ddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33dddddddddddd
        dddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddd
        dddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddd
        dddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddd
        dddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    game.setDialogFrame(img`
        ..99999999999999999999..
        .9966666666666666666699.
        996661111111111111166699
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        996661111111111111166699
        .9966666666666666666699.
        ..99999999999999999999..
        `)
    game.showLongText("You are stuck in Arizona, you have 2$ and Arizona iced tea", DialogLayout.Bottom)
    story.showPlayerChoices("Drink iced tea", "walk 10 mile")
    if (story.checkLastAnswer("Drink iced tea")) {
        drink_iced_tea()
    } else {
        walk_10_mile()
    }
}
function walk_10_mile () {
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    mySprite3 = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    game.showLongText(" you meet a girl", DialogLayout.Bottom)
    story.showPlayerChoices("kiss her", "bit her")
    if (story.checkLastAnswer("kiss her")) {
        kiss_her()
    } else {
        mySprite3.destroy()
        bit_her()
    }
}
function get_laser_eye_power () {
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999966666699969999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999969999999999999999999999999966999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999999996666669
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999969999999999999999999999996669
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999
        9999999999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999dcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
        999999999999999999999999999999999999999ddcb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999669999
        999999999999999999999999999999999999999dbcbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999969999999999996999699996
        999999999999999999999999666999999999999dcccc99999999999699999999999999999999999999999999969999999999999999999999999999999999999999999999999999999999999999996999
        99999999999999999999999996699999999999dbccccb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999699999
        99999999999999999999999996699699999999dbbccbb9999999699999999999999999999999999999999999999999999999999999999999999999969999999999999999969999999999999969999966
        9999999999999999966999996699999999999ddcbcccbb999996999999999999999996999999999999999999999999999999999999999999999999999999699999999999999999999999699999999969
        9999999999999999969999999999999999999dbcccccbb999999999999999999999999999699969999999999999999999999999999999999999999999999999999999999999999999669699969999966
        699969999999999999999999999999666699cdccbcbcccc699999ddddd9969999dbbb9999999699999999999969999999999999999999999999999999999999999999999999696999999969999999996
        999999999999999999999999999999666696dcbbbcbbbccb99999dbbdb99dd999ddbb9999999999999999999999996999999999999999999999999999969669999999999999999699999969999999999
        696999999999999999969999999699999996dccccccccccb99969dcccb9ddcc9ddccb6696999999699999999969999999996999999999999999999999666669999999999999999966669696999699999
        69999699999999999999999999999999669dccccbbbbccccb6966dbcbb9dccc9dbcbb6699999999999999999999999999999999999999999966669966699669999999699999696969996669666669996
        6999999999999999999969969999999966bdbbbbbbbbbbbbbb966dbccb9dbbb6dbbcc6699999999966999999999999999999996999999669966699669996969999999999996666999996699966666666
        9999999999999999999999999999999999dbbcccccccccbbbb666dcccbbdccbbccccc6669669669966999966669999999699996999999999966996969996969996999996666666669666666666666666
        9999999999999999999699999999999999bcccccccccccccbb6666bcbbcccbbccbcbb6666669999666666996969996669999699999999999999999996999699969966699999999666666666666666666
        999999996699999699999669999999999999cccccccccccc666666bccbcccccccccbb66966666996666669669969966969996999999999999999999999996999669ff6999996996666666666666666ff
        999999999969999669966699999999999999ccbbbbbbcccc666666cccbbbbbbcccccc66966999996996669999999999999966996969999999966669999996696999f969966666666666666666666ffff
        999999999999669996966996699999999999bbcbbccbbbbb6666666bbbcbbbccbbbb66666666996669966666999669999966699666999999966966999699669966ff96666669666666666666666fffff
        999996699696669996999999969999999999bbcbbbbbbbbb66666666bccccccccbb666666666666966966966666669666966696699666999669669666996666666f6666666666666666666666fffffff
        666996666666699966999999999699999999bbbbcccbbbbb66666666dccccccccc6666666666666666666666666666666666666666666666669666666666666666f666666666666666666666ffffffff
        666666666666999666696699999966999999bccccccccccb66666666dccbbbbbcc6666666666666666666666666666666666696666666666666666666666666666f66666666666666666666fffffffff
        6666666666666666666669699969999999999cccccccccc966666666dcbbbccbbc6666666666666666666666666666666666666666666666666666666666666666f666666ff66666666666ffffffffff
        66666666666666666666b9699999969999b696bcccccccb6f6666666ccbbbbcccc666666666666ff6666666666666666666666666666666666666666666666ff66ff66666ff666666666ffffffffffff
        666666666666666666dddbbb9dddd699ddb9bb9ccbbbbbfbbddddb666bbccbbbbcbb66666666666f66666666666666666666666666666666666666666666666ff66f666666f66666666fffffffffffff
        666666666666666666dbbbbfdbbdbbbbbbbb64bccbbbbccdddbbbbbbbcbbbbbbbcc66bbbbbb6666f69666666666666666666666666666666666666666666666fff6ff66666f6f6666fffffffffffffff
        b6666666b6b6b66666dbbbbfbbbbbbb6bbbb64bbbbbbbccbbcbbcbbcccbbbccbbccbb6b44466666f66666666666666666666666666666f6666666666666666666f66ff6666fff66fffffffffffffffff
        b6666666b6b6bb66b6dccccbfcccccbbcccb444bbcbccbcbbbbbcbbbccbbbccbbc4bb66bbb444b6666666666666666666666666666666ff6666666666666666666f66f6666ff66ffffffffffffffffff
        bb6b66bb64bb64bb66dbbbbbbbbbbbbbbcbb444bccbbbccbbcccbbbbccbbbbbbbc44464444bb4b6f66bf6666666666666666666666666ff6666666666666666666ffff6666f66fffffffffffffffffff
        444466bb44464446b6bccbbbbcbcccbbccbc444bbbbbbcccccccccbbbcbbbbcccc444444bb44bbbfbb6f6666666666666666666666666f666f66666666666666666fff666bffffffffffffffffffffff
        44b6b4b4b4b6b4444b4bcccccccccccccccc44bcbbbbbcccc4b4cccbbbbcbbcccc4444446644444fbb6f6bbb666666666666666666666f66ff66666666666666666fff6bbfffffffffffffffffffffff
        444444b4444444444464cbbbbbbcbbbbbbcb444ccbbbbccc44f44ecbbcbbbbbbcc444444b444464f44ffbbbbbb666666666ffff666666f66f6666b666666666666bbff646fffffffffffffffffffffff
        4444446444444444446bccbccbbccbbbccc4ff4ccbccbcc444ff44ccbcbbbbbbcc4444444444446f44ff46bbbb66666666bfbbfff6666f6f6666666666666666b664ff44ffffffffffffffffffffffff
        4444b66b4444446664644ccbbbbbbbbccc4ff46ccbbbbcc444444bdbbccbbcbbccff44464444444f44f44466bb4b66b66b6fb4bff6bbbff66666666666666666b444ff4fffffffffffffffffffffffff
        4444466b44444466644444cccccccccccddddbbccbbbbcc44444dfdbbccbbcbbccffff464464644f44f4b4bbbbbbb666b4ff444fff44ff66bb6666666ff66b6bb4bfffffffffffffffffffffffffffff
        4444446644444444464464cccccccccccddbbbbccbbbbcc44bb4dfdbbccbbbbbcc44f4664444644fff4444b4b6666666bff646b4ff4ff6b44bb666666f666b44b64fffffffffffffffffffffffffffff
        4444444444444f44444466ddbbbbbbbbcbbccccccbbbbbcd44ddffdbbccbbbbbcc44444dd44db44fff444444bb6b66664ff44444fffffddbbb444b6b6fb6bbdbdb3ffffffffffffffffffffffffffffc
        4444464444444f444d4444dbbbccbbbbcbcccccccccbbccd3ddd4ffbbccccccbccddddd4dd3443fff34444bb6bd4d966444444ddffff463d4bd4dd6dff6666dfb4ffffffffffffffffffffffffffffcc
        4444464444444ff44ff4b4dccbccbbcccbcc44ccbbbbbbccdccccccccccbcbbbccddddd4ddd4ddfffbdddd4dd3ddbddddbd446ddffff444d44bdddddff4669dfddffffffffffffffffffffffffffffcc
        4444446444444ffddfd344dbcbbbbbcbbbcc4cccbbccbbcbbcccccccccbbbcbcccdd434ddddffdffdddddfddddd3dddddbddddddffff46d444d4ddddffd9dddfdfffffffffffffffffffffffffffffcc
        44444444444444f3bf44ffdbbbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccdddddddddfffffdddddffdddddddddddd444ddffffddddb4ddddddffd66ddfdffffffffffffffffffffffffffffccc
        44444444ddd444ff4f33ffcbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccdddd44ddd4fffdd4dddffd4dddddddddddddddffffddd44b4dddddffdddddffffffffffffffffffffffffffffffccc
        44444444dddddddfdf44f4bbccbbbbbbccbbbbbbbbbbbbbbbbccbbbcbbbbbbcbccd4ddddddddfffd4dddddffddddddddddddd6bdfffffdd44444dd4ddfdddddffffffffffffffffffffffffffffffccc
        44444444ddddddd4ff4ff4bbbbbbbcccbbbbbbbbccbbcccbbbbbbbbbcccbbccbccdd4dddddddfffddddddddfddd4ddddddddddddfffffdd44b4ddddddffdddffffffffffffffffffffffffffffffcccc
        6444444ddd3dd44dff6ff4bbbcbbcccccbbcccbbccbbccbbbcccbbbcccccbccbccddfdddddddfffdddd4dddffdffddddddddddddfffffddddddddddddffddfffffffffffffffffffffffffffffffcccc
        4344ddddddddd4ddff4fddcbbcbbccbccbbbcbbbbbbbbbbbbcccbccccbccbbbbccdfffddddddfffddddddddffdfdddddddffddddfffffdddddddddddffffffffffffffffffffffffffffffffffffcccc
        4444ddddb4ddddddfddfd4ccbcbbcccccbbbbbbbbbbbcccbbbbbbcccccccbccbccdffdddddddffffddddddddfffddddd4dffddddfffffddddddddfdfffffffffffffffffffffffffffffffffffffcccc
        4444deedebd4434efffdd4ccbbbbcccccbbbcccccbccccccbbbbbbbcccccbbbcccdffdddddddffffddddddddfffdddddddfdddddfffffddddfdddfdffffffffffffffffffffffffffffffffffffccccc
        4444befeebe4d4beff4444ccbcbbcccccbbccbbbbcccbcbccbbbbbbcccccbbccccddfffdddddffffdddddddddffddddddffdddddfffffdddffdddffffffffffffffffffffffffffffffffffffffccccc
        444eeeefeeeed4e4ff4444ccccbbcccccbbbbbbbccbcbcbcccbccbbcccccbcbbcc44dffdddddffffdddd44dddffddddddffdddddfffffdddffdddfffffffffffffffffffffffffffffffffffffdccccc
        fffeeffffeeeeeffffeffeccbbbbcccccbbbccbcccbcbcbccccccbbcccccbccbccdddffddddfffffddddd4dddfffdddddffdddddfffffdddffdfffffffffffffffffffffffffffffffffffffffdccccf
        effeffedeeffffffffffffccbccbcccccbbbbbbcccbcbcbcbccbcbbbccccbccbccdddffddd4fffffdddddddddfffdddbdffd4dddffffffddffffffffffffffffffffffffffffffffffffffffffdccccc
        beffffedffffffffffffffccbccbbbbbbcccbbccbcbcbcbcbccbbbcbbbbbbbbbbcdddfdddddffffffdddddddbfffdddbcffddddfffffffdfffffffffffffffffffffffffffffffffffffffffffcccccc
        dfffffffffffffffffffffccbbbbbbbbbccbbbccbcbcbcbcbccbbbccccbbbbbbccdddffdddffffffffdddd4dbffffddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffcccccc
        ffffffffffffffffffffffccbbbbbccbbbbbbbccbcbcbcbcbccbbbbbccbbcbbcccffdffdffffffffffffddccdffffdbddffd4fffffffffffffffffffffffffffffffffffffffffffffffffffffbbfccc
        efffffffffffffffffffffccbcbbcccbbbbbbcccbcbcbcbcbcccbbbbbbbbccbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccdbbbbbbbc
        ffffffffffffffffffffffccbccbccbbbbbcbcccbcbcbcbcbcccbbbbbcccbccbbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbcbbbbbbb
        ffffffffffffffffffffffccccbbbbbbbbccccccbcbcbcbcbcccbccbbbccbbcbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcddbbcccbbbccc
        ffffffffffffffffffffffccccbbbbbcbbcbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcbbbbccccbbccc
        fffffffffffffffffffffcccccbbbbbcccbbbcccbcbcbcbcbcccbbbbcccbbbbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbccccbbbbccccbcccc
        ffffffffffffffffffffffccccbbccbbccbbbcccbcbcbcbcbcccbccbcccbbcccbcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbbcccbbbbbcccbbccc
        fffffffffffffffffffffbccbbccbbbbbbbbbcccbcbcbcbcbccccccbbbbbbbbbbcccbcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccbbbbbccccbbccbbbcc
        fffffffffffffffffffffbcbbbcbbbbbbbbbbcccbcbcbcbcbcccbcbbbbbbbbbbbccccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbcccccbbbbbbccbbccbbccc
        ffffffffffffffffffffccbbbbbccbcbbbccbcccbcbcbcbcbccccccbbbcccbbbbcccccbbbcfcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffcdbbcccccbbbbbbcccccbbbccc
        fffffffffcfffffffffccccccbbccbccbcccbcccbcbcbcbcbcccbcbbbcccbbbbbcccccccbbcccccbcfffcccffffffffffffffffffffffffffffffffffffffffffffffcdcbbbcccbbbbbbbbcccbbbbbcc
        ddcccffffffffffffcccccbcccbbcbbbbbbbbcccbcbcbcbcbcccbbbbbbbbbbbbbcccccccbbcccccccccccbbcfcffffffffffffffffffffffffffffffffffffffffffcdbbbbbcccbbbbbbccbccccbbbbc
        bdddfcbffffffffcccccccbbbcccbbbbbbccbcccbcbcbcbcbcccbbbbbbbbbbbccccccccccbcbbcccccccbbbfcbfcffffffffffffffffffffffffffffffffffffffffcdbbbcccccbbbbbbcbcccccbbbbc
        bbbddbbcffffccccccccccbbcbbcccbbbccbbcccbcbcbcbcbcccbbcbbbbbbbbccccccccccccccccccccccccccbbbbcffffffffffffffffffffffffffffffffffffffcbbbcbccccbbbbbccbccccccbbbc
        bbbbdbbbbcccccccbccbcccccbbbbbbbbcbcccccbcbcbcbcbcccbbcbbbbbbccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcbccbccccbbbbccbbcccbbccccc
        bbbbccccccccccbbbccccccccccccccccccccbbbbbbbbbbbbcccbbcbbbcccccccccbcccccccccccccccccccccccbbcbccbccccfffffffffffffffffffffffffffccffbbcbbcccccbbbccbccccbbbccbc
        bbbbbbbbccccccbbcccccbcccccccccccccbbcccccccccccbccccbbcbbccccccccccccccbcbcccccccccccccbbbbbbbccccbbbbbfccccccffffffffffffffffcfccccbbbbbbbcccbbccbbccbbbbbbccc
        bbbccccccbcccccccccbbbbbcccccccccccbbccccccccccccccccccccccccccccccccccccbcccccccccccccbccbbbbbbbccccbcbbbbbbbcccccffffffffcfcccfccccccbcccccccbccbbbbcbbbbbcccb
        bbccccccbbbbbcccccbbccbbbcccccccbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbcccccbccbbbbbbbdbbbcfcccffcbbbbbbccccccbbcccccbbbbbbbccbbbbcccbb
        ccbddddbbbbbbbcccccbcccccccbccbcbcccccccccccccccbcccccccccbbcccccccccbccccccccccccccccccccbbbccccccbbbcccccccbdbbbbcccccccbbbbbbbbbcccbbbbbbbbbbbbbbccbbbbbbbbbb
        ddbbbbccbbbbbbbbbbcccbbcccccccccbcccccccccccccccbcccccccccbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccbbbcccccccbccccbbbbbbcccccbbbbbbbbbbbbbbcccbbbbbbbb
        cbbbbbbbbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbccccccccccccccbbbbbbcccccccccbbbbbbbbccbbbbbbccccccccccbbbbbbbbbbcccccbbbbb
        cbbbccccccccccccbbbbbcbcccccbbccccccccccccbbbbbccccccccccccccccccccccccccccccbbcccbccccccccccccccccbbbbbcccccbbbbbbbbbbbbbbbccccbbbcccccccccccbbbbbbbcccccccbbbb
        bbbbccccccccbbbbbbbbbbbccbbbbbbbbccccccccbbbcccccbcccccccccccccbbccccccccccccccccccccccccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbcccccbbbbbccccccccbbcc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccccccccccccbbccccccccccccccccccccccbbbbbbbbbccccbbbccbbbbbbbbbccccccbbbbbbbbbbbbbbbbcbbbbbcccbcc
        bbbbbbcccccccbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbcccccccccbbcccbcccccccccccbccccccbcccccccccccbbbbbbbbbbccccccccbbbbbbbbbbbbcccbbccccccbc
        bbbccbbbccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccbccccbbbbbcccccccbbccccccbbbbbbbbccccccccbccccccbbbbbbbbbbbccbbcccbbbbc
        bbbcdddddbbbbcccccccccccccbbbbbccccbbcbccccccccccccbcccccccccccccccccccccbcbbbbbbbcccccccccccccccccbbbbbbcccccbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb
        bbbdcbbbbbbbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbbbbcccbcccccccccccccbcccccccccccccccccbbbbbbbbcbbbbbbbbcccccccbcccccccccbbccccccccbbbbbbbbbbbbbbbbbb
        bdbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccccbbbbbbccccccbbbbbbbccccbbbbbbbbbbbbbbbbb
        cddbccccbbbbbbbbbbbbbbcccccccccccccbbbbbccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cdcccbcccbbbbbbbbbbbbbbcccccccbbbbbbcccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dcbbbbbbbbbbbbbbbbbbccccccbbbbbcccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        dbbbbbbbbbbbccccccccccccccbbbbcccccccbbccccccccccbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbcccbbcbbbbbbbbccccccbbccccbbccccccccccccccccccccccccccccccccccbbcccccbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbcccccccccccccccccccccccccccc
        bbbbbbbccbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbccccccccccccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccbbbccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbccbbbbbbbbbbbbb
        bbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc
        ccccccccccccbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbcbbbbbbbbbcccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc
        cccccccccccccccccccccbdddddccccccccccbbbbbbbbbccccccccbbbcccccccccbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccc
        cccccccccbbbbbcccccccccccccccccccccbbbbbbbcccccccbbcccccccccccbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbccccc
        ccccccccccccbbccccccccccccbbbbbbbbbbbbbccccccbbbbbccccccbbbbbbbbbcbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
        bcccccccccccccccccccccccbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbcccccccbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbcccccccccc
        bccccccccccccccccbbbbbbbbbbbbbbbbeccccbbdbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccbbcccccccccccccbbbbb
        cccccccccccbbbbbbbbbbbbbbbbbbbbbbeeccbbd4bddbbdbbb3b444ddd444bbb344bbddbbcb44bbb44bb3444b444444b4be44ecccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbb
        bddddcbbbbbbbb444b4bbb44bb4b4bb4444dd44d44ddb4d3bddddddddd444ddddd44ddddddb33dd4444ddd44344444444e4e44ecbceeeccccbcccccccccccccccccccccbbccccccccccccccccbbbbbbb
        ddbbdd44b44b444444b444b444443444dddddddd4ddddddddddddddd4dddddddbdddddddddddddd44d44dddddd44dddddbd4dd3dd34b3bbdddccccccbbccccccccccccbbbbbbbbbbbbbbcccccbbbbbbb
        bbeee4b44444444dd4d33ddddddddde4dddddddddddddddddddddddddddddddd4d4ddd4dddddddddddd44ddddddddddddddddddddddd3dddbbbdbbdddbbbbbbcbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b4b43dd44db4ddddd4d44dddddddddbd4ddddddddddddddddddddddddd4ddddddd4dddddddddddddddd44ddddddddddddddddddddd4ddddd44dddddddddbdbddddbdbbddddbbbbbbbbbbbbbbbbbccbbb
        dddd3ddddd4ddddd44dddd4dddddddddddddddddddddddddddddddddddd3dddddd4ddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd334db4d3dd4bbd44b3ddbbcbbbb
        d4dddbddddddddddd4dddd4ddddddddddddddd3dddddddddd444ddddddd4dddddddddddddddddddddddddddddddd4ddddddddddddddddddddd4ddddddddddddddddddddd3bd4ddd4dddd4444444ddddd
        ddddddddddddddddd4ddddddddddddddddddd4ddddddddddddd4ddddddddddddddddddddddddddddddddddddd4dddddddddddddddddd4ddddddddddd4ddddddddddddddddddd4d44ddddd4dd44dddddd
        4ddddddd4d444dd4dd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd4ddddddddd
        dddddddddd444ddddd3ddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddddddddddddddddddddddddddddddd4ddddddddd
        `)
    mySprite2 = sprites.create(img`
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
        . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
        . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
        . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
        2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
        2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
        4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
        . . b b b b 2 4 4 2 b b b b . . 
        . b d d d d 2 4 4 2 d d d d b . 
        b d d b b b 2 4 4 2 b b b d d b 
        b d d b b b b b b b b b b d d b 
        b b d 1 1 3 1 1 d 1 d 1 1 d b b 
        . . b b d d 1 1 3 d d 1 b b . . 
        . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
        . . . 2 2 4 4 4 4 4 2 2 2 . . . 
        `, SpriteKind.Player)
    game.showLongText("you use laser eye to destroyed the castle", DialogLayout.Bottom)
}
function become_spider_man () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    mySprite2 = sprites.create(img`
        . . . 3 3 . 3 3 . . . . . . . . 
        . . 3 3 1 3 1 3 3 . . . . . . . 
        . . 3 1 1 1 1 1 3 . . 3 . 3 . . 
        . . . 3 1 1 1 3 . . 3 1 3 1 3 . 
        . . . . 3 1 3 . . . 3 1 1 1 3 . 
        . . . . . 3 . . . . . 3 1 3 . . 
        . . . . . . . . . . . . 3 . . . 
        3 3 . 3 3 . . . . . . . . . . . 
        3 1 1 1 3 . . . . . 3 3 . 3 3 . 
        . 3 1 3 . . . . . . 3 1 3 1 3 . 
        . . 3 . . . . . . . 3 1 1 1 3 . 
        . . . . . 3 . 3 . . . 3 1 3 . . 
        . . . . . 1 1 1 . . . . 3 . . . 
        . . . . . 3 1 3 . . . . . . . . 
        . . . . . . 3 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    game.showLongText("you save the Earth", DialogLayout.Bottom)
}
function get_flying_power () {
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999559999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999995555555555555442222222999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999995555555544424555522222222222222999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999995555554444442222542255554444422222222999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999995555554444444222255542224555544444444222229999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999555544444444442224455444222445555444444444222299999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999111111119955554444444444222444554444422444455544444444442229999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999991dddddddd115554444444444442224444554444442244444555444444444422299999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999ddddd1111d555544444444444422244445544444444224444455544444444442222999999999999999999999999999999991111111999999999999999
        9999999999999999999999999999999999999dddd111111155544444444444442244444455444444444224444445554444444444222dd111111111199999999999999111111111111111111111111999
        999999999999999999999999999999999999ddd111111155544444444444442224444445544444444442244444445554444444444422211111111111111ddddddddddddddddd11111dd1111111111199
        99999999999999991111119999999999999dd111111115554444444444444222444444455444444444442244444445554444444444422211111111111dddddddddddddddddd11111dddddddddd111199
        9999999999999911111111111199999999dd11111111555444444444444422244444445544444444444442244444444555444444444442211111111dddd11111111111111111111dd1111ddddd111999
        9999999999999111dddddddddd1119999dd11111111554444444444444422244444444554444444444444224444444445554444444444422dd1111ddd111111111111111111111dd1111111111119999
        9999999999911ddddddd1dddddddd111ddd111111155444444444444442224444444445444444444444442244444444445554444444444422d111ddd1111111111111111111111dd1111111111199999
        999999999911ddd111111111111dddd1dd1111111554444444444444442244444444455444444444444444224444444444554444444444442211ddd11111111111111111111111ddd111111119999999
        9999999991ddd1111111111111111dd1d1111111554444444444444442244444444445544444444444444422444444444445544444444444422dd11111111111111111111111111ddd11111199999999
        999999991ddd111111111111111111ddd1111115554444444444444422444444444445444444444444444442244444444444554444444444442211111111111111111111111111111111119999999999
        999999911dd11111111111111111111dd1111155544444444444444224444444444455444444444444444442244444444444455444444444442211111199999999999999999999999999999999999999
        99999991dd111111111111111111111111111155444444444444442224444444444455444444444444444442244444444444445544444444422229999999999999999999999999999999999999999999
        9999991dd1111111111111111111111111111554444444444444442244444444444455444444444444444444224444444444444554444444444422999999999999999999999999999999999999999999
        9999911d11111111111111111111111111115544444444444444422444444444444554444444444444444444224444444444444554444444444422999999999999999999999999999999999999999999
        999991dd11111111111111111111111111115544444444444444422444444444444554444444444444444444224444444444444455444444444222299999999999999999999999999999999999999999
        999911d11111111111111111ddddd11111155444444444444444224444444444444554444444444444444444422444444444444445544444444442299999999999999999999999999999999999999999
        99991dd1111111111111111dddddddd111155444444444444442244444444444444554444444444444444444422444444444444445554444444444229999999999999999999999999999999999999999
        99991dd111111111111111ddd1111dddd1554444444444444442244444444444444544444444444444444444422444444444444444554444444444229999999999999999999999999999999999999999
        99991dd11111dd1111111ddd1111111ddd554444444444444422444444444444445544444444444444444444442444444444444444455444444444222999999999999999999999999999999999999999
        99999dd11111dd1111111dd1111111111d554444444444444422444444444444445544444444444444444444442244444444444444455444444444222999999999999999999999999999999999999999
        99999dd11111dd111111dd111111111115544444444444444424444444444444445544444444444444444444442244444444444444445544444444242299999999999999999999999999999999999999
        99999dd11111dd111111dd111111111115544444444444444224444444444444445544444444444444444444442244444444444444445544444444442299999999999999999999999999999999999999
        99999dd111ddd111111ddd111111111115544444444444444224444444444444445544444444444444444444444244444444444444444554444444422299999999999999999999999999999999999999
        999999dddddd1111111dd1111d11111155444444444444442244444444444444445544444444444444444444444224444444444444444554444444422229999999999999999999999999999999999999
        999999dddd111111111dd111dd1111115544444444444444224444444444444444554444444444444444444444422444444444444444445544444442422ddddddd199999999999999999999999999999
        99999999999999999999ddddd11111115544444444444444224444444444444444554444444444444444444444422444444444444444445544444444422dddddddd11999999999999999999999999999
        999999999999999999999ddd1dd1111554444444444444422444444444444444445544444444444444444444444224444444444444444455444444444221111111d11111119999999999999999999999
        9999999999999999999999999ddd111554444444444444422444444444444444445444444444444444444444444224444444444444444445444444444222111111111111111199999999999999999999
        99999999999999999999999999ddd1155444444444444442244444444444444444544444444444444444444444442444444444444444444554444444222211111111dd11111111199999999999999999
        999999999999999999999999999ddd15544444444444442244444444444444444454444444444444444444444444244444444444444444455444444224221111111ddd11111111111111dd1111999999
        99999999999999999999999999999dd544444444444444224444444444444444445444444444444444444444444422444444444444444444544444442422111111dd1111111111ddddddddddddd99999
        9999999999999999999999999999995544444444444444224444444444444444445544444444444444444444444422444444444444444444554444444422111111dd1111111dddddd11111111dddd999
        999999999999999999999999999999554444444444444422444444444444444444554444444444444444444444442244444444444444444455444444422221111dd111111dddd11111111111111ddd99
        9999999999999999999999999999995544444444444444244444444444444444445544444444444444444444444422444444444444444444554444444222211111ddddddddd11111111111111111ddd9
        99999999999999999999999999999955444444444444422444444444444444444455444444444444444444444444424444444444444444444544444442422111111dddddd11111111111111111111dd9
        9999999999999999999999999999995544444444444442244444444444444444445544444444444444444444444442244444444444444444455444444442211111111111111111111111111111111119
        9999999999999999999999999999995544444444444442244444444444444444445544444444444444442222222222224444444444444444455444444422211111111111111111111111111111111199
        9999999999999999999999999999995544444444444442244444444444444444445544444444444422222222222222222222444444444444455444444422221111111111111111111111111111111199
        9999999999999999999999999999995544444444444422244444444444444444445544444444442222222222222222222222224444444444445444444422221111111111111111111111111111111999
        9999999999999999999999999999995444444444422222222222244444444444445544444444422222222222222222222222222244444444445544444424221111111111111111111111111111199999
        999999999999999999999999999999544444444222222222222222222444444444454444444222222222222222222221111111222224444444554444444422111d111111111111111111111111999999
        999999999999999999999999999999544444442222222222222222222222444444455444441111111222222222111111111111111224444444554444444422ddddd11111111111111111111119999999
        99999999999999999999999999999954444422222222222222222222222224444445544444111111111111222111111111111111111444444445444444222ddd11111111111111111111111119999999
        999999999999999999999999999999544442222222222222222222229999994444455444411111111111111ef11111111111111111114444444554444222411111111111111111111111111199999999
        999999999999999999999999999999554422999999922222222222999999999944445444111111111111dddeddddd11111111111111dd444444554442241111111111111111111111111111999999999
        99999999999999999999999999999955422999999999992222e99999999999999144554411111dddddddddeddddddd1111111111111dd114444554422411111111111111111111111111119999999999
        9999999999999999999999999999995522999999999999999ee99999999999999994444ddddddddddd999e9999999d9991111111111d1111444554224111111111111111111111111111199999999999
        99999999999999999999999999999942299999999999999999eee9999999999999999ef9dd999999999995999999999999999999991d1111144552241111119999999999111111111111999999999999
        9999999999999999999999999999999ff99999999999999999999eee9999999999999ff9999999999999e9999999999999999999999dd111114422411111199999999999999999999999999999999999
        9999999999999999999999999999999df99999999999999999999999ee999999999995e999999999999e99999999999999999999999ddd1eee1224111111999999999999999999999999999999999999
        99999999999999999999999999999999eee99999999999999999999999eee999999999e99999999999e9999999999999999999999999deeeeef221111119999999999999999999999999999999999999
        9999999999999999999999999999999999eeeeeeee999999999999999999eee99999999e999999999e99999999999999999999999eeeeddddff111111199999999999999999999999999999999999999
        999999999999999999999999999999999999999eeeeeeeeeee9999999999999eeee9999ee9999999e999999999999999999999eee999999dddddddd11999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999eeeeeee99999999999eee999ee99999e999999999999999999eeee9999999999999dddd99999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999eeeeeee9999999eeee9e9999e999999999999999eeee99999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999eeeeee99999ee9e99ee99999999eeeeeee999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999eeeee9eeee9e99999eeeee999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999eeeeeee9eeeee9999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999eeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999ee9999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    mySprite2 = sprites.create(img`
        bbbb........bbbb.................
        c99bb......bb99b.................
        c999bb....bb999c.................
        c9b99bccccb99b9c.................
        c9bb99bccb99bb9c.................
        c93b99999999b39c.................
        c93399999999339c.................
        c99399999999399c.................
        c99999991199999c.................
        c999ff91119ff99c........bbbbbb...
        c999ff91111ff99c.......c999999bb.
        c99991111111999c......c99999999b.
        c9991111fff1199c.....c9991119999b
        c999c11fff1199bc.....c9911111999b
        c999cc111111c9bc.....c911dd11199b
        c99999bb33cc99bcc....cbddbbd1199c
        c999999b33c99999bbccccbbdbbb1199c
        c9999999bb9999999999999999bb1999c
        c999911119999999999999999999b999c
        c999111111999999999999999999999c.
        c99911111119999999999999999999cc.
        c99111111119999999999999999999c..
        c99111111111999999999999999999c..
        cb9111111111999999999999999999c..
        .f9111111111999999999999999999c..
        .ff111111111999999999999999999c..
        ..fb11111111999999999999999999c..
        ...fb1111119999999111111999999c..
        ...fbbb11119999991111111199999c..
        ....fbbfffb9999ccccccccccb9999c..
        ....fbbf..f999c.....fbbf.c9999c..
        ....fbbf..f999c.....fbbf.cc9999c.
        ....fbbf..f99c.......fbf..cc999c.
        ....fbbf..f99c.......fbbf..cc99c.
        ....fbbf..f99c.......fbbf...c99c.
        ....fbbf..f99c......fbbbf...c99c.
        ...fbbbf..f99c......ffff....cb9c.
        ...fbbf..f999c.............c999c.
        ...ffff..f99cc.............c999c.
        .........fffc..............cccc..
        `, SpriteKind.Player)
    game.showLongText("you save the dog with the flying power", DialogLayout.Bottom)
}
function bit_her () {
    game.showLongText("bad end", DialogLayout.Bottom)
}
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
starstory()
