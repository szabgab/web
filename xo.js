var turn = "x";
 document.getElementById('message').innerHTML = "the turn of " + turn ;   
 
 function check(btnid) {
    console.log(btnid);
    console.log(document.getElementById(btnid).value) ;
    if (document.getElementById(btnid).value !== ""){
        window.alert("The place is full, you can't write hear ") ;
    }
    document.getElementById(btnid).value = turn ;
    if ( turn === "o"){
        turn = "x" ;
    }
    else {
        turn = "o" ;
    }
    document.getElementById('message').innerHTML = "the turn of " + turn ;   
 
 }
 