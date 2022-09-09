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
    $('.post-see-more').click(function(){
        $(this).hide();
        $('.post-row-hide').addClass('show');
        $('.post-see-less').addClass('show');
    })
    
    $('.post-see-less').click(function(){
        $('.post-see-more').show();
        $('.post-overflow-btn').removeClass('show');
        $('.post-see-less').removeClass('show');
    })
  })