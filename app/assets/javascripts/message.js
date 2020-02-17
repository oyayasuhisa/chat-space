$(function(){
  function buildHTML(message){
    if(message.image){
     let html =
     `<div class="message" data-message-id=${message.id}>
          <div class="message__info">
              <div class="message__user__name">
                ${message.user_name}
              </div>
              <div class="message__data">
                ${message.created_at}
              </div>
            </div>
              <div class="message__text">
              <div class="lower-message__content">
                ${message.content}
              </div>        
          </div>
          <img src=${message.image} >
      </div>`
      return html;
      } else {
      let html =
      `<div class="message" data-message-id=${message.id}>
          <div class="message__info">
              <div class="message__user__name">
                ${message.user_name}
              </div>
              <div class="message__data">
                ${message.created_at}
              </div>
          </div>
              <div class="message__text">
              <div class="lower-message__content">
                ${message.content}
              </div>        
          </div>
      </div>`
      return html;
      };
    }
  $('#new_message').on('submit', function(e){
     e.preventDefault()
     let formData = new FormData(this);
     let url = $(this).attr('action');
     $.ajax({
       url: url,
       type: "POST",
       data: formData,
       dataType: 'json',
       processData: false,
       contentType: false
     })
     .done(function(data){
       var html = buildHTML(data);
       $('.messages').append(html);
       $('form')[0].reset();
       $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
       $(".form__submit").prop('disabled',false);
     })
     .fail(function(){
       alert("メッセージ送信に失敗しました")
     });
     return false;
  });
});
