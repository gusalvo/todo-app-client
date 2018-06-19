"use strict";

(function(window, session, $) {
    var sessionUuid = session.get();

    function updateTodo(id, todoModel, callbackFunction) {
        // ajax call to post method
    }

    function createTodo(todoModel, callbackFunction) {
        // ++++++++++

        var obj = new XMLHttpRequest(),
        method = "POST",
        url = "http://192.168.20.173:7000/todos";

        obj.open(method, url, true);
        obj.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        obj.addEventListener('progress', function (x) {
        // console.log('progress', x);
        });

        obj.addEventListener('load', function (x) {

            var response = JSON.parse(x.target.response);

            callbackFunction(response);


        });

        obj.addEventListener('error', function (x) {
        // console.log('error', x);
        });

        obj.addEventListener('abort', function (x) {
        // console.log('abort', x);
        });

        var json = JSON.stringify(todoModel);

        obj.send(json);


        // ++++++++++
    }

    function getTodos(callbackFunction) {
        
        $.get({
            url: 'http://192.168.20.173:7000/todos?uuid='+sessionUuid,
            success: function(data) {
                // console.log(data)

                callbackFunction(data);
            }
        });

    }

    // Export to window
    window.app = window.app || {};
    window.app.Store = {
        updateTodo: updateTodo,
        createTodo: createTodo,
        getTodos: getTodos
    };
})(window, window.app.Session, jQuery);
