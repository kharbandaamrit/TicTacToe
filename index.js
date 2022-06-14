let player='X';
let gameOver=false;
var changePlayer=()=>{
    return player === 'X' ? '0' : 'X';
}
var count=0;
var checkWon=()=>{
let boxTexts=document.getElementsByClassName('boxText'); 
let winPos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
winPos.forEach(ele =>{
    if(boxTexts[ele[0]].innerHTML === boxTexts[ele[1]].innerHTML && 
        boxTexts[ele[1]].innerHTML === boxTexts[ele[2]].innerHTML &&
        boxTexts[ele[0]].innerHTML !== ""){
            document.getElementById("result").innerHTML= boxTexts[ele[0]].innerHTML + "won";
            document.querySelector("img").style.width="300px";
            gameOver=true;
        }
})

}
let boxes=document.getElementsByClassName("box");
//console.log(boxes);
Array.from(boxes).forEach(box=>{
    let boxText=box.querySelector(".boxText");
   //console.log(boxText);
   
    box.addEventListener('click',()=>{
        if(boxText.innerHTML ==="" && !gameOver){
        boxText.innerHTML=player;
        player=changePlayer();
        checkWon();
        count++;
        if(count===9 && !gameOver){
            document.getElementById("result").innerHTML= "Draw!";

        }
        console.log(count);
            document.getElementsByClassName("player")[0].innerHTML=player;
        }

    });
});
//reset button
let reset=document.getElementsByClassName("reset")[0];
reset.addEventListener('click',()=>{
    let boxTexts=document.querySelectorAll(".boxText");
    boxTexts.forEach(boxText=>{
        boxText.innerHTML="";
    });
    player='X';
    document.querySelector('img').style.width="0px";
    document.getElementById("result").innerHTML= "Running";
    document.getElementsByClassName("player")[0].innerHTML=player;
    gameOver=false;

})