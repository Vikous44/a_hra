function playercontroller () {
    if (pins.analogReadPin(AnalogPin.P0) > 520) {
        player1right()
    } else if (pins.analogReadPin(AnalogPin.P0) < 508) {
        player1left()
    }
}
function checkcollision () {
    if (aMeteorsY[playerX] == 4) {
        pause2 = 1
        hp += -1
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        pause2 = 0
        init()
    }
}
function player1right () {
    basic.pause(70)
    playerX += 1
    if (playerX == 5) {
        playerX = 4
    }
    led.unplot(playerX - 1, 4)
}
function init () {
    basic.clearScreen()
    aMeteorsY = [
    0,
    0,
    0,
    0,
    0
    ]
    for (let index = 0; index <= 4; index++) {
        aMeteorsY[index] = randint(-15, -1)
    }
}
function player1left () {
    basic.pause(70)
    playerX += -1
    if (playerX == -1) {
        playerX = 0
    }
    led.unplot(playerX + 1, 4)
}
function render () {
    led.plot(playerX, 4)
    for (let x = 0; x <= 4; x++) {
        led.plot(x, aMeteorsY[x])
    }
}
function fallmeteor () {
    for (let index = 0; index <= 4; index++) {
        y = aMeteorsY[index]
        if (y == 5) {
            aMeteorsY[index] = randint(-15, -1)
        } else {
            led.unplot(index, y)
            aMeteorsY[index] = y + 1
        }
    }
}
let y = 0
let aMeteorsY: number[] = []
let playerX = 0
let pause2 = 0
pause2 = 0
let hp = 5
playerX = 2
init()
basic.forever(function () {
    if (pause2 == 0) {
        fallmeteor()
        basic.pause(170)
    }
})
basic.forever(function () {
    if (pause2 == 0) {
        render()
        checkcollision()
    }
})
basic.forever(function () {
    if (pause2 == 0) {
        playercontroller()
    }
})
