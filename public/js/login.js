
$(document).ready(function () {
  $('#login').submit(function (evt) {
    const formData = $(this)
        .serializeArray()
        .reduce(function (obj, e) {
            obj[e.name] = e.value;
            return obj
          }, {});

    $.post('/getPwd', formData)
        .done(function (data) {
          formData.password = data;
          $.post('http://localhost:8000/api/login', formData)
              .done(function (resp) {
                localStorage.token = resp.token;
                window.location = '/regalos-disponibles'
              })
              .fail(function (err) {
                alert('No autorizado');
                console.log(err)
              })
        });
    event.preventDefault();
  })
});