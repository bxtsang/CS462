input.onButtonPressed(Button.AB, function () {
  tex = 0
  ten = 0
})
radio.onReceivedValue(function (name, value) {
  if (name == "distance") {
      received = 1
  }
})
let triggered = 0
let ten = 0
let tex = 0
let received = 0
radio.setGroup(1)
let distance1 = 200
received = 0
basic.forever(function () {
  distance1 = grove.measureInCentimeters(DigitalPin.P2)
  if (distance1 <= 50) {
      if (triggered == 0) {
          // set timer for 5s
          // when timer end, set ten = 0
          if (tex >= 1) {
              radio.sendValue("exit", 1)
              tex = 0
          } else {
              ten = 1
          }
      }
      triggered = 1
  } else {
      triggered = 0
  }
  if (received == 1) {
      // set timer for 5s
      // when timer end, set tex = 0
      if (ten >= 1) {
          radio.sendValue("entrance", 1)
          ten = 0
      } else {
          tex = 1
      }
      received = 0
  }
})
