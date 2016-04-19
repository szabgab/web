var words =["table" , "head" , "basketball" , "row"];
var w= Math.floor(Math.random()*words.length);
console.log(w); 
var click = 0 ;
var c = document.getElementById("myCanvas"); //מתקן תלייה
var ctx = c.getContext("2d");
ctx.moveTo(100,500);
ctx.lineTo(450,500);
ctx.stroke();
var c = document.getElementById("myCanvas"); 
var ctx = c.getContext("2d");
ctx.moveTo(430,500);
ctx.lineTo(430,10);
ctx.stroke();
var c = document.getElementById("myCanvas"); 
var ctx = c.getContext("2d");
ctx.moveTo(430,10);
ctx.lineTo(70,10);
ctx.stroke();

var c = document.getElementById("myCanvas"); 
var ctx = c.getContext("2d");
ctx.moveTo(150,10);
ctx.lineTo(150,50);
ctx.stroke();

var display_field = document.getElementById('display');
var word = words[w] ;
display_field.innerHTML = " _".repeat(word.length) ;



function check() {
    var input_field = document.getElementById('a');
    var a = input_field.value ;
    console.log(a);
    var n = word.indexOf(a) ;
    console.log(n);
    if (n === -1){
        draw();
    }
    else {
        var y=2*n+1 ;
        var str = display_field.innerHTML;
        display_field.innerHTML = str.substr(0,y) + a + str.substr(y+1);
    }
}


function draw() {
  click++ ;
  console.log(click) ;
    if (click === 1) {
        var elem = document.getElementById('myCanvas'); //ראש
        var ctx = elem.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.lineWidth=1;
        ctx.fillStyle = "white";
        ctx.arc(150,80,40, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    if (click === 2){
        var c = document.getElementById("myCanvas"); //גוף
        var ctx = c.getContext("2d");
        ctx.moveTo(150,120);
        ctx.lineTo(150,290);
        ctx.stroke();  
    }
    if (click === 3){
        var c = document.getElementById("myCanvas"); //יד 1
        var ctx = c.getContext("2d");
        ctx.moveTo(150,180);
        ctx.lineTo(100,100);
        ctx.stroke();    
    }
    if (click === 4){
        var c = document.getElementById("myCanvas"); //יד 2
        var ctx = c.getContext("2d");
        ctx.moveTo(150,180);
        ctx.lineTo(200,100);
        ctx.stroke();         
    }
    if (click === 5){
        var c = document.getElementById("myCanvas"); //רגל 1
        var ctx = c.getContext("2d");
        ctx.moveTo(150,290);
        ctx.lineTo(90,420);
        ctx.stroke();          
    }
    if (click === 6){
        var c = document.getElementById("myCanvas"); //רגל 2
        var ctx = c.getContext("2d");
        ctx.moveTo(150,290);
        ctx.lineTo(220,420);
        ctx.stroke();         
    }
}
        
 // קוד שהמחשב חושב על מילה לכתוב input 1 והמחשב בודק אם יש את האות במילה    
        


