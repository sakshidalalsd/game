let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgame=document.querySelector("#newg");
let message=document.querySelector("#msg");
let contain=document.querySelector(".msg-contain");
 let turn0=true;


const winPatterns=[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],
];
const resetit=()=>{
  turn0=true;
  enableit();
  contain.classList.add("hide");
}

  boxes.forEach((x)=>{
    x.addEventListener("click" ,()=>{
         
         if(turn0){
         x.innerText="0";
         turn0=false;
         }else{
         x.innerText='X';
         turn0=true;
        }
        x.disabled=true;
        checkWinner();
    });
  });
  
  const disableit=()=>{
    for( let box of boxes){
      box.disabled=true;
    }
  };
  const enableit=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
      
    }
  }
  const showwinner=(winner)=>{
    message.innerText=`congratulations the winner is ${winner}`;
    contain.classList.remove("hide");
    disableit();
  }
  const checkWinner =()=> {
    for( let pattern of winPatterns ){
      console.log(pattern[0] ,pattern[1],pattern[2]);
     let pos1=boxes[pattern[0]].innerText;
     let pos2= boxes[pattern[1]].innerText;
     let pos3= boxes[pattern[2]].innerText;
     if(pos1!="" && pos2!="" && pos3!=""){
     if(pos1==pos2 && pos2==pos3){
      console.log("winner" ,pos1);
      showwinner(pos1);
     
     }
    }
  }
};
newgame.addEventListener("click", resetit);
resetbtn.addEventListener("click",resetit);