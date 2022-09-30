function changeContent()
{
rowNumber = prompt("Input the Row number(1,2,3)", "0");
columnNumber = prompt("Input the Column number(1,2)","0");
content = prompt("Input the Cell content");  
var x=document.getElementById('myTable').rows[parseInt(rowNumber,10)].cells;
x[parseInt(columnNumber,10)].innerHTML=content;
}