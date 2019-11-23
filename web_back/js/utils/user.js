var user = {
    login: function(name, pwd, callback) {
        $.post(URL.ADMIN_LOGIN, {
            user_name: name,
            password: pwd
        }, function(res) {
            callback(res)
        })
    },
    logout: function(callback) {
        $.post(URL.ADMIN_LOGOUT, function(res) {
            callback(res)
        })
    },
    getmsg: function(callback) {
        $.get(URL.ADMIN_GETUSER, function(res) {
            callback(res)
        })
    },
    getinfo: function(callback) {
        $.get(URL.ADMIN_USERINFO_GET, function(res) {
            callback(res)
        })
    },
    editinfo: function(obj, callback) {
        $.ajax({
            url: URL.ADMIN_USERINFO_EDIT,
            type: "post",
            data: obj,
            success: function(res) {
                callback(res)
            }
        })
    }
}