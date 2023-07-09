const startBtn = document.getElementById("start-btn");
const body = document.getElementById("body");

function start() {
  startBtn.style.display = "none";

  let left = document.createElement("div");
  left.id = "left";
  left.className = "display-box"
  let middle = document.createElement("div");
  middle.id = "middle";
  let right = document.createElement("div");
  right.id = "right";
  body.appendChild(left);
  body.appendChild(middle);
  body.appendChild(right);
  middlescore();
  rightfn();
  leftfn();
}

function leftfn(){
let left = document.getElementById("left")
let randomNumber = Math.floor(Math.random()*4)
let selectValueo = document.querySelector(".option");


}

function rightfn() {
  const rightel = document.getElementById("right");

  let displayBox = document.createElement("div");
  displayBox.id = "display-box";
  displayBox.className = "display-box"
  let notify = document.createElement("h1")
  notify.id = "notify"
 

  let optionBox = document.createElement("div");
  optionBox.id = "option-box";
  rightel.appendChild(displayBox);
  rightel.appendChild(optionBox);

  optbox();

  rightSidePanel();
}

function optbox() {
  const optionBox = document.getElementById("option-box");
  let zero = document.createElement("button");
  let one = document.createElement("button");
  let two = document.createElement("button");
  let three = document.createElement("button");
  zero.className = "options";
  one.className = "options";
  two.className = "options";
  three.className = "options";
  zero.id = "zero";
  one.id = "one";
  two.id = "two";
  three.id = "three";
  optionBox.appendChild(zero);
  optionBox.appendChild(one);
  optionBox.appendChild(two);
  optionBox.appendChild(three);
  zero.innerHTML = "0";
  one.innerHTML = "1";
  two.innerHTML = "2";
  three.innerHTML = "3";
}
function rightSidePanel() {
  
  let selectValue = document.querySelectorAll(".options");
  let displayBox = document.getElementById("display-box");
  selectValue.forEach((i) => {
    i.addEventListener("click", () => {
      
      let leftValue = parseInt(i.innerHTML);
      displayBox.innerHTML =leftValue;
    });
  });
}

