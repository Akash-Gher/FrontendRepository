
console.log("validate script running");

function validation(){
console.log("validation is working ");

var name=document.myform.name.value;  
var password=document.myform.password.value;  
var number=document.myform.number.value;
var countryCode=document.myform.countryCode.value;

  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<8){  
  alert("Password must be at least 8 characters long.");  
  return false;  
  }
  else if(number.length<10){
    alert("Mobile Number  must be at least 10 digits long.");  
    return false;
  }else if(countryCode.length>4){
    alert("country code almost be consist of 3 to  4 digits Ex 1-(369)");  
    return false;
  }
else{
    alert("Data Validate successfully");  
}
}