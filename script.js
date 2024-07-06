let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");

let turno=true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         if(turno){
//             box.innerText="O";
//             turno=false;
//         }else{
//             box.innerText="X";
//             turno=true;
//         }
//     });
// });

let cnt=0;

for(let box of boxes){
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
            console.log(turno);
        }else{
            box.innerText="X";
            turno=true;
            console.log(turno);
        }
        cnt++;
        box.disabled= true;
        let status=checkwinner();
        console.log(status);

        if(cnt===9){
            gamedraw();
        }
    });
}

//console.log(turno);

function gamedraw(){
    msg.innerText="Game was a draw";
    document.querySelector(".msg-container").classList.remove("hide");
}

function show_winner(winner){
    msg.innerText="Congratulations! Winner is "+ winner;
    document.querySelector(".msg-container").classList.remove("hide");
    disable_all_box();
}

function disable_all_box(){
    for( box of boxes){
        box.disabled=true;
    }
}

function checkwinner(){
    for(let pattern of winPatterns){
        let val=[];
        for(let i=0;i<3;i++){
            val.push(boxes[pattern[i]].innerText);
        }

        if(val[0]===val[1] && val[1]===val[2] && val[0]!=""){
            show_winner(val[0]);
            return true;
        }
    }
}

let reset_buttons=document.querySelectorAll(".reset");


function reset_game(){
    turno=true;
    cnt=0;
    for( box of boxes){
        box.disabled=false;
        box.innerText="";
    }

    document.querySelector(".msg-container").classList.add("hide");
}


for(reset_button of reset_buttons){
    reset_button.addEventListener("click", reset_game);
}



