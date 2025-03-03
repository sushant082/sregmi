var p1Choice, p2Choice, turn;

function startgame(){
    p1Choice = document.getElementById("p1-choice").value;
    p2Choice = document.getElementById("p2-choice").value;
    // console.log("P1 chooses: "+ p1Choice);
    // console.log("P2 chooses: "+ p2Choice);
    document.getElementById("msg-area").innerHTML = "Player 1 attack now";
    turn = 1;
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
