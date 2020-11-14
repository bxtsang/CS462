radio.onReceivedValue(function (name, value) {
  serial.writeValue(name, value)
})
radio.setGroup(1)
