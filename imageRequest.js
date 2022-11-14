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

function loadImage() {
    'use strict';
 
    var body = document.querySelector('body'),
        myImage = new Image();
  
    myImage.crossOrigin = "anonymous"; 
    
   
    imgLoad('https://www.nme.com/wp-content/uploads/2022/08/Sonic-Frontiers.jpg').then(function (response) {
       
        var imageURL = window.URL.createObjectURL(response);
        myImage.src = imageURL;
        body.appendChild(myImage);
       
    }, function (Error) {
        console.log(Error);
    });
}

loadImage();