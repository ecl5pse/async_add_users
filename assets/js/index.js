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
    .then(appendUsersToList)
    .catch(console.error);


function appendUsersToList(users) {


    const usersListElem = document.getElementById('usersList');

    users.forEach(
        user => {
            usersListElem.appendChild(createUsersList(user))
        }
    )

}


function createUsersList(user) {

    const userListItem = createUserListItem(user);
    userListItem.appendChild(createUserPictureContainer(user));
    userListItem.appendChild(createUserFullName(user));

    return userListItem;

}


function createUserListItem(user) {

    const userListItem = document.createElement("li");
    userListItem.setAttribute('id', user.id);
    userListItem.classList.add('userListItem');

    userListItem.onclick = function () {

        if (user.id < 2) {
            userListItem.style.backgroundColor = 'red';
        } else {
            userListItem.style.backgroundColor = 'green';
        }

    };

    userListItem.addEventListener('click',userListItem);
    return userListItem;

}


function createUserPictureContainer(user) {

    const createUser = document.createElement('div');
    createUser.classList.add("profilePictureContainer");
    createUser.append(createUserPicture(user));
    return createUser;
}

function createUserPicture(user) {

    const createUserPicture = document.createElement('img');
    createUserPicture.setAttribute('src', user.profilePictureSrc);
    return createUserPicture;
}


function createUserFullName({name, surname}) {

    const usersFullName = document.createElement('h3');
    usersFullName.classList.add('userFullName');
    usersFullName.innerText = `${name} ${surname}`;


    return usersFullName;

}














