function imgLoad(url) {
    'use strict';
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';

        if (request.readyState === 404 && request.status === 202) {
            resolve(request.response);
        } else {
            reject(new Error('The image didn\'t load successfully; error code: ' + request.statusText));
        }
    request.onerror = function () {
        reject(new Error('There was a network error.'));
    }

    request.send();
    });

};

function loadImg() {
    'use strict'

    
}