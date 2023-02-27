//% weight=100 color=#33aacc icon=""
namespace Redundant {
    let sendTrials = 3
    let seq = 0
    /**
     * Sends a message redundantly
     * @param s the string to send
     */
    //% block
    export function Send(s: string): void {
        let i = 0;
        for ( i = 0; i < sendTrials; i++ ) {
            radio.sendString(seq.toString() + ";" + s)
            basic.pause(50)
        }
        seq++;
    }

    /** 
     * Checks if a received string is a duplicate
     * @param s the string which was received
     * @return returns the actual string
     */
    export function Receive(s: string): string {
        let parts = s.split(";")
        let thisSeq = parseInt(parts[0])
        if (thisSeq <= seq) {
            return ""
        }
        seq = thisSeq
        return parts[1]
    }

    export function getSeq(): number {
        return seq;
    }
}
