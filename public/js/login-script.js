function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function login() {
    console.log()

    $.ajax({
        url: '/login',
        type: 'POST',
        data: {
            username: $('#login-form #username').val(),
            password: $('#login-form #password').val()
        }
    }).then(data => {
        if (data.token) {
            setCookie('token', data.token, 1) 
        } else {
            alert('The Username or Password is Incorrect')
        }

    }).catch(err => {
        console.log(err)
    })
}
