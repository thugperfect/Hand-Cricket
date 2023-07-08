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
    middlescore()
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
    optbox()
    
}

function optbox(){
    let optionBox = document.getElementById("option-box")
    let zero = document.createElement("button")
    let one = document.createElement("button")
    let two = document.createElement("button")
    let three = document.createElement("button")
    zero.className = "options"
    one.className = "options"
    two.className = "options"
    three.className = "options"
    zero.id = "zero"
    one.id = "one"
    two.id = "two"
    three.id = "three"
    optionBox.appendChild(zero)
    optionBox.appendChild(one)
    optionBox.appendChild(two)
    optionBox.appendChild(three)
    zero.innerHTML = "0"
    one.innerHTML = "1"
    two.innerHTML = "2"
    three.innerHTML = "3"


}


function middlescore(){
    let middle = document.getElementById("middle")
    let score = document.createElement("div")
    score.className = "score"
    let tossBtn = document.createElement('button')
    tossBtn.className = "toss-btn"
    tossBtn.id = "toss-btn"
    let bottomScore = document.createElement("div")
    bottomScore.className = "score"
    middle.appendChild(score)
    middle.appendChild(tossBtn)
    middle.appendChild(bottomScore)
    tossBtn.innerHTML = "Toss"
    let oddOrEven = Math.floor(Math.random()*4)

}

let tossBtn = document.getElementById("toss-btn")

tossBtn.addEventListener("click",()=>{

})

function toss(){
    
}