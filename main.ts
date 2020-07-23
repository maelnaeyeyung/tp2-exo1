let X4 = 0
let X3 = 0
let X2 = 0
let X1 = 0
let X = 0
let Y = 0
let Y1 = 1
let Y2 = 2
let Y3 = 3
let Y4 = 4
basic.forever(function () {
    led.plot(0, Y)
    led.plot(1, Y1)
    led.plot(2, Y2)
    led.plot(3, Y3)
    led.plot(4, Y4)
    basic.pause(200)
    led.unplot(0, Y)
    led.unplot(1, Y1)
    led.unplot(2, Y2)
    led.unplot(3, Y3)
    led.unplot(4, Y4)
    if (Y == 4) {
        X = 0
    } else if (Y == 0) {
        X = 1
    }
    if (X == 0) {
        Y += -1
    } else {
        Y += 1
    }
    if (Y1 == 4) {
        X1 = 0
    } else if (Y1 == 0) {
        X1 = 1
    }
    if (X1 == 0) {
        Y1 += -1
    } else {
        Y1 += 1
    }
    if (Y2 == 4) {
        X2 = 0
    } else if (Y2 == 0) {
        X2 = 1
    }
    if (X2 == 0) {
        Y2 += -1
    } else {
        Y2 += 1
    }
    if (Y3 == 4) {
        X3 = 0
    } else if (Y3 == 0) {
        X3 = 1
    }
    if (X3 == 0) {
        Y3 += -1
    } else {
        Y3 += 1
    }
    if (Y4 == 4) {
        X4 = 0
    } else if (Y4 == 0) {
        X4 = 1
    }
    if (X4 == 0) {
        Y4 += -1
    } else {
        Y4 += 1
    }
})
