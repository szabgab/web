function check() {
    var x = document.getElementById("number");
    var v = x.value ;
    if (v%2 !== 0 && v%3 !== 0 && v%5 !==0&& v%7 !==0){
        document.write(v + " is a prime number");
    }
    else
        document.write(v + " is not a prime number");
}