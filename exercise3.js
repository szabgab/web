a = 0;
function check() {
    var x = document.getElementById("number");
    var r = x.value ;
    if (a<r){
        a++;
        r%a === 0 ;
        document.write ("hi")
    }
}