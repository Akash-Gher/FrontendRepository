
let boldText;
window.onload = getboldText();
 
// Collect all <strong> tags
function getboldText() 
{
  boldText = document.getElementsByTagName('strong'); 
}

function highlightBoldText() 
{
   for (let i=0; i<boldText.length; i++)
   {                                                    
    boldText[i].style.color  = "red";
    }
}

function mouseout()
{
  for (let i=0; i<boldText.length; i++) 
  {
    boldText[i].style.color = "black";
  }
}

