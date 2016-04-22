var turn = "x";
 document.getElementById('message').innerHTML = "the turn of " + turn ;   
 
 function check(btnid) {
    console.log(btnid);
    document.getElementById(btnid).value = turn ;
    if ( turn === "o"){
        turn = "x" ;
    }
    else {
        turn = "o" ;
    }
    document.getElementById('message').innerHTML = "the turn of " + turn ;   
 }