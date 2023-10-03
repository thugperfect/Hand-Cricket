const start_btn = document.getElementById('start')
const game_page = document.getElementById('game')
const right = document.getElementById('right')
let score = 0
function start(){
  start_btn.style.display = 'none'
  game_page.style.display = 'block'
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
  const click = Number(e.target.id)
  right.innerText = click
  score+=click
  console.log(score)
  
}
for(i = 0;i<all_btns.length;i++){

  all_btns[i].addEventListener('click',clickFn)

}