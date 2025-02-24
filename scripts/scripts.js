$( document ).ready(function() {
    console.log( "hey cumbie, don't click on the seal" );

    $('#secretSeal').click(

        function(){
            $(this).css("background-color", "yellow");
            // alert('never use alert');
            }
    ); 
    
});
