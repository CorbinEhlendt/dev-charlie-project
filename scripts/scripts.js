$( document ).ready(function() {
    console.log( "hey cumbie, don't click on the octocat" );

    $('#secretCat').click(

        function(){
            $(this).css("background-color", "yellow");
            $('https://www.youtube.com/watch?v=6_hl8AB7Uf0').click(function(){ MyFunction(); return false;
            // alert('never use alert');
            }
    ); 
    
});
