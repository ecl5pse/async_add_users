'use strict';


/*function loadUser(resolve, reject) {
    const request = new XMLHttpRequest();


    request.onload = function () {
       const user = JSON.parse(request.responseText);
        resolve(user)
    };

    request.onerror = function () {
        reject(new Error(`${this.status}: ${this.statusText}`))
    };

    request.open('GET', "./user.json");
    request.send();

}



new Promise(loadUser)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });*/


fetch('./user.json')
    .then(response => response.json())
    .then( appendUsersToList )
    .catch(console.error);




function appendUsersToList(users) {

}






























