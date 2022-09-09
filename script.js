$(document).ready(function(){
    $('.see-more').click(function(){
        $(this).hide();
        $('.row-hide').addClass('show');
        $('.see-less').addClass('show');
    })
    
    $('.see-less').click(function(){
        $('.see-more').show();
        $('.row-hide').removeClass('show');
        $('.see-less').removeClass('show');
    })
  })
  
  $(document).ready(function(){
    $('.see-more').click(function(){
        $(this).hide();
        $('.-row-hide').addClass('show');
        $('.see-less').addClass('show');
    })
    
    $('.see-less').click(function(){
        $('.see-more').show();
        $('.row-hide').removeClass('show');
        $('.see-less').removeClass('show');
    })
  })