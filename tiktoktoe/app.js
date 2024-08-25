let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO =true; 
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [2,4,5],
    [6,7,8],
];

const resetGame =()=>{
    turnO = true;
    enablebtns();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText = "N"
            turnO = false;
        }else{
            box.innerText = "M"
            turnO = true;
        }
        box.disabled = true;
        checkthewinner();
    });
});

const enablebtns =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const disablebtns =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations!!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtns();
}

const checkthewinner=()=>{
    for(let pattern of winPatterns){
      let post1val = boxes[pattern[0]].innerText;
      let post2val = boxes[pattern[1]].innerText;
      let post3val = boxes[pattern[2]].innerText;

      if(post1val !="" && post2val != "" && post3val !=""){
        if(post1val === post2val && post2val === post3val){
           console.log("Winner",post1val);
           showwinner(post1val);
        }
      }
    }
};

resetBtn.addEventListener("click",resetGame);