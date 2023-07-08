function start(){
    let startBtn =document.getElementById("start-btn")
    startBtn.style.display = "none"
    let body = document.getElementById("body")
    let left = document.createElement("div")
    left.className = "left"
    let middle = document.createElement("div")
    middle.className = "middle"
    let right = document.createElement("div")
    right.className = "right"
    body.appendChild(left)
    body.appendChild(middle)
    body.appendChild(right)

}