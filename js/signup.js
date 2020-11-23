tippy('#fname', {
   content: "<strong>Enter First Name</strong>",
    placement: 'left',
    arrow: true,
    arrowType: 'round',
    animation: 'perspective',
    theme: 'light',
    duration: 500,
    delay: 1000,
   
  })
tippy('#lname', {
   content: "<strong>Enter Last Name</strong>",
    placement: 'left',
    arrow: true,
    followCursor: true,
    animation: 'perspective',
    theme: 'light',
   
  })


$(document).ready(function(){
  $("#sub").click(function(){
    $("#panel").hide();
  });
 $("#sub1").click(function(){
 
    $("#div1").fadeIn(3000);
  });

 $('span').css('display','none');
   $('#bday').change(function(){
   		$(this).css({"background-color":"#89C2F6","color":"white"})
     
   })
  
  
   $('#bday').focus(function(event){
   	
   })

  $('#bday').change(function(){
   		$(this).css({"background-color":"red","color":"white"})
     
   });
});
