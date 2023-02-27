input.onButtonPressed(Button.A, function () {
    Redundant.Send("woohoo")
})
radio.onReceivedString(function (s) {
    received = s
    s = Redundant.Receive(s)
// console.warn("Dropping " + received)
    // console.warn("Myseq = " + Redundant.getSeq())
    if (s == "") {
    	
    } else {
        console.warn("Accepted "+ received)
    }
})
let received = ""
radio.setGroup(3)
basic.forever(function () {
    basic.showString("" + (Redundant.getSeq().toString()))
})
