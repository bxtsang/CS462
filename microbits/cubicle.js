let triggered = 0
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(grove.measureInCentimeters(DigitalPin.P0))
    if (grove.measureInCentimeters(DigitalPin.P0) <= 60) {
        if (triggered == 0) {
            triggered = 1
            radio.sendValue("cubicle", 1)
        }
    } else {
        if (triggered == 1) {
            triggered = 0
            radio.sendValue("cubicle", 0)
        }
    }
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P2,
    true,
    false,
    true
    )
    radio.sendValue("humidity", dht11_dht22.readData(dataType.humidity))
    radio.sendValue("temp", dht11_dht22.readData(dataType.temperature))
})
