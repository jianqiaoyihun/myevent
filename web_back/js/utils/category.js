var cate = {
    show: function(callback) {
        $.get(URL.ADMIN_CATE_SEARCH, function(res) {
            callback(res)
        })
    },
    add: function(name, slug, callback) {
        $.post(URL.ADMIN_CATE_ADD, { name: name, slug: slug }, function(res) {
            callback(res)
        })
    },
    delete: function(id, callback) {
        $.post(URL.ADMIN_CATE_DELETE, { id: id }, function(res) {
            callback(res)
        })
    }


}