let content = document.getElementsByClassName('content')[0];
let header = document.getElementById("header");
let navigation = document.getElementById("navigation");
let left_bar = document.getElementsByClassName("left-col-list")[0];
let horizontal_bar = document.getElementById("horizontal-tabs");
let menu_name = document.getElementsByClassName("dynamic-ellipsis-item")[0];
let buy_premium = document.getElementById("upgrade-now-button");
let chat_header = document.getElementById("chat-header");

let home_header = document.getElementById("home-header");
let friends_list = document.getElementById("people-list-container");
let place_list = document.getElementById('place-list');
let profile_name = document.getElementsByClassName("profile-name")[0];
let item_buy = document.getElementsByClassName("btn-growth-lg")[0];
let gamepass_buy = document.getElementsByClassName("btn-primary-lg")[0];

let someThing = document.getElementsByClassName('system-feedback')[0];

// This appears on every page
let github_link = document.createElement("li");
github_link.style = "display: block;";
github_link.innerHTML = '<a class="dynamic-overflow-container text-nav" href="https://github.com/Phoneguytech75/Roblox-Custom" id="nav-home" btr-name="sidebar_home" style=""><span class="font-header-2 dynamic-ellipsis-item">Github</span></a>';
left_bar.prepend(github_link);
try {
    content.style.marginLeft = '25px';
    
    header.style.backgroundImage = "linear-gradient(to right ,#13c6d8, #DB33FF)";
    header.style.borderRadius = '10px';
    header.style.marginTop = '5px';
    header.style.marginLeft = '10px';
    header.style.marginRight = '10px';

    navigation.style.marginTop = '12px';
    navigation.style.marginLeft = '10px';
    navigation.style.borderRadius = '10px';

    // left_bar.childNodes.forEach(elm => {
    //     elm.style.marginTop = '15px';
    //     elm.style.backgroundColor = 'rgb(35, 37, 39)';
    //     elm.style.padding = '4px';
    //     elm.style.borderRadius = '8px';
    //     elm.style.border = 'solid';
    //     elm.style.borderColor = 'rgb(48 50 53)';
    //     elm.style.borderWidth = '4px';
    // });
    
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
    // Recommend Game Prompt
    if (window.location.href === 'https://www.roblox.com/home') {
        const header = document.getElementsByClassName('section')[0];
        header.style.display = 'inline-flex';
        header.style.flexDirection = 'row';
        header.style.alignItems = 'center';
        header.style.backgroundColor = '#191B1D';
        header.style.width = '100%';
        header.style.padding = '10px';
        header.style.marginBottom = '20px';
        header.style.borderRadius = '15px';
        header.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 10%), 0 8px 10px -6px rgb(0 0 0 / 10%)';

        const recommendation = document.createElement('div');
        recommendation.id = "recommendation";
        header.appendChild(recommendation);

        const button = document.createElement('button');
        button.style.marginLeft = '10px';
        button.style.backgroundColor = 'rgb(12 149 231)';
        button.innerHTML = "Recommend";
        button.onclick = async () => await recommendGame();

        recommendation.appendChild(button);
    }


    friends_list.style.backgroundColor = '#191B1D';
    friends_list.style.width = '100%';
    friends_list.style.padding = '18px';
    friends_list.style.paddingBottom = '1px';
    friends_list.style.marginBottom = '20px';
    friends_list.style.borderRadius = '15px';
    friends_list.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 10%), 0 8px 10px -6px rgb(0 0 0 / 10%)';

    place_list.style.backgroundColor = '#191B1D';
    place_list.style.width = '100%';
    place_list.style.padding = '18px';
    place_list.style.marginBottom = '20px';
    place_list.style.borderRadius = '15px';
    place_list.style.boxShadow = '0 20px 25px -5px rgb(0 0 0 / 10%), 0 8px 10px -6px rgb(0 0 0 / 10%)';

    home_header.style.backgroundImage = "linear-gradient(to right , #13c6d8, #DB33FF)";
    home_header.style.webkitBackgroundClip = "text";
    home_header.style.webkitTextFillColor = "transparent";
}catch(e) {
    console.log(e.message);
}

// Discover Page
try {
    let games = document.getElementsByClassName('game-card-link');
    console.log(games.length);
    for (i=0; i < games.length; i++) {
        const game = games[i];
        const id = game.getAttribute('id');
        console.log(game);
    } 
} catch(e) {
    console.log(e.message);
}

// Game Page
try { 

    horizontal_bar.style.backgroundImage = "linear-gradient(to right, #13c6d8, #DB33FF)";
    
    let vote_percentage = document.querySelector(".vote-percentage");
    vote_percentage.style.backgroundImage = "linear-gradient(to right , #13c6d8, #DB33FF)";

    let play_button = document.getElementsByClassName("icon-common-play")[0].parentElement;
    play_button.style.backgroundImage = "linear-gradient(to right, #13c6d8, #DB33FF)";

    someThing.remove();
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

// Destroy nav
document.getElementsByClassName('rbx-upgrade-now')[0].remove();
document.getElementById('btr-blogfeed').remove();

async function recommendGame() {
    const continueSection = document.getElementsByClassName('game-carousel')[0];
    const firstGame = continueSection.childNodes[0].childNodes[0];
    const placeID = firstGame.getAttribute('id');

    const req = await fetch(`https://apis.roblox.com/universes/v1/places/${placeID}/universe`);
    const reqJSON = await req.json();
    const universeID = reqJSON.universeId;

    const req2 = await fetch(`https://games.roblox.com/v1/games/recommendations/game/${universeID}?MaxRows=1&IsTruncatedResultsEnabled=false`);
    const req2JSON = await req2.json();
    const game = req2JSON.games[Math.floor(Math.random() * req2JSON.games.length - 1)];

    const gameData = {
        name: game.name,
        creator: game.creatorName,
        placeID: game.placeId,
        url: "https://roblox.com/games/"+game.placeId
    }
    console.log(gameData);
    const recommendation = document.getElementById('recommendation');

    if (document.getElementById('gameTile') === null) {   
        const gameTile = document.createElement('div');
        gameTile.id = 'gameTile';
        gameTile.innerHTML = gameData.name;
        recommendation.appendChild(gameTile);
    } else {
        const gameTile = document.getElementById('gameTile'); 
        gameTile.innerHTML = gameData.name;
    }    
}