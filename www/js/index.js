function get(){
    var a=2;
    a=a*a;
    getlength();
}

function getlength(){
    
    var a=document.getElementById("t1").value;
    var l=a.length;
    document.getElementById("sp1").innerHTML= " " + l;
}
