var _ajax = {

    getHtml: function (url, callback) {

        var token = $("meta[name='csrf-token']").attr("content");
        var header = "X-CSRF-TOKEN";
        var headers = {};
        headers[header] = token;
        $.ajax({
            type: "GET",
            url: url,
            dataType: "html",
            contentType: "text/html; charset=utf-8",
            headers: headers,
            success: function (res, text, xhr) {
                if (callback) {
                    callback(res);
                }
            },
            error: function (xhr) {

            },
            complete: function (data) {
//                if (callback) {
//                    callback(data);
//                }
            }
        });
    },
    get: function (url, callback) {

        var token = $("meta[name='csrf-token']").attr("content");
        var header = "X-CSRF-TOKEN";
        var headers = {};
        headers[header] = token;
        var finalResponse = {
            success: false
        };
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            headers: headers,
            success: function (res, text, xhr) {
                finalResponse = res;
                finalResponse.statusCode = xhr.status;
                return finalResponse;
            },
            error: function (xhr) {
                res = {};
                try {
                    res = JSON.parse(xhr.responseText);
                } catch (e) {
                    finalResponse = res;
                    finalResponse.statusCode = xhr.status;
                    finalResponse.message = "Unknow error occured";
                    return finalResponse;
                }

                finalResponse = res;
                finalResponse.statusCode = xhr.status;
                return finalResponse;
            },
            complete: function (data) {
                if (callback) {
                    callback(finalResponse);
                }
            }
        });
    },
    post: function (url, data, callback) {

        var finalResponse = {
            success: false
        };
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: "json",
            success: function (res, text, xhr) {
                finalResponse = res;
                finalResponse.statusCode = xhr.status;
                return finalResponse;
            },
            error: function (xhr) {
                res = {};
                try {
                    res = JSON.parse(xhr.responseText);
                } catch (e) {
                    finalResponse = res;
                    finalResponse.statusCode = xhr.status;
                    finalResponse.message = "Unknow error occured";
                    return finalResponse;
                }

                finalResponse = res;
                finalResponse.statusCode = xhr.status;
                return finalResponse;
            },
            complete: function (data) {
                if (callback) {
                    callback(finalResponse);
                }
            }
        });
    },
    postFormData: function (url, data, callback) {

        var finalResponse = {
            success: false
        };
        $.ajax({

            url: url,
            type: "POST",
            data: data,
            dataType: "json",
            processData: false,
            contentType: false,
            success: function (res, text, xhr) {
                finalResponse = res;
                finalResponse.statusCode = xhr.status;
                return finalResponse;
            },
            error: function (xhr) {
                res = {};
                try {
                    res = JSON.parse(xhr.responseText);
                } catch (e) {
                    finalResponse = res;
                    finalResponse.statusCode = xhr.status;
                    finalResponse.message = e;
                    return finalResponse;
                }

                finalResponse = res;
                finalResponse.statusCode = xhr.status;
                return finalResponse;
            },
            complete: function (data) {
                if (callback) {
                    callback(finalResponse);
                }
            }
        });
    }
};