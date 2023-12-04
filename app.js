let seconds = '00'
let tens = '00'

let secondsText = document.getElementById("seconds")
let tensText = document.getElementById("tens")
let Save = document.getElementById("SAVE")
let Interval = ""


function startbtn() {
    clearInterval (Interval)
    Interval = setInterval (startTimer)
   
    document.getElementById('image').src="pic_bulbon.gif"
}

function stopbtn() {
    clearInterval (Interval)
    document.getElementById('image').src="pic_bulboff.gif"
}


function resetbtn() {
    clearInterval (Interval)
    let seconds = '00'
    let tens = '00'
    tensText.textContent = tens
    secondsText.textContent = seconds
}

function startTimer() {
    tens++
    if ( tens <= 9) {
        tensText.textContent = "0" + tens
    } else {
        tensText.textContent = tens
    }


    if ( tens > 99) {
        
        seconds++

        if (seconds <= 9) {
            secondsText.textContent = "0" + seconds
        } else {
            secondsText.textContent = seconds
        }

        tens = 0
        tensText.textContent = "0" + 0
       
    }

    
}