tippy('#usertext', {
   content: "<strong>Enter Username</strong>",
    placement: 'left',
    arrow: true,
    arrowType: 'round',
    animation: 'perspective',
    theme: 'light',
    duration: 500,
    delay: 1000,
   
  })

 $(document).ready(function(){
   $('span').css('display','none');
   $('#passtext').change(function(){
   		$(this).css({"background-color":"#89C2F6","color":"white"})
     
   })
  
  
   $('#passtext').focus(function(event){
   	$('#showdata').css('display','inline');
   })
  });


tippy('#checkb', {
   content: "<strong>Please mark checkbox</strong>",
    placement: 'left',
    arrow: true,
    arrowType: 'round',
    animation: 'perspective',
    theme: 'light',
    
   
  })
tippy('#sub', {
   content: "<strong>Please mark checkbox</strong>",
    placement: 'right',
    followCursor: true,
    animation: 'perspective',
    theme: 'light',
    
   
  })
