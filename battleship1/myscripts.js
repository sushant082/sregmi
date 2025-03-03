var p1Choice, p2Choice, turn;

function startgame(){
    p1Choice = document.getElementById("p1-choice").value;
    p2Choice = document.getElementById("p2-choice").value;

    if(document.getElementById("msg-area").innerHTML != "Game Ended! Refresh Page to Begin Again"){
        if(p1Choice > 0 && p2Choice > 0){
            turn = 1;
            document.getElementById("msg-area").innerHTML = "Player 1 attack now";
        }
        else{
            document.getElementById("msg-area").innerHTML = "Both players need to enter the location";
        }
    }
};

function endgame(){
    document.getElementById("play-area").remove();
    document.getElementById("msg-area").innerHTML = "Game Ended! Refresh Page to Begin Again";
};

function changecolor(element){
    colorchangeplayer = element.attributes.id.value;
    if(colorchangeplayer == "p1-color-button"){
        document.getElementById("play-area-p1").style.backgroundColor = "red";
    }
    if(colorchangeplayer == "p2-color-button"){
        document.getElementById("play-area-p2").style.backgroundColor = "blue";
    }
};

function gameplay(element){

    guess = element.attributes.value.nodeValue;

    if(turn == 1 && guess == p2Choice){
        var changeElement = "p2-box-"+guess+"-img";
        document.getElementById(changeElement).src = "images/sinking-ship.gif";
        document.getElementById("msg-area").innerHTML = "Player 1 Won!!";
        return;
    }
    else if(turn == 1 && guess != p2Choice){
        turn = 2;
        var changeElement = "p"+turn+"-box-"+guess+"-img";
        document.getElementById(changeElement).src = "images/explode.gif";
        document.getElementById("msg-area").innerHTML = "Player 2 attack now";
        return;
    }

    if(turn == 2 && guess == p1Choice){
        var changeElement = "p1-box-"+guess+"-img";
        document.getElementById(changeElement).src = "images/sinking-ship.gif";
        document.getElementById("msg-area").innerHTML = "Player 2 Won!!";
        return;
    }
    else if(turn == 2 && guess != p1Choice){
        turn = 1;
        var changeElement = "p"+turn+"-box-"+guess+"-img";
        document.getElementById(changeElement).src = "images/explode.gif";
        document.getElementById("msg-area").innerHTML = "Player 1 attack now";
        return;
    }

};


// window.addEventListener("load", function() { 
// 	alert("The Window Has Loaded!");
// });
