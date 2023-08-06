const noUserFound = document.querySelector(".error");
async function geturl(url){
    try {
        let response = await fetch("https://api.github.com/users/"+`${url}`);
        let data = await response.json();
        console.log(data.message);
        if(data.message === undefined){
            getRender(data);
            noUserFound.classList.remove("display");
        }else{
            noUserFound.classList.add("display");
        }
    } catch (error) {
        alert("Opps Something went wrong" + error);
    }
};

window.onload = function() {
    let username = 'Amitkarun-singh';
    geturl(username);
};

function getRender(data) {
    const avatarImg = document.querySelector(".user-img");
    const name = document.querySelector("#name");
    const UserGitHubLink = document.querySelector("#user");
    const createDate = document.querySelector(".create-date");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const bio = document.querySelector(".user-bio");
    const repo = document.querySelector("#repos");
    const follower = document.querySelector("#followers");
    const following = document.querySelector("#following");
    const location = document.querySelector("#location");
    const page = document.querySelector("#page");
    const twitter = document.querySelector("#twitter");
    const company = document.querySelector("#company");

    avatarImg.src = `${data?.avatar_url}`;
    name.innerText = `${data?.name}`;
    UserGitHubLink.href = `${data?.html_url}`;
    UserGitHubLink.innerText = `@${data?.login}`;
    datesegments = data.created_at.split("T").shift().split("-");
    createDate.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
    bio.innerText = data.bio == null? "This Profile has No Bio" : `${data.bio}`;
    repo.innerText = data.public_repos;
    follower.innerText = data.followers;
    following.innerText = data.following;
    location.innerText = checkNull(data.location, location) ? `${data?.location}` : "Not Available";
    page.innerText = checkNull(data.blog) ? data.blog : "Not Available";
    page.href = checkNull(data.blog) ? data.blog : "#";
    twitter.innerText = checkNull(data.twitter_username, twitter) ? data.twitter_username : "Not Available";
    twitter.href = checkNull(data.twitter_username, twitter) ? `https://twitter.com/${data.twitter_username}` : "#";
    company.innerText = checkNull(data.company, company) ? data.company : "Not Available";
};

function checkNull(value) {
    return value !== null && value !== undefined && value !== "";
};

const input = document.querySelector("#input-field");
const button = document.querySelector(".Search-btn");

button.addEventListener("click", ()=>{
    let name = input.value;
    if(name !== ""){
        geturl(name);
    }
});

input.addEventListener(
    "keydown",
    function (e) {
    if (!e) {
        var e = window.event;
    }
    if (e.key == "Enter") {
        if (input.value !== "") {
        geturl(input.value);
        }
    }
    },
    false
);

const modeBtn = document.querySelector(".mode");
const root = document.querySelector(".wrapper")

modeBtn.addEventListener("click", ()=>{
    let modeLight = document.querySelector(".Light");
    let modeImg = document.querySelector(".mode-btn");
    if(modeLight.innerHTML === "Dark"){
        modeLight.innerText = "Light";
        modeImg.src = "./images/sun-icon.svg";
        root.classList.add("Dark");
    }else{
        modeLight.innerText = "Dark";
        modeImg.src = "./images/moon-icon.svg";
        root.classList.remove("Dark");
    }
});