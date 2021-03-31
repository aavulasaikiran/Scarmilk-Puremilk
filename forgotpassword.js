function forgotpassword(){
    event.preventDefault();
    

//    var  mobile= document.getElementById("mobilenumber").value;
var emailId=document.getElementById("emailId").value;
    
    
    

     var user ={
        emailId:emailId,
    
        role:"customer",
    
        }
        console.log(user);

        var http= new XMLHttpRequest();
        http.open('POST',"http://localhost:9013/forgotpassword");
        http.setRequestHeader('Content-type', 'application/json');
        http.send( JSON.stringify(user));
        http.onreadystatechange = function(){
            if(http.readyState == 4 && http.status == 200) {
               console.log(this.responseText);
               
          
}  }
        }