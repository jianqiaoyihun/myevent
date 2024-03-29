var article = {
    search: function(obj, callback) {
        $.get(URL.ADMIN_ARTICLE_SEARCH, { 'page': obj.page, 'type': obj.type, 'state': obj.state, "id": obj.id }, function(res) {
            callback(res)
        })
    },
    delete: function(id, callback) {
        $.get(URL.ADMIN_ARTICLE_DELETE, { id: id }, function(res) {
            callback(res)
        })
    },
    publish: function(obj, callback) {
        $.ajax({
            url: URL.ADMIN_ARTICLE_PUBLISH,
            data: obj,
            processData: false, // 不要让jquery去处理formData数据
            contentType: false, // 不设置默认的请求头
            type: 'post',
            success: function(res) {
                callback(res)
            }
        })

    },
    edit: function(obj, callback) {
        $.ajax({
            url: URL.ADMIN_ARTICLE_EDIT,
            data: obj,
            processData: false, // 不要让jquery去处理formData数据
            contentType: false, // 不设置默认的请求头
            type: 'post',
            success: function(res) {
                callback(res)
            }

        })
    },
    count: function(callback) {
        $.get(URL.ADMIN_ARTICLE_COUNT, function(res) {
            callback(res)
        })
    }
}