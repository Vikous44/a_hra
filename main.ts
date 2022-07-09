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
    for (let value of aMeteorsY) {
    	
    }
}
let aMeteorsY: number[] = []
let player1 = 0
player1 = 2
aMeteorsY = [
2,
0,
3,
1,
0
]
basic.forever(function () {
    playercontroller()
    fallmeteor()
    render()
})
