$( document ).ready(function() {
    console.log( "hey cumbie, don't click on the octocat" );

    $('#secretCat').on("click",function(){
        window.open('https://www.youtube.com/watch?v=6_hl8AB7Uf0','_blank');

        // function(){
        //     $(this).css("background-color", "yellow");
        //     $("#secretCat").on("click",function(){
        //          window.open('www.yourdomain.com','_blank');
            // $('https://www.youtube.com/watch?v=6_hl8AB7Uf0').click(function(){ MyFunction(); return false; });
            // alert('never use alert');
            }
    ); 
    
});
