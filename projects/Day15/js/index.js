// https://randomuser.me/api/

const button = document.querySelector("button");
const avatar = document.querySelector('img');
const fullname = document.querySelector("#fullname");
const usernameContent = document.querySelector("#username");
const emailContent = document.querySelector("#email");
const cityContent = document.querySelector("#city");

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
button.addEventListener('click', function () {
    fetch("https://randomuser.me/api/")
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError);
});






function handleErrors(request) {
    if (!request.ok) {
        throw Error(request.status);
    }
    return request;
}

function parseJSON(response) {
    return response.json()
}

function updateProfile(data) {
    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;
    const username = data.results[0].login.username;
    const email = data.results[0].email;
    const city = data.results[0].location.city;
    const image = data.results[0].picture.medium;

    avatar.src = image;
    fullname.textContent = firstName + " " + lastName
    usernameContent.textContent = username;
    emailContent.textContent = email;
    cityContent.textContent = city;
}


function printError(error) {
    console.log("Print Error Function")
    console.log(error);
}
// fetch(url)
// .then(handleErrors)
// .then(parseJSON)
// .then(updateProfile)
// .catch(printError)