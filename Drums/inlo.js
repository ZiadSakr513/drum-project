for(var i=0; i < document.querySelectorAll(".drum").length; i=i+1){

document.querySelectorAll("button")[i].addEventListener("click",function (){
    
  switch(this.innerHTML){
      case "w":
      
   var tom1= new Audio("tom-1.mp3");
      tom1.play();
          break;
      case "a":      
          
var tom2= new Audio("tom-2.mp3");
      tom2.play();          
          break;
     case "s":      
          
var tom3= new Audio("tom-3.mp3");
      tom3.play();          
          break;
     case "d":      
          
var tom4= new Audio("tom-4.mp3");
      tom4.play();          
    break;
           case "j":      
          
var snare= new Audio("snare.mp3");
      snare.play();          
        break;
           case "k":      
                    
var crash= new Audio("crash.mp3");
      crash.play();          
        break;   

         case "l":      
 
          var bass= new Audio("kick-bass.mp3");
      bass.play();          
        break;
          
          
      default: console.log(this.innerHTML);
          
  }
});

}

document.addEventListener("keypress",function(){
    
    switch(event.key){
      case "w":
       
   var tom1= new Audio("tom-1.mp3");
      tom1.play();
    colorBox.style.backgroundColor = '#FF0000';        
          break;
      case "a":      
          
var tom2= new Audio("tom-2.mp3");
      tom2.play();          
          break;
     case "s":      
          
var tom3= new Audio("tom-3.mp3");
      tom3.play();          
          break;
     case "d":      
          
var tom4= new Audio("tom-4.mp3");
      tom4.play();          
    break;
           case "j":      
          
var snare= new Audio("snare.mp3");
      snare.play();
             colorBox.style.backgroundColor = 'black';
        break;
           case "k":      
                    
var crash= new Audio("crash.mp3");
      crash.play();          
        break;   

         case "l":      
 
          var bass= new Audio("kick-bass.mp3");
      bass.play();          
        break;
    
}})

document.querySelectorAll("button").addEventListener("click",function() {
  style.transition = "background-color 1s";
  style.backgroundColor = "#FF0000";        
});