var comment = {
    count: function(callback) {
        $.get(URL.ADMIN_COMMENT_COUNT, function(res) {
            callback(res)
        })
    }
}