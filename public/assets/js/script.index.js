
$(function() { //quand le document est pret
    function checkMail(email) { //mail validation
        if(email=="") {
            return "empty";
        }
        else if (/^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/.test(email)) { //email valide
          return "valid";
        } else {  //email invalide
            return "notvalid";
        }
    }
    function checkMdp(mdp) { //mdp validation
        if(mdp=="") {
            return "empty";
        }
        else if(mdp.length<8) {
            return "empty";
        }
        else if(mdp.length>50) {
            return "empty";
        } else {
            return "valid";
        }
    }
    function checkPm(nom) {
        if(nom=="") {
            return "empty";
        }
        else if(nom[0]!='U') {
            return "empty";
        } else {
            return "valid";
        }
    }
    function checkNom(nom) {
        if(nom=="") {
            return "empty";
        }
        else if(nom.length>50) {
            return "empty";
        } else {
            return "valid";
        }
    }
    $( "#button_login" ).click(function() { //input prenom
        var ok_mail=false;  //variable test
        var ok_mdp=false;
        //MAIL
        var email = $( "#inl_email" ).val();
        if(checkMail(email)=="empty" || checkMail(email)=="notvalid") {
            $( "#inl_email" ).removeClass( "is-valid" ); 
            $( "#inl_email" ).addClass( "is-invalid" );
            $('#validl_email').show();
            ok_mail = false;
        }
        else if (checkMail(email)=="valid") { //email valide
            $('#validl_email').hide(); 
            $( "#inl_email" ).removeClass( "is-invalid" ); 
            $( "#inl_email" ).addClass( "is-valid" );
            
            ok_mail=true;
        }
        var mdp = $( "#inl_mdp" ).val();
        if(checkMdp(mdp)=="empty" || checkMdp(mdp)=="notvalid") {
            $( "#inl_mdp" ).removeClass( "is-valid" ); 
            $( "#inl_mdp" ).addClass( "is-invalid" );
            $('#validl_mdp').show();
            ok_mdp = false;
        }
        else if (checkMdp(mdp)=="valid") { //email valide
            $('#validl_mdp').hide(); 
            $( "#inl_mdp" ).removeClass( "is-invalid" ); 
            $( "#inl_mdp" ).addClass( "is-valid" );
            
            ok_mdp=true;
        }
        
       
        if(ok_mail==true && ok_mdp==true) {
            $( "#form_login" ).submit();
        }
       
      
    });
    $( "#button_singin" ).click(function() { //input prenom
        var ok_username=false;
        var ok_mail=false;  //variable test
        var ok_mdp=false;
        var ok_pm=false;
        //MAIL
        var username = $( "#in_username" ).val();
        if(checkNom(username)=="empty") {
            
            $( "#in_username" ).removeClass( "is-valid" ); 
            $( "#in_username" ).addClass( "is-invalid" );
            $('#valid_username').show();
            ok_username = false;
        }
        else if (checkNom(username)=="valid") { //email valide
            $('#valid_username').hide(); 
            $( "#in_username" ).removeClass( "is-invalid" ); 
            $( "#in_username" ).addClass( "is-valid" );
            ok_username=true;
        }
        var email = $( "#in_email" ).val();
        if(checkMail(email)=="empty" || checkMail(email)=="notvalid") {
            $( "#in_email" ).removeClass( "is-valid" ); 
            $( "#in_email" ).addClass( "is-invalid" );
            $('#valid_email').show();
            ok_mail = false;
        }
        else if (checkMail(email)=="valid") { //email valide
            $('#valid_email').hide(); 
            $( "#in_email" ).removeClass( "is-invalid" ); 
            $( "#in_email" ).addClass( "is-valid" );
            
            ok_mail=true;
        }
        var mdp = $( "#in_mdp" ).val();
        if(checkMdp(mdp)=="empty" || checkMdp(mdp)=="notvalid") {
            $( "#in_mdp" ).removeClass( "is-valid" ); 
            $( "#in_mdp" ).addClass( "is-invalid" );
            $('#valid_mdp').show();
            ok_mdp = false;
        }
        else if (checkMdp(mdp)=="valid") { //email valide
            $('#valid_mdp').hide(); 
            $( "#in_mdp" ).removeClass( "is-invalid" ); 
            $( "#in_mdp" ).addClass( "is-valid" );
            
            ok_mdp=true;
        }
        var pm = $( "#in_pm" ).val();
        if(checkPm(pm)=="empty" || checkPm(pm)=="notvalid") {
            $( "#in_pm" ).removeClass( "is-valid" ); 
            $( "#in_pm" ).addClass( "is-invalid" );
            $('#valid_pm').show();
            ok_pm = false;
        }
        else if (checkPm(pm)=="valid") { //email valide
            $('#valid_pm').hide(); 
            $( "#in_pm" ).removeClass( "is-invalid" ); 
            $( "#in_pm" ).addClass( "is-valid" );
            
            ok_pm=true;
        }
        
       
        if(ok_username==true && ok_mail==true && ok_mdp==true && ok_pm==true) {
            $( "#form_singin" ).submit();
        }
       
      
    });
 });