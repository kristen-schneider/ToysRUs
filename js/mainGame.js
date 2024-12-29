const personalities = {
    "Opposites": 0,
    "End Game": 0,
    "Mentor/Mentee": 0,
    "Confused": 0,
    "Twins": 0,
    "Gorls": 0,
    "(step) brothers": 0,
    "Teammates": 0,
    "Adorable": 0
};

const gameData = {
    "1": {
        "text": "Pick a vacation.",
        "choices": {
            "TROPICAL. Give me a beach, a drink, and a book.":
                [2,["Gorls", "Gorls", "Opposites", "Twins", "Teammates"]],
            "CITY. I want to see the sites, find a vintage cardigan, and eat at the local hot spots.":
                [2,["Gorls", "Opposites", "Opposites", "End Game", "Mentor/Mentee", "Confused", "(step) brothers"]],
            "MOUNTAINS. I want to hike, breathe in the fresh air, and take in the views.":
                [2,["Mentor/Mentee", "Mentor/Mentee", "Confused", "Confused", "(step) brothers", "Teammates", "Adorable", "Adorable", "Adorable"]],
            "ROAD TRIP. I want to see it all and I have a playlist for each leg of the trip.":
                [2,["End Game", "End Game", "Twins", "Twins", "(step) brothers", "Teammates"]]
        }
    },
    "2": {
        "text": "Pick a meal.",
        "choices": {
            "Breakfast burrito, fresh fruit, and a coffee.":
                [3,["Gorls", "Gorls", "Twins", "Twins", "Teammates"]],
            "A big potluck with lots of variety!":
                [3,["Opposites", "Opposites", "Opposites", "End Game", "Mentor/Mentee", "Mentor/Mentee", "Confused", "Confused", "(step) brothers", "Adorable"]],
            "Spaghetti and meatballs, garlic bread, a salad, and a glass of wine.":
                [3,["End Game", "End Game", "(step) brothers", "Adorable"]],
            "A big, juicy burger with fries and a milkshake.":
                [3,["Gorls", "Mentor/Mentee", "Confused", "Twins", "(step) brothers", "Teammates", "Teammates", "Adorable", "Adorable"]]
        }
    },
    "3": {
        "text": "Pick a show to watch with me.",
        "choices": {
            "Something funny, like The Office.":
                [4,["Gorls", "End Game", "Twins", "Twins", "Teammates", "Teammates", "Adorable"]],
            "Something informative, like a documentary.":
                [5,["Mentor/Mentee", "Mentor/Mentee", "Confused", "Twins", "(step) brothers", "(step) brothers"]],
            "Something mindless, like some reality TV.":
                [6,["Gorls", "Gorls", "Opposites", "Opposites", "Opposites", "Confused", "Confused", "Teammates"]],
            "Something new, or something that neither of us have seen before.":
                [7,["End Game", "End Game", "Mentor/Mentee", "(step) brothers", "Adorable", "Adorable"]]
        }
    },
    "4": {
        "text": "Pick a favorite episode from The Office.",
        "choices": {
            "The one where Meredith gets hit by Michael's car, and also rabies.":
                [8,["Confused", "(step) brothers", "(step) brothers"]],
            "The one where Michael hosts a dinner party and shows off his plasma screen TV.":
                [8,["End Game", "Twins", "(step) brothers"]],
            "The Christmas party where Jim gives Pam a teapot.":
                [8,["Gorls", "Adorable", "Adorable", "Adorable"]],
            "The Dundies, when Pam gets banned from Chili's.":
                [8,["Gorls", "End Game", "Confused", "Confused", "Teammates", "Teammates", "Teammates"]]
        }
    },
    "5": {
        "text": "What kind of documentary...?",
        "choices": {
            "True crime (e.g. The Staircase, Abducted in Plain Sight, etc.)":
                [8,["Twins"]],
            "Historical events (e.g. Chernobyl, The Crown, etc.":
                [8,["Gorls", "Twins", "Adorable"]],
            "Cultural or travel (e.g. The Amazing Race, Somebody Feed Phil, etc.)":
                [8,["Opposites", "End Game", "End Game", "Mentor/Mentee", "Mentor/Mentee", "Confused", "Confused", "(step) brothers"]],
            "Science or nature (e.g. Planet Earth, The Universe, etc.)":
                [8,["Mentor/Mentee", "Twins", "(step) brothers", "(step) brothers", "Teammates", "Adorable"]]
        }
    },
    "6": {
        "text": "What kind of reality TV...?",
        "choices": {
            "Love Island, Love is Blind, or any other dating show.":
                [8,["Gorls", "Gorls", "Opposites", "Opposites"]],
            "Competition shows like Survivor or American Ninja Warrior.":
                [8,["Confused", "(step) brothers", "(step) brothers"]],
            "Travel or food shows like the Great British Baking Show or The Amazing Race.":
                [8,["End Game", "End Game", "Mentor/Mentee", "Confused", "(step) brothers", "Teammates", "Adorable", "Adorable"]],
            "Singing or talent shows like The Voice or America's Got Talent.":
                [8,["Gorls", "Gorls", "Confused", "Adorable"]]
        }
    },
    "7": {
        "text": "Pick a genre/category.",
        "choices": {
            "Historical drama.":
                [8,["Gorls", "End Game", "Twins", "Adorable", "Adorable"]],
            "Comedy.":
                [8,["Gorls", "End Game", "Twins", "Teammates", "Teammates"]],
            "Sci-fi or fantasy.":
                [8,["Opposites", "Opposites", "Mentor/Mentee", "Mentor/Mentee", "Confused", "Confused", "(step) brothers"]],
            "Action.":
                [8,["Confused", "(step) brothers", "(step) brothers", "Teammates"]]
        }
    },
    "8": {
        "text": "Pick a state in which you would NEVER want to live.",
        "choices": {
            "California":
                [9,["", "Opposites", "Mentor/Mentee", "Mentor/Mentee", "Confused"]],
            "Florida":
                [9,["", "End Game", "End Game", "Twins", "Twins", "(step) brothers"]],
            "Iowa":
                [9,["Gorls", "Gorls", "(step) brothers", "(step) brothers"]],
            "New Jersey":
                [9,["Gorls", "Opposites", "Opposites", "End Game", "Mentor/Mentee", "Confused", "Confused", "Teammates", "Teammates", "Adorable", "Adorable"]]
        }
    },
    "9": {
        "text": "A green flag of YOURS is...",
        "choices": {
            "You have actually read the terms and conditions.":
                [10,["Opposites", "Mentor/Mentee", "Mentor/Mentee", "Confused", "Teammates"]],
            "You have a (bad) joke or pun ready for almost any occasion.":
                [10,["Opposites", "Opposites", "End Game", "End Game", "(step) brothers", "(step) brothers", "(step) brothers", "Teammates", "Teammates"]],
            "You relocate spiders instead of killing them.":
                [10,["Gorls", "Mentor/Mentee", "Confused", "Adorable", "Adorable", "Adorable"]],
            "You know how to fold a fitted sheet.":
                [10,["Gorls", "Gorls", "End Game", "Confused", "Twins"]]
        }
    },
    "10": {
        "text": "A red flag of YOURS is...",
        "choices": {
            "You are allergic to dogs.":
                [11,["Opposites", "Opposites", "Confused", "(step) brothers"]],
            "You send too many memes/tiktok videos.":
                [11,["Gorls", "Opposites", "Confused", "Confused", "(step) brothers", "Teammates", "Teammates", "Adorable", "Adorable"]],
            "You take too long to order at a restaurant and always ask for a recommendation.":
                [11,["End Game", "End Game", "End Game", "Mentor/Mentee", "(step) brothers"]],
            "You have a caffeine addiction.":
                [11,["Gorls", "Gorls", "Mentor/Mentee", "Mentor/Mentee", "Twins", "Teammates", "Adorable"]]
        }
    },
    "11": {
        "text": "A green flag of MINE (kristen) is...",
        "choices": {
            "I always make my bed in the morning.":
                [12,["End Game", "Mentor/Mentee", "Confused", "(step) brothers"]],
            "My Notes App.":
                [12,["Gorls", "End Game", "End Game", "Twins", "Twins", "(step) brothers"]],
            "I know how to skip and do a somersault.":
                [12,["Gorls", "(step) brothers", "Teammates"]],
            "I am good at sharing my crayons and colored pencils.":
                [12,["Gorls", "Mentor/Mentee", "Confused", "Confused", "Teammates", "Teammates", "Adorable", "Adorable", "Adorable"]]
        }
    },
    "12": {
        "text": "A red flag of MINE (kristen) is...",
        "choices": {
            "My sense of direction is terrible.":
                [13,["Opposites", "Mentor/Mentee", "Mentor/Mentee", "Confused", "Twins", "Teammates", "Adorable"]],
            "I go to bed too early.":
                [13,["Gorls", "Opposites", "End Game", "Mentor/Mentee", "(step) brothers", "Adorable"]],
            "I gave you a first impression that I didn't like you.":
                [13,["End Game", "End Game", "Confused", "Confused", "Twins"]],
            "I am a slow eater.":
                [13,["Gorls", "(step) brothers", "(step) brothers", "Teammates", "Teammates", "Adorable"]]
        }
    },
    "13": {
        "text": "If you were given a free ticket to outer space, would you take it?",
        "choices": {
            "Yes.":
                [14,["Opposites", "Opposites", "Mentor/Mentee", "Confused", "Confused", "(step) brothers", "(step) brothers", "Teammates"]],
            "No.":
                [14,["Gorls", "End Game", "Twins", "Twins", "Adorable"]],
        }
    },
    "14": {
        "text": "What color scheme is your bedroom?",
        "choices": {
            "Gilmore Girls (subdued reds, browns, oranges, and yellows).":
                [15,["End Game", "End Game", "End Game", "Twins"]],
            "Beige Mom (whites and browns).":
                [15,["Gorls", "Gorls", "Gorls", "Mentor/Mentee", "Twins", "(step) brothers", "Teammates", "Adorable", "Adorable"]],
            "Pop Art (bright yellows, pinks, greens, and oranges).":
                [15,["Opposites", "Mentor/Mentee", "Confused", "Confused", "Confused", "Twins", "Teammates", "Adorable"]],
            "Vampiric (blacks, whites, reds).":
                [15,["Opposites", "Opposites", "(step) brothers", "(step) brothers", "Teammates"]]
        }
    },
    "15": {
        "text": "Pick a season",
        "choices": {
            "Summer.":
                [0,["Gorls", "Gorls", "End Game", "End Game", "Opposites", "Opposites", "Adorable"]],
            "Spring.":
                [0,["Confused", "Teammates", "Teammates", "Adorable"]],
            "Fall.":
                [0,["Gorls", "End Game", "Twins", "Twins", "(step) brothers", "Teammates", "Adorable"]],
            "Winter.":
                [0,["Mentor/Mentee", "Mentor/Mentee", "Confused", "Confused", "Twins", "(step) brothers", "(step) brothers"]]
        }
    },
};

let currentState = 1;

function renderState(state) {
    console.log("b");
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');

    storyText.textContent = gameData[state].text;
    choicesContainer.innerHTML = '';

    for (const [choice, info] of Object.entries(gameData[state].choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        let nextState = info[0];
        button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
        choicesContainer.appendChild(button);
    }
}

function changeState(newState, selectedPersonalities) {
    console.log("changing states");
    console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}

function revealMostSelectedVegetable() {
    console.log("calculating fate");
    let maxCount = 0;
    let maxLabel = '';

    for (const [vegetable, count] of Object.entries(personalities)){
        if (count > maxCount) {
            maxCount = count;
            maxLabel = vegetable;
        }
    }
    console.log(maxLabel);
    const storyText = document.getElementById('story-text');
    storyText.textContent = `We are ${maxLabel}`;
    document.getElementById('choices').style.display = 'none';
}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    console.log("e");
    renderState(currentState);
};
