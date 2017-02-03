$(document).ready(function () {
  $.post('http://localhost:8000/api/gifts', {token: localStorage.token})
      .done(function (resp) {
        $.post('/regalos-disponibles', resp)
      })
      .fail(function (err) {
        alert('No autorizado');
        console.log(err)
      })
});