function player1right () {
    basic.pause(70)
    player1 += 1
    led.plot(player1, 4)
    led.unplot(player1 - 1, 4)
}
function player1left () {
    basic.pause(70)
    player1 += -1
    led.plot(player1, 4)
    led.unplot(player1 + 1, 4)
}
let list: number[] = []
let player1 = 0
led.plot(2, 4)
player1 = 3
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 520) {
        player1right()
    } else if (pins.analogReadPin(AnalogPin.P0) < 508) {
        player1left()
    }
    if (player1 == 5) {
        player1 = 4
        led.plot(4, 4)
    }
    if (player1 == -1) {
        player1 = 0
        led.plot(0, 4)
    }
})
basic.forever(function () {
    list = [0, 1]
})
