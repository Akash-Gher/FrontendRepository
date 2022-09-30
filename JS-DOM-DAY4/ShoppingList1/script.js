
 var addbtn=document.getElementById('addbtn');

var list=[];
function addItemList(){
    console.log("funnction add item is running");

  const  ul=document.querySelector('.list-group');
  const  inputItem=document.querySelector('#inputItem').value;

  const li=document.createElement('li');
   console.log(inputItem);
   if (inputItem === '') {
    alert("You must write something!");
  } 
  var textnode = document.createTextNode(inputItem);
  
  var close=document.createElement('button');

  close.innerText="Delete";
  
  li.appendChild(textnode)
  li.appendChild(close);
  ul.appendChild(li);

close.addEventListener("click",()=>{
    li.style.display = "none";
})

}


//addbtn.addEventListener("click,addItemList")

// div.style.display = "none";