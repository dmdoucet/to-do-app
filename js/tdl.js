//Check off specific item by clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

//Click on X to delete item
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//Adding new item
$("input[type='text']").keypress(function(event){
  if(event.which === 13) {
    //grabbing new item text from input
    let text = $(this).val();
    $(this).val('');
    //create new li and add to ul
    $('ul').append(`<li><span><i class="far fa-trash-alt"></i></span> ${text}</li>`);
  }
});

$('#toggle-form').click(function(){
  $("input[type='text']").fadeToggle();
});
