var article = {
    search: function(obj, callback) {
        $.get(URL.ADMIN_ARTICLE_SEARCH, { 'page': curPage, 'type': type, 'state': status }, function(res) {
            callback(res)
        })
    },
    delete: function(id, callback) {
        $.get(URL.ADMIN_ARTICLE_DELETE, { id: id }, function(res) {
            callback(res)
        })
    }
}