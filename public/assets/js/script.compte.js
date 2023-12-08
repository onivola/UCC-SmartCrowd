 
$(function() { //quand le document est pret
    
    function checkAmount(amount,capital) {
        //console.log(amount);
        if(amount=="") {
            return "empty";
        }
        
        else if(Math.floor(amount) == amount && $.isNumeric(amount) && parseInt(amount)<=parseInt(capital)) {
            //alert('yes its an int!'); e
            console.log(amount);
            console.log(capital);
            return "valid";
        }
        else if(Math.floor(amount) == amount && $.isNumeric(amount) && parseInt(amount)>parseInt(capital)) {
            //alert('yes its an int!'); e
            return "no_fund";
        } else {
            return "empty";
        }
    }

    $( "#button_withdraw" ).click(function() { //input prenom
        var ok_amount=false;  //variable test
        //MAIL
        var amount = $( "#in_amount" ).val();
        var capital = $("#in_capital").val();
        if(checkAmount(amount,capital)=="empty") {
            $('#valid_fund').hide(); 
            $( "#in_amount" ).removeClass( "is-valid" ); 
            $( "#in_amount" ).addClass( "is-invalid" );
            $('#valid_amount').show();
            ok_amount = false;
        }
        else if(checkAmount(amount,capital)=="no_fund") { //email valide
            $('#valid_amount').hide(); 
            $( "#in_amount" ).removeClass( "is-valid" ); 
            $( "#in_amount" ).addClass( "is-invalid" );
            $('#valid_fund').show();
            
            ok_amount=false;
        }
        else if(checkAmount(amount,capital)=="valid") { //email valide
            $('#valid_amount').hide(); 
            $( "#in_amount" ).removeClass( "is-invalid" ); 
            $( "#in_amount" ).addClass( "is-valid" );
            
            ok_amount=true;
        }
        
       
        if(ok_amount==true) {
            //$( "#form_withdraw" ).submit();
        }
       
      
    });
 
 });