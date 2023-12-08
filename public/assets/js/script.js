
$(function() { //quand le document est pret
    //NAVIGATEUR WIDTH
    var search =680;  //input origin width
    var search_dx =520; //input dx
    
     if($(window).width() <768) {//navigateur charger      
         $( ".alink" ).removeClass( "dv_faq1" ); //LOGO DEBORD
     } else if($(window).width() >=768) {
         $( ".alink" ).addClass( "dv_faq1" );//LOGO DEBORD
     }
     $(window).resize(function() { //navigateur redimensionner
         if($(window).width() <768) { 
             $( ".alink" ).removeClass( "dv_faq1" ); 
         } else if($(window).width() >=768) {
             $( ".alink" ).addClass( "dv_faq1" );
         }
     });
 });