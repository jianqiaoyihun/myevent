var user = {
    login: function(name, pwd, callback) {
        $.post(URL.ADMIN_LOGIN, {
            user_name: name,
            password: pwd
        }, function(res) {
            callback(res)
        })
    }
}