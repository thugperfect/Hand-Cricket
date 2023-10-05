const start_btn = document.getElementById('start')
const game_page = document.getElementById('game')
const right = document.getElementById('right')
const left =  document.getElementById('left')
const center = document.getElementById('center')
let toss = false
let tossVal = ''
let scoreRight = 0
let scoreLeft = 0
function start(){
  start_btn.style.display = 'none'
  game_page.style.display = 'block'
}

if(!toss){
  const tossDiv = document.createElement('div')
  tossDiv.className = 'center'
  const tossBtn = document.createElement('button')
  tossBtn.innerText = 'TOSS'
  tossDiv.appendChild(tossBtn)
  center.appendChild(tossDiv)
  tossBtn.onclick = function fun(){
    tossBtn.style.display = 'none'
    const odd = document.createElement('button')
    const even = document.createElement('button')
    odd.innerText = 'odd'
    
    even.innerText = 'even'
    odd.className = 'oddeven'
    even.className = 'oddeven'

    const oddeven = document.getElementsByClassName('oddeven')
    for(i = 0;i<oddeven.length;i++){
      oddeven[i].addEventListener('click',()=>{
        tossVal = oddeven[i].innerText
        tossDiv.style.display = 'none'
        console.log(tossVal)
      })
    }
    tossDiv.appendChild(odd)
    tossDiv.appendChild(even)
  }
  
}

const base_panel = document.getElementById('base')
for(i = 1;i<7;i++){
  const click_btn = document.createElement('div')
  click_btn.className = 'click-btn'
  click_btn.id = i
  click_btn.innerText = i
  base_panel.appendChild(click_btn)
}

const all_btns = document.querySelectorAll('.click-btn')

const clickFn =(e)=>{
  const random = Math.floor(1+Math.random()*6)
  const click = Number(e.target.id)
  right.innerText = click
  scoreRight+=click
 
 
  left.innerText = random
  
}
for(i = 0;i<all_btns.length;i++){

  all_btns[i].addEventListener('click',clickFn)

}