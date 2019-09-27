$(document).on('click','#delete', function () {
    event.preventDefault();

     var muzik2= new Audio( "/audio/finish-him.mp3");
        muzik2.play();
   
    $(this).closest('div').remove();
   
 });