function middlescore() {
  let score = document.createElement("div");
  score.className = "score";
  score.id = "score"
  let tossBtn = document.createElement("button");
  tossBtn.className = "toss-btn";
  tossBtn.id = "toss-btn";
  let bottomScore = document.createElement("div");
  bottomScore.className = "score";

  middle.appendChild(score);
  middle.appendChild(tossBtn);
  middle.appendChild(bottomScore);
  tossBtn.innerHTML = "Toss";
  let oddOrEven = Math.floor(Math.random() * 4);
  let flag = 1;
  let tosssBtn = document.getElementById("toss-btn");
  tosssBtn.addEventListener("click", () => {
    toss(flag);
    flag++;
  });
}
function toss(flag) {
 let oddOrEven = Math.floor(Math.random() * 4) 
  let tossBtn = document.getElementById("toss-btn");
  if (flag == 1) {
    tossBtn.innerHTML = "";
    let wrap = document.createElement("div");
    wrap.className = "wrap";
    let odd = document.createElement("button");
    let even = document.createElement("button");
    odd.className = "option";
    odd.id = "odd"
    even.id = "even"
   
    even.className = "option";
    wrap.id = "wrap";
    tossBtn.appendChild(wrap);
    wrap.appendChild(odd);
    wrap.appendChild(even);
    odd.innerHTML = "odd";
    even.innerHTML = "even";
    let batOrBowl = ["you bat","you bowl"]
    let numBatOrBowl = Math.floor(Math.random()*2)     
    
    let left = document.getElementById("left")
    let selectValueo = document.querySelectorAll(".option");
    let displayBoxo = document.getElementById("score");
    let displayBox = document.getElementById("display-box");
    let numdisplayBox = parseInt(displayBox.innerText)
    let numLeft = parseInt(left.innerText)
    let oddArray = [1,3,5,7,9];
    let evenArray = [0,2,4,6,8];

     
    
    
    selectValueo.forEach((i) => {
      i.addEventListener("click", () => {
        if(displayBox.innerHTML == ""){
          alert("select runs")
        }
        else if(i.innerHTML == "odd"){
          even.style.display = "none"
         
          left.innerText = oddOrEven;

          for(i = 0;i<5;i++){
            if(numdisplayBox+oddOrEven == oddArray[i]){
              displayBoxo.innerHTML = "choose two"
  
              let wrapBatOrBowl = document.createElement("div")
              wrapBatOrBowl.id = "wrapbatorbowl"
              let batChoice = document.createElement("button")
              batChoice.className = "optionss"
              batChoice.innerHTML = "bat"
              let bowlChoice = document.createElement("button")
              bowlChoice.className = "optionss"
              bowlChoice.innerHTML = "bowl"
              displayBoxo.appendChild(wrapBatOrBowl)
              wrapBatOrBowl.appendChild(batChoice)
              wrapBatOrBowl.appendChild(bowlChoice)
            }
            else  if (numdisplayBox+oddOrEven == evenArray[i]){
            
              displayBoxo.innerHTML = batOrBowl[numBatOrBowl]
            
            }
          }
        }
        else if(i.innerHTML == "even"){
          odd.style.display = "none"
          left.innerHTML = oddOrEven;
          for(i = 0;i<5;i++){
            if(numdisplayBox+oddOrEven == evenArray[i]){
              displayBoxo.innerHTML = "choose two"
  
              let wrapBatOrBowl = document.createElement("div")
              wrapBatOrBowl.id = "wrapbatorbowl"
              let batChoice = document.createElement("button")
              batChoice.className = "optionss"
              batChoice.innerHTML = "bat"
              let bowlChoice = document.createElement("button")
              bowlChoice.className = "optionss"
              bowlChoice.innerHTML = "bowl"
              displayBoxo.appendChild(wrapBatOrBowl)
              wrapBatOrBowl.appendChild(batChoice)
              wrapBatOrBowl.appendChild(bowlChoice)
            }
            else  if (numdisplayBox+oddOrEven == oddArray[i]){
              
              displayBoxo.innerHTML = batOrBowl[numBatOrBowl]
              
            }
          }

        }
     
     
        let wrapBatOrBowl = document.getElementById("wrapbatorbowl")
        let wrapBatOrBowlClass = document.querySelectorAll(".optionss")
        let right = document.getElementById("right")
        wrapBatOrBowlClass.forEach((i)=>{
          i.addEventListener("click",()=>{
            wrap.style.display = "none"
            wrapBatOrBowl.style.display = "none"
            displayBoxo.innerHTML = ""
            
          let notify = document.createElement("h3")
          notify.id = "notify"
        left.innerHTML = ""
       let wrapBatOrBowlBtn = document.createElement("div")
       wrapBatOrBowlBtn.id = "wrapbatorbowlbtn"
       tossBtn.appendChild(wrapBatOrBowlBtn)
        right.appendChild(notify)
      

            if(i.innerHTML == "bat"){
           
              notify.innerHTML = "youre batting"
              let batting = document.createElement("button")
              batting.className = "optionsss"
              wrapBatOrBowlBtn.appendChild(batting)
              batting.innerHTML = "bat"
            }
            else if(i.innerHTML == "bowl"){
              
              notify.innerHTML = "youre bowling"
              let bowling = document.createElement("button")
              bowling.className = "optionsss"
              wrapBatOrBowlBtn.appendChild(bowling)
              bowling.innerHTML = "bowl"
            }


            let battingOrBowling = document.querySelectorAll(".optionsss")
            battingOrBowling.forEach((i)=>{
              i.addEventListener("click",()=>{
                let random = Math.floor(Math.random()*4)
                left.innerHTML = random
              })
            })
          })
        })

     
       
      });
    });
  }
}
