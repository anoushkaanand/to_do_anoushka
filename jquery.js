$(document).ready(function() { 
  
    // FETCHING DATA FROM JSON FILE 
    $.getJSON("todos.json",function(data) {
            var list_data ='';
            $.each(data, function (key, value) {
                list_data += '<tr>';
                list_data += '<td>' + value.userId + '</td>';
                list_data += '<td>' + value.id + '</td>';
                list_data += '<td>' + value.title + '</td>';
               if(value.completed==true){
                   list_data += '<td>' + '<input type="checkbox" checked=true disabled=true>';
                   }
                   else{
                    list_data += '<td>' + '<input type="checkbox" onchange="check();" class="check_boxes">';
                   }
  
                 list_data += '</tr>';
            });
            $('#ltable').append(list_data);
        } );
        
  });

var error= document.getElementById("error");
var checkbx= document.getElementsByClassName("check_boxes");

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