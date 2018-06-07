import API from '../api/index';
export function fetch(settings, callback, obj) {
    return $.ajax($.extend({
        dataType: "jsonp",
        timeout: 10000,
        type: "get",
        success(res) {
            callback(res)
        },
        error(res) {
            console.log(obj)
                //   subpub.emit('loading', false);
                //   reject({ errmsg: '您的网络异常，请稍后重试！' });
        },
    }, settings || {}));
}
export function fetchMenu(productId, callback) {
    var options = {
        productId,
        url:API.userMap
    }
    fetch(options, callback)
}
// export function getUserRoles(userName, callback, obj) {
//     var options = {
//         url: API.userMap
//     }
//     fetch(options, callback, obj)
// }