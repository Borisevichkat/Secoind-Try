$('#offer-form').on('submit', function(event) {
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function (data) {
      $(".PopUp_hidden").removeClass([PopUp_hidden]),
      $('.success').html(data + ', Ваша форма отправлена!')
      
    }
  })
  
});