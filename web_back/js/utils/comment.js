var comment = {
    count: function(callback) {
        $.get(URL.ADMIN_COMMENT_COUNT, function(res) {
            callback(res)
        })
    },
    search: function(obj, callback) {
        $.get(URL.ADMIN_COMMENT_SEARCH, { page: obj.page, perpage: obj.perpage }, function(res) {
            callback(res)
        })
    }
}