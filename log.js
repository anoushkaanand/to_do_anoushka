var username= document.getElementById("username");
var pwd= document.getElementById("pwd");
var error= document.getElementById("error");
var checkbx= document.getElementsByClassName("check_boxes");

function validate(callback)
{
    let user ="admin";
    let pwdf="12345";
    if(username.value==user && pwd.value==pwdf)
    {
        callback();
    }
    else

    {
        error.innerHTML="Invalid Credentials";
        error.style.color="red";
        return false;
    }


function callback(){
    document.getElementById("formv").setAttribute("action","main.html");
}
}

function check(){
    var promise = new Promise(function(resolve,reject){
        count = 0;
        val = false;
        
        for (var i=0; i<checkbx.length; i++) {
        if (checkbx[i].checked === true){
            count++;
            if(count ===5){
                val = true;
                
            }
        }
        }
        if(val){
            resolve("Congrats! 5 Tasks have been Successfully Completed");
        }
    });

    promise.then(function(s){
        alert(s);
    })
}