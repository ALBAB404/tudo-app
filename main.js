$(document).ready(function () {
    
    $('.add-task').keypress(function(e){
        if (e.keyCode == 13 && $('.add-task').val() != '') {
          var task =   $(' <div class="task"></div>').text($('.add-task').val());
          
         var del = $('<i class="fa fa-trash text-danger ms-2"></i>').click(function () {

            var d = $(this).parent();
            d.fadeOut(function () {
                d.hide();
            })
            
          });
        var ok =  $('<i class="fa fa-check text-primary "></i>').click(function () {
            var done = $(this).parent();
            $('.ctext').append(done);
            $(this).hide();
             
          });



          task.append(del, ok);
          $('.text').append(task);
          $('.add-task').val('');



        }
    });

    


});