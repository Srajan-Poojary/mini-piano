const whiteKeys = ['z','x','c','v','b','n','m']
const blackKeys = ['s','d','g','h','j']


const keys = document.querySelectorAll(".key")
const white = document.querySelectorAll(".white")
const black = document.querySelectorAll(".black")


keys.forEach((key) => {
  key.addEventListener("click", () => {
    playNote(key)
  })
})

document.addEventListener('keydown', (e) => {
    const key = e.key
    const whiteKeyIndex = whiteKeys.indexOf(key)
    const blackKeyIndex = blackKeys.indexOf(key)
    
    if(whiteKeyIndex > -1) {
      playNote(white[whiteKeyIndex])
    }
    else if(blackKeyIndex > -1) {
      playNote(black[blackKeyIndex])
    }
})

function playNote(key) {
  
  const audioNote = document.getElementById(key.dataset.note)
  audioNote.currentTime = 0
  key.classList.add("active")
  audioNote.play()
  audioNote.addEventListener("ended", () => key.classList.remove("active"))
}