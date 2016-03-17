/* url for avatar image:
http://i.imgur.com/87kIXSN.jpg
*/
$(document).ready(function() {
    
    $('button').click(function(){
        var to_post = $("#message").val();
        console.log("yo" + to_post + "the rest");
        element = '<div class="posts"><img src="http://i.imgur.com/87kIXSN.jpg" alt="avatar"><span>  ' + to_post + '  </span></div>';
        $('#wall').prepend(element);
    });
    
    
});
