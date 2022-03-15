let header = document.getElementById("header");
let horizontal_bar = document.getElementById("horizontal-tabs");
let menu_name = document.getElementsByClassName("dynamic-ellipsis-item")[0];
let buy_premium = document.getElementById("upgrade-now-button");
let chat_header = document.getElementById("chat-header");

let home_header = document.getElementById("home-header");
let profile_name = document.getElementsByClassName("profile-name")[0];
let item_buy = document.getElementsByClassName("btn-growth-lg")[0];
let gamepass_buy = document.getElementsByClassName("btn-primary-lg")[0];

// This appears on every page
try {    
    header.style.backgroundImage = "linear-gradient(to right ,#13c6d8, #DB33FF)";
    header.style.borderBottomLeftRadius = "10px";
    header.style.borderBottomRightRadius = "10px";
    
    chat_header.style.backgroundImage = "linear-gradient(to right , #13c6d8, #DB33FF)";
    chat_header.style.borderRadius = "5px";
    
    menu_name.style.backgroundImage = "linear-gradient(to right, #13c6d8, #DB33FF)";
    menu_name.style.webkitBackgroundClip = "text";
    menu_name.style.webkitTextFillColor = "transparent";
    menu_name.style.fontWeight = "701";

    buy_premium.style.backgroundImage = "linear-gradient(to right , #13c6d8, #DB33FF)";
    buy_premium.style.color = "white";
}catch(e) {
    console.log(e.message);
}

// Home Screen
try {
    home_header.style.backgroundImage = "linear-gradient(to right , #13c6d8, #DB33FF)";
    home_header.style.webkitBackgroundClip = "text";
    home_header.style.webkitTextFillColor = "transparent";
}catch(e) {
    console.log(e.message);
}

// Game Page
try {    
    horizontal_bar.style.backgroundImage = "linear-gradient(to right, #13c6d8, #DB33FF)";
    
    let vote_percentage = document.querySelector(".vote-percentage");
    vote_percentage.style.backgroundImage = "linear-gradient(to right , #13c6d8, #DB33FF)";

    let play_button = document.getElementsByClassName("icon-common-play")[0].parentElement;
    play_button.style.backgroundImage = "linear-gradient(to right, #13c6d8, #DB33FF)";
}catch(e) {
    console.log(e.message);
}

// User Page
try{    
    profile_name.style.backgroundImage = "linear-gradient(to right, #13c6d8, #DB33FF)";
    profile_name.style.webkitBackgroundClip = "text";
    profile_name.style.webkitTextFillColor = "transparent";
}catch(e) {
    console.log(e.message);
} 

// Buy Page
try {
    item_buy.style.backgroundImage = "linear-gradient(to right , #13c6d8, #DB33FF)";
}catch(e) {
    console.log(e.message);
}
try {
    gamepass_buy.style.backgroundImage = "linear-gradient(to right , #13c6d8, #DB33FF)";
    gamepass_buy.style.color = "white";
}catch(e) {
    console.log(e.message);
}