$(function(){
   $(".right-box__titulo").click(function(e){
            
         e.preventDefault();
     
         var contenido=$(this).next(".right-box__content");
         var title=$(this).next(".right-box__titulo");
 
         if(contenido.css("display")=="none"){ //open		
          $(".right-box__titulo").removeClass("open");
          $(".right-box__content").slideUp(250);		
          contenido.slideDown(250);	
          $(this).addClass("open");
         }
         else{ //close		
           contenido.slideUp(250);
           $(this).removeClass("open");	
           
         }
 
       });
 });


