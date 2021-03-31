function login(){
    event.preventDefault();
    

//    var  mobile= document.getElementById("mobilenumber").value;
var emailId=document.getElementById("emailId").value;
    var password=document.getElementById("password").value;
    
    

     var user ={
        emailId:emailId,
        password: password,
        role:"customer",
    
        }
        console.log(user);

        var http= new XMLHttpRequest();
        http.open('POST',"http://localhost:9013/login");
        http.setRequestHeader('Content-type', 'application/json');
        http.send( JSON.stringify(user));
        http.onreadystatechange = function(){
            if(http.readyState == 4 && http.status == 200) {
              var response = JSON.parse(this.responseText);
              console.log(response);
              if(response.message){
                  document.getElementById("error").innerHTML= response.message;
                  return;
              }
              console.log(response);
              
              if(response.token){
                  localStorage.setItem('token',response.token)
                  localStorage.setItem('currentUser',response.username)
                  window.location.href="dashboard.html"
              }
            
          
}  }
        }