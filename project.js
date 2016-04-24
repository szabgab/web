var n= Math.floor(Math.random()*30);
console.log(n);

for (;;) {
    var n1= (window.prompt("enter number"));
    if (n == n1) {
        document.write("Congratulation! You won the game");
        break;
    } else {
        if (n > n1) {
            document.write("your number is to small<br>");
        } else {
            document.write("your number is to big<br>");
        }
    }
}
