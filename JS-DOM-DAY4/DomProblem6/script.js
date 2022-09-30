
function getOptions()
{
var items=document.getElementById("mySelect");
var display = "No. of items : ";

l=document.getElementById("mySelect").length;  
display = display+l;
for (var i=0;i<items.length;i++)
  {
    display = display + "\n" + items.options[i].text;
  }
alert(display);
}