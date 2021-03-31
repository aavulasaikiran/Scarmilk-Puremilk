function signup(){
    event.preventDefault();
    

   var  mobile= document.getElementById("mobilenumber").value;
    var password=document.getElementById("password").value;
    var username=document.getElementById("username").value;
    var emailId=document.getElementById("emailId").value;

     var user ={
        username: username,
        password: password,
        mobile: mobilenumber,
        emailId:emailId
        }
        console.log(user);

        var http= new XMLHttpRequest();
        http.open('POST',"http://localhost:9013/register");
        http.setRequestHeader('Content-type', 'application/json');
        http.send( JSON.stringify(user));
        http.onreadystatechange = function(){
            if(http.readyState == 4 && http.status == 200) {
               console.log(this.responseText);
            
            var response=JSON.parse(this.responseText)
            

            }
            // console.log(response.token)
            if(response.token){
                localStorage.setItem('token',JSON.stringify(response.token))
                localStorage.setItem('username',JSON.stringify(user.username))
                window.location.href="dashboard.html"
            }
            
            }
        }
