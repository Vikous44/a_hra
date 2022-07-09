function playercontroller () {
    if (pins.analogReadPin(AnalogPin.P0) > 520) {
        player1right()
    } else if (pins.analogReadPin(AnalogPin.P0) < 508) {
        player1left()
    }
}
function player1right () {
    basic.pause(70)
    player1 += 1
    if (player1 == 5) {
        player1 = 4
    }
    led.unplot(player1 - 1, 4)
}
function player1left () {
    basic.pause(70)
    player1 += -1
    if (player1 == -1) {
        player1 = 0
    }
    led.unplot(player1 + 1, 4)
}
function render () {
    led.plot(player1, 4)
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
let player1 = 0
player1 = 2
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
basic.forever(function () {
    playercontroller()
})
basic.forever(function () {
    fallmeteor()
    basic.pause(170)
})
basic.forever(function () {
    render()
})
