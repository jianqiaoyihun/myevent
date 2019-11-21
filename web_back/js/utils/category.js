var cate = {
    show: function(callback) {
        $.get(URL.ADMIN_CATE_SEARCH, function(res) {
            callback(res)
        })
    }


}