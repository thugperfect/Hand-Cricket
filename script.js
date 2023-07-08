function start(){
    let startBtn =document.getElementById("start-btn")
    startBtn.style.display = "none"
    let body = document.getElementById("body")
    let left = document.createElement("div")
    left.id = "left"
    let middle = document.createElement("div")
    middle.id= "middle"
    let right = document.createElement("div")
    right.id = "right"
    body.appendChild(left)
    body.appendChild(middle)
    body.appendChild(right)
    rightfn()


}

function rightfn(){
    
    let rightel = document.getElementById("right")
    let displayBox = document.createElement("div")
    displayBox.id = "display-box"


    let optionBox = document.createElement("div")
    optionBox.id = "option-box"
    rightel.appendChild(displayBox)
    rightel.appendChild(optionBox)
    
}


function toss(){
    let oddOrEven = Math.floor(Math.random()*7)

}