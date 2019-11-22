var article = {
    search: function(obj, callback) {
        $.get(URL.ADMIN_ARTICLE_SEARCH, { 'page': obj.page, 'type': obj.type, 'state': obj.state }, function(res) {
            callback(res)
        })
    },
    delete: function(id, callback) {
        $.get(URL.ADMIN_ARTICLE_DELETE, { id: id }, function(res) {
            callback(res)
        })
    }
}