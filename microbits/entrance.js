radio.setGroup(1)
let triggered = 0
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.P2) <= 50) {
        if (triggered == 0) {
            radio.sendValue("distance", grove.measureInCentimeters(DigitalPin.P2))
            triggered = 1
        }
    } else {
        triggered = 0
    }
})
