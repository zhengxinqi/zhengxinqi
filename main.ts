let set_hand_to = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    set_hand_to = randint(1, 3)
    if (set_hand_to == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (set_hand_to == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
