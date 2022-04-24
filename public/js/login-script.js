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
        if (data._id) {
            window.location.href = 'personal'
        } else {
            alert('The Username or Password is Incorrect')
        }

    }).catch(err => {
        console.log(err)
    })
}
