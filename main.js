
var currentIndex = 0;

var images = ['1','2','3','4','5'];

function change()
{

 $('#rotator').fadeIn(2000);
 $('#rotator').attr('src',"images/rotate" + images[currentIndex] +".jpg");
  
  if(currentIndex == 4)
  {
  	  currentIndex = 0;
  }else{
  	 currentIndex+=1;
  }

 }


 setInterval(change, 3000);