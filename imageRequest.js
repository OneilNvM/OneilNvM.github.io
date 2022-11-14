function imgLoad(url) {
    'use strict';
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';

        if (request.readyState === 4 && request.status === 200) {
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
  
    myImage.crossOrigin = ""; 
    
   
    imgLoad('https://cdn.cloudflare.steamstatic.com/steam/apps/1237320/header.jpg?t=1668134681').then(function (response) {
       
        var imageURL = window.URL.createObjectURL(response);
        myImage.src = imageURL;
        body.appendChild(myImage);
       
    }, function (Error) {
        console.log(Error);
    });
}

loadImage();