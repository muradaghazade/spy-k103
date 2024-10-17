const words = [
    "apple", "banana", "orange", "grape", "kiwi",
    "mango", "lemon", "peach", "cherry", "apricot",
    "plum", "pear", "pineapple", "strawberry", "blueberry",
    "raspberry", "coconut", "fig", "date", "pomegranate",
    "melon", "tangerine", "nectarine", "lime", "papaya",
    "watermelon", "passionfruit", "cantaloupe", "guava", "dragonfruit",
    "jackfruit", "persimmon", "zucchini", "pumpkin", "carrot",
    "broccoli", "spinach", "lettuce", "cabbage", "cauliflower",
    "peas", "bean", "potato", "sweetpotato", "corn",
    "onion", "garlic", "ginger", "celery", "beet",
    "radish", "pepper", "eggplant", "tomato", "cucumber",
    "mushroom", "artichoke", "asparagus", "kale", "chard",
    "arugula", "parsley", "basil", "thyme", "rosemary",
    "sage", "oregano", "mint", "cilantro", "dill",
    "chives", "tarragon", "fennel", "curry", "paprika",
    "mustard", "soy", "sesame", "chili", "vinegar",
    "olive", "coconut", "almond", "walnut", "pecan",
    "peanut", "cashew", "hazelnut", "pistachio", "chestnut",
    "sunflower", "pumpkinseed", "flaxseed", "chia", "hemp"
];

let word = words[Math.floor(Math.random() * words.length)];

let players = []
function start() {
    document.getElementById("count").style.display = "none";
    document.getElementById("start").style.display = "none"; //elave
    let player_count = document.getElementById("count").value;
    if (player_count < 3 || player_count > 99) {
        document.getElementById("error").style.display = "block";
        document.getElementById("start").style.display = "inline" //elave
    }
    else {
        document.getElementById("error").style.display = "none";
        document.querySelector(".btn").style.display = "inline";
        console.log(player_count);
    
        for (let i = 0; i < player_count; i++) {
            players.push(word)
        }

        let spy = Math.floor(Math.random() * players.length)
        players[spy] = "spy";
        console.log(players);
    }
    
}

function select() {
    document.getElementById("select").style.display = "none"; //elave
    document.getElementById("card").style.display = "block";
    let player = Math.floor(Math.random() * players.length)
    console.log(players[player]);
    document.getElementById('h1').innerText = players[player]
    players.splice(player, 1)
    console.log(players);
}

function hide() {
    document.getElementById("select").style.display = "inline"; //elave
    document.getElementById("card").style.display = "none";
    if (players.length == 0) {
        document.getElementById("box").style.display = "none";
        document.getElementById("new").style.display = "inline";
    }
